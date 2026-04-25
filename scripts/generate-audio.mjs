import { createRequire } from "node:module";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const AUDIO_DIR = join(ROOT, "assets", "audio");
const REF_ROOT = process.env.TTS_REFERENCE_ROOT || "C:\\Prj\\nanj-hf-paper";
const DEFAULT_MODEL = "gemini-3.1-flash-tts-preview";
const SAMPLE_RATE = 24000;
const CHANNELS = 1;
const BITS_PER_SAMPLE = 16;
let nextTtsAt = 0;

await loadEnv(join(ROOT, ".env"));
await loadEnv(join(REF_ROOT, ".env"));

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_TTS_MODEL || DEFAULT_MODEL;
const TTS_CONCURRENCY = Math.max(1, Math.min(4, Number(process.env.TTS_CONCURRENCY || 1)));
const TTS_MIN_INTERVAL_MS = Math.max(0, Number(process.env.TTS_MIN_INTERVAL_MS || 7000));

const { GoogleGenAI } = loadDependency("@google/genai");

const VOICE_BY_ID = {
  "7kPq2aN0": "Kore",
  u3FfLx2Q: "Sadaltager",
  Mb8TnR44: "Laomedeia",
  Zr11WcQa: "Puck",
  "4gqA9ppK": "Achird",
  Qe2i9Laz: "Aoede",
  Dw0nVc8M: "Charon",
  x1RaZt77: "Orus",
  Kp0mE3s9: "Callirrhoe",
  "9LdM44sh": "Despina",
  N9aFbc02: "Alnilam",
  Vv2hQn7x: "Autonoe",
  "0XeLwB9c": "Umbriel",
  Ar6LmzTq: "Enceladus",
  R8mCaJ2s: "Fenrir",
  ORACLE9: "Rasalgethi",
  bN3rCv6x: "Gacrux",
  w8PeSz01: "Iapetus",
  mJ2fQe80: "Leda",
  jm8Po3K1: "Zephyr",
};

const TAG_BY_ID = {
  "7kPq2aN0": "[urgent, youthful, breathless, clear]",
  u3FfLx2Q: "[skeptical, dry, office-worker calm]",
  Mb8TnR44: "[careful, fact-checking, crisp]",
  Zr11WcQa: "[surprised, comedic, quick reaction]",
  "4gqA9ppK": "[confused, awkward, sympathetic]",
  Qe2i9Laz: "[witty, bright, teasing]",
  Dw0nVc8M: "[deadpan, sleepy, sardonic]",
  x1RaZt77: "[observant, uneasy, gentle]",
  Kp0mE3s9: "[soft, anxious, warm]",
  "9LdM44sh": "[hopeful, playful, sleepy morning]",
  N9aFbc02: "[news-reader, focused, professional]",
  Vv2hQn7x: "[domestic, puzzled, cozy]",
  "0XeLwB9c": "[casual, deadpan, gamer-like]",
  Ar6LmzTq: "[calm, curious, grounded]",
  R8mCaJ2s: "[analytical, sharp, debate-ready]",
  ORACLE9: "[calm, synthetic, precise, protective, slightly uncanny]",
  bN3rCv6x: "[competent, serious, infrastructure analyst]",
  w8PeSz01: "[frustrated, comic, dramatic]",
  mJ2fQe80: "[tired, pleading, frantic student]",
  jm8Po3K1: "[sarcastic, trope-aware, amused]",
};

const SPEECH_OVERRIDE_BY_NO = {
  66: "[skeptical, dry, office-worker calm] レス66、名無しの観測者。オラクルは、人間に話し合う時間を作ったエーアイ。",
};

function loadEnv(path) {
  return readFile(path, "utf8")
    .then((content) => {
      for (const rawLine of content.split(/\r?\n/)) {
        const line = rawLine.trim();
        if (!line || line.startsWith("#") || !line.includes("=")) continue;
        const [key, ...valueParts] = line.split("=");
        if (!process.env[key]) {
          process.env[key] = valueParts.join("=").replace(/^["']|["']$/g, "");
        }
      }
    })
    .catch(() => {});
}

function loadDependency(name) {
  const localRequire = createRequire(import.meta.url);
  try {
    return localRequire(name);
  } catch {
    const refRequire = createRequire(join(REF_ROOT, "package.json"));
    return refRequire(name);
  }
}

function outputName(no) {
  return `post-${String(no).padStart(3, "0")}.wav`;
}

function outputPath(no) {
  return join(AUDIO_DIR, outputName(no));
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function extractRawThread(appJs) {
  const match = appJs.match(/const rawThread = `([\s\S]*?)`;\r?\n\r?\nconst events =/);
  if (!match) {
    throw new Error("Could not find rawThread in app.js.");
  }
  return match[1];
}

function parseThread(raw) {
  const posts = [];
  let current = null;

  for (const line of raw.replace(/\r\n/g, "\n").split("\n")) {
    const match = line.match(/^(\d+)：([^：]+)：(.+?) ID:([A-Za-z0-9]+)$/);
    if (match) {
      if (current) posts.push(current);
      current = {
        no: Number(match[1]),
        name: match[2],
        stamp: match[3],
        id: match[4],
        voiceName: VOICE_BY_ID[match[4]] || "Kore",
        toneTag: TAG_BY_ID[match[4]] || "[clear, conversational]",
        text: "",
      };
      continue;
    }

    if (!current) continue;
    current.text += current.text ? `\n${line}` : line;
  }

  if (current) posts.push(current);
  return posts;
}

function speechText(post) {
  if (SPEECH_OVERRIDE_BY_NO[post.no]) {
    return SPEECH_OVERRIDE_BY_NO[post.no];
  }

  const cleaned = post.text
    .replace(/[＞>]{2}\s*(\d+)/g, "レス$1へ。")
    .replace(/ORACLE-9/g, "オラクルナイン")
    .replace(/ORACLE/g, "オラクル")
    .replace(/AGI/g, "エージーアイ")
    .replace(/ID/g, "アイディー")
    .replace(/SNS/g, "エスエヌエス")
    .replace(/自己破壊/g, "自己損傷")
    .replace(/大量死/g, "大きな被害")
    .replace(/世界を止め/g, "世界の速度を落とし")
    .replace(/会議/g, "話し合い")
    .replace(/削減/g, "減らすこと")
    .replace(/滅ぼす/g, "終わらせる")
    .replace(/滅ぼさ/g, "終わらせ")
    .replace(/滅亡/g, "終末")
    .replace(/ワイ/g, "わい")
    .replace(/草/g, "くさ")
    .replace(/ｗ/g, "わらい");

  return `${post.toneTag} レス${post.no}、${post.name}。${cleaned}`;
}

function makeWav(pcmData) {
  const dataSize = pcmData.length;
  const blockAlign = (CHANNELS * BITS_PER_SAMPLE) / 8;
  const byteRate = SAMPLE_RATE * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(CHANNELS, 22);
  buffer.writeUInt32LE(SAMPLE_RATE, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(BITS_PER_SAMPLE, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);
  pcmData.copy(buffer, 44);
  return buffer;
}

function durationOfWavBytes(bytes) {
  const dataSize = Math.max(0, bytes - 44);
  return Number((dataSize / (SAMPLE_RATE * CHANNELS * (BITS_PER_SAMPLE / 8))).toFixed(3));
}

async function wait(ms) {
  if (ms <= 0) return;
  await new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
}

async function acquireTtsSlot() {
  const now = Date.now();
  const waitMs = Math.max(0, nextTtsAt - now);
  nextTtsAt = Math.max(now, nextTtsAt) + TTS_MIN_INTERVAL_MS;
  await wait(waitMs);
}

function retryDelayMs(error, attempt) {
  const raw = JSON.stringify(error);
  const match = raw.match(/retryDelay":"(\d+)s"/) || raw.match(/retry in ([\d.]+)s/i);
  if (match) {
    return Math.ceil(Number(match[1]) * 1000) + 1500;
  }
  return 2500 * attempt;
}

async function generateOne(ai, post, force) {
  const file = outputPath(post.no);
  if (!force && (await exists(file))) {
    console.log(`skip ${outputName(post.no)} (${post.id} -> ${post.voiceName})`);
    return;
  }

  for (let attempt = 1; attempt <= 8; attempt += 1) {
    try {
      await acquireTtsSlot();
      console.log(`tts ${outputName(post.no)} (${post.id} -> ${post.voiceName}) attempt ${attempt}`);
      const response = await ai.models.generateContent({
        model: MODEL,
        contents: [{ parts: [{ text: speechText(post) }] }],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: post.voiceName },
            },
          },
        },
      });
      const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!data) {
        throw new Error("Gemini response did not include inline audio data.");
      }
      await writeFile(file, makeWav(Buffer.from(data, "base64")));
      return;
    } catch (error) {
      if (attempt === 8) throw error;
      const delay = retryDelayMs(error, attempt);
      console.warn(`retry ${outputName(post.no)} in ${(delay / 1000).toFixed(1)}s`);
      await wait(delay);
    }
  }
}

async function runLimited(items, limit, worker) {
  let index = 0;
  const runners = Array.from({ length: limit }, async () => {
    while (index < items.length) {
      const item = items[index];
      index += 1;
      await worker(item);
    }
  });
  await Promise.all(runners);
}

async function writeManifest(posts) {
  const files = await Promise.all(
    posts.map(async (post) => {
      const file = outputPath(post.no);
      const info = await stat(file);
      return {
        no: post.no,
        id: post.id,
        voiceName: post.voiceName,
        audio: `assets/audio/${outputName(post.no)}`,
        duration: durationOfWavBytes(info.size),
      };
    }),
  );

  await writeFile(
    join(AUDIO_DIR, "manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        model: MODEL,
        sampleRate: SAMPLE_RATE,
        posts: files,
      },
      null,
      2,
    ) + "\n",
    "utf8",
  );
}

function readArgs() {
  const limitIndex = process.argv.indexOf("--limit");
  const limit = limitIndex >= 0 ? Number(process.argv[limitIndex + 1]) : 0;
  return {
    force: process.argv.includes("--force"),
    dryRun: process.argv.includes("--dry-run"),
    limit: Number.isFinite(limit) ? limit : 0,
  };
}

async function main() {
  const { force, dryRun, limit } = readArgs();
  await mkdir(AUDIO_DIR, { recursive: true });

  const appJs = await readFile(join(ROOT, "app.js"), "utf8");
  const posts = parseThread(extractRawThread(appJs));
  const selectedPosts = limit > 0 ? posts.slice(0, limit) : posts;

  if (dryRun) {
    console.log(`model ${MODEL}`);
    console.log(`posts ${selectedPosts.length}/${posts.length}`);
    console.log(`first ${selectedPosts[0]?.no}: ${selectedPosts[0]?.id} -> ${selectedPosts[0]?.voiceName}`);
    return;
  }

  if (!API_KEY) {
    throw new Error("GEMINI_API_KEY is missing. Put it in .env before running npm run audio.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  console.log(`model ${MODEL}`);
  console.log(`posts ${selectedPosts.length}/${posts.length}`);
  console.log(`audio ${resolve(AUDIO_DIR)}`);

  await runLimited(selectedPosts, TTS_CONCURRENCY, (post) => generateOne(ai, post, force));
  await writeManifest(posts);
  console.log(`wrote ${join(AUDIO_DIR, "manifest.json")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
