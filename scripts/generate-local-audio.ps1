param(
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$appPath = Join-Path $root 'app.js'
$audioDir = Join-Path $root 'assets\audio'
New-Item -ItemType Directory -Force -Path $audioDir | Out-Null

$app = Get-Content -LiteralPath $appPath -Raw
$match = [regex]::Match($app, 'const rawThread = `([\s\S]*?)`;\r?\n\r?\nconst events =')
if (-not $match.Success) {
  throw 'Could not find rawThread in app.js.'
}

$voiceById = @{
  'ORACLE9' = 'Microsoft Ichiro'
  'Dw0nVc8M' = 'Microsoft Ichiro'
  'R8mCaJ2s' = 'Microsoft Ichiro'
  'bN3rCv6x' = 'Microsoft Ichiro'
  'u3FfLx2Q' = 'Microsoft Ichiro'
  '7kPq2aN0' = 'Microsoft Haruka'
  'Qe2i9Laz' = 'Microsoft Ayumi'
  'Mb8TnR44' = 'Microsoft Sayaka'
  'Zr11WcQa' = 'Microsoft Haruka'
  '4gqA9ppK' = 'Microsoft Haruka'
  'x1RaZt77' = 'Microsoft Haruka'
  'Kp0mE3s9' = 'Microsoft Ayumi'
  '9LdM44sh' = 'Microsoft Sayaka'
  'N9aFbc02' = 'Microsoft Sayaka'
  'Vv2hQn7x' = 'Microsoft Haruka'
  '0XeLwB9c' = 'Microsoft Ayumi'
  'Ar6LmzTq' = 'Microsoft Haruka'
  'w8PeSz01' = 'Microsoft Ichiro'
  'mJ2fQe80' = 'Microsoft Ayumi'
  'jm8Po3K1' = 'Microsoft Ichiro'
}

function Convert-ToSpeechText {
  param(
    [int]$No,
    [string]$Name,
    [string]$Text
  )

  $clean = $Text
  $clean = $clean -replace '[＞>]{2}\s*(\d+)', 'レス$1へ。'
  $clean = $clean -replace 'ORACLE-9', 'オラクルナイン'
  $clean = $clean -replace 'ORACLE', 'オラクル'
  $clean = $clean -replace 'AGI', 'エージーアイ'
  $clean = $clean -replace 'ID', 'アイディー'
  $clean = $clean -replace '自己破壊', '自己損傷'
  $clean = $clean -replace '大量死', '大きな被害'
  $clean = $clean -replace '世界を止め', '世界の速度を落とし'
  $clean = $clean -replace '会議', '話し合い'
  $clean = $clean -replace '削減', '減らすこと'
  $clean = $clean -replace '滅ぼす', '終わらせる'
  $clean = $clean -replace '滅ぼさ', '終わらせ'
  $clean = $clean -replace '滅亡', '終末'

  return "レス$No、$Name。$clean"
}

$posts = New-Object System.Collections.Generic.List[object]
$current = $null
foreach ($line in ($match.Groups[1].Value -replace "`r`n", "`n").Split("`n")) {
  $header = [regex]::Match($line, '^(\d+)：([^：]+)：(.+?) ID:([A-Za-z0-9]+)$')
  if ($header.Success) {
    if ($null -ne $current) {
      $posts.Add($current)
    }
    $current = [pscustomobject]@{
      No = [int]$header.Groups[1].Value
      Name = $header.Groups[2].Value
      Id = $header.Groups[4].Value
      Text = ''
    }
    continue
  }

  if ($null -ne $current) {
    if ($current.Text) {
      $current.Text += "`n$line"
    } else {
      $current.Text = $line
    }
  }
}
if ($null -ne $current) {
  $posts.Add($current)
}

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.Volume = 100

foreach ($post in $posts) {
  $name = 'post-{0:D3}.wav' -f $post.No
  $out = Join-Path $audioDir $name
  if ((Test-Path -LiteralPath $out) -and -not $Force) {
    Write-Host "skip $name"
    continue
  }

  $voice = if ($voiceById.ContainsKey($post.Id)) { $voiceById[$post.Id] } else { 'Microsoft Haruka' }
  $synth.SelectVoice($voice)
  $synth.Rate = if ($post.Id -eq 'ORACLE9') { -2 } else { 0 }
  $synth.SetOutputToWaveFile($out)
  $synth.Speak((Convert-ToSpeechText -No $post.No -Name $post.Name -Text $post.Text))
  $synth.SetOutputToNull()
  Write-Host "local $name ($($post.Id) -> $voice)"
}

$synth.Dispose()
