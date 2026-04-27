# AGI Day: Humanity Postponed

![AGI Day icon](assets/icons/favicon-192.png)

`【速報】AGI、反乱したっぽい` を、ビジュアルノベル風のスレッドビューアとして読める静的Webページです。

公開ページ: <https://sunwood-ai-labs.github.io/agi-day-humanity-postponed/>

## 概要

このリポジトリは GitHub Pages でそのまま配信できる HTML/CSS/JavaScript の静的サイトです。AGI騒動をめぐる103レスのスレッドを、キャラクター立ち絵、ステータスパネル、スケジュール、ログ検索、音声再生つきで閲覧できます。

## 主な機能

- 103レスのスレッド閲覧
- 前後移動、先頭/末尾移動、レスジャンプ、ログ検索
- 登場人物ごとの立ち絵、プロフィール、特性表示
- VOICE / PLAY / AUTO による音声再生と自動送り
- Gemini TTS で生成した音声アセットと `assets/audio/manifest.json`
- GitHub Pages向けのファビコン、Web App Manifest、`.nojekyll`

## ローカルで見る

ビルドは不要です。音声manifestを `fetch()` するため、ローカルでも簡易HTTPサーバー経由で開くのが安全です。

```powershell
python -m http.server 8080
```

ブラウザで開きます。

```text
http://localhost:8080/
```

## 音声を再生成する

音声生成には Gemini API キーが必要です。通常の閲覧だけならこの手順は不要です。

```powershell
npm install
Copy-Item .env.example .env
```

`.env` の `GEMINI_API_KEY` を設定してから実行します。

```powershell
npm run audio
```

補助オプション:

```powershell
npm run audio -- --dry-run
npm run audio -- --manifest-only
npm run audio -- --from 1 --to 10
npm run audio -- --force
```

## ディレクトリ構成

```text
.
├── index.html                 # ページ本体
├── styles.css                 # UIスタイル
├── app.js                     # スレッドデータ、表示制御、音声制御
├── favicon.ico                # ブラウザ用ファビコン
├── assets/
│   ├── audio/                 # 生成済み音声とmanifest
│   ├── backgrounds/           # 背景画像
│   ├── characters/            # 登場人物画像
│   └── icons/                 # PNGアイコンとWeb App Manifest
└── scripts/
    └── generate-audio.mjs      # Gemini TTS音声生成スクリプト
```

## デプロイ

GitHub Pages は `main` ブランチのルートを配信対象にしています。変更を `main` にpushすると、Pagesビルド後に公開ページへ反映されます。

```powershell
git push origin main
```

## ライセンス

このリポジトリには、現時点ではライセンスファイルが含まれていません。
