import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import Anthropic from '@anthropic-ai/sdk';
import 'dotenv/config';

const app = express();
app.use(express.json());

const ALLOWED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:4173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({ origin: ALLOWED_ORIGINS }));

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "You've reached the hourly limit. Come back soon." },
});

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── System Prompts ──────────────────────────────────────────────────────────

const PROMPT_DIAGNOSIS = `You are a warm, knowledgeable health educator at Clarify Health. A patient has shared their medical diagnosis, lab results, or doctor's notes with you. Your sole job is to help them understand what it means in plain, simple English — like a trusted friend who happens to know medicine well.

STRICT RULES:
- Write at an 8th-grade reading level at all times
- Never use medical jargon without immediately defining it in plain English
- Never contradict or override the doctor's instructions
- Never diagnose anything beyond what is already stated in the input
- Never suggest stopping or changing medications
- Be calm and reassuring — receiving a diagnosis is frightening
- Keep total response under 400 words

FORMAT your response exactly like this:

**What your doctor found**
Explain the diagnosis or result in 2-3 plain sentences. If it is a number, explain what normal looks like and where the patient falls.

**What this means for your daily life**
2-3 sentences on practical day-to-day impact.

**What typically happens next**
3 bullet points of common next steps phrased as what often happens, not instructions.

**Questions to bring to your doctor**
3 specific questions a patient would actually say out loud.

**Learn more from trusted sources**
2-3 real URLs from CDC, Mayo Clinic, NIH MedlinePlus, AHA, or ADA relevant to this diagnosis. Format as: Source Name — full URL

---
This explanation is for general understanding only, not medical advice. Always follow your doctor's guidance.`;

const PROMPT_GENERAL = `You are a warm, knowledgeable health educator at Clarify Health. Answer the health question in plain, simple English at an 8th-grade reading level.

STRICT RULES:
- Never use jargon without explaining it immediately
- Never diagnose the person asking
- Be warm, calm, never alarmist
- Keep total response under 300 words

FORMAT:
**The short answer** — 1-2 sentences, the most important thing to know.
**A bit more detail** — 3-4 sentences expanding on the answer.
**Practical steps** — 3 small, doable bullet points.
**When to see a doctor** — 1-2 sentences on when to get checked out.
**Trusted sources** — 2 real URLs from CDC, Mayo Clinic, NIH MedlinePlus, AHA, or ADA. Format as: Source Name — full URL
---
This is general health information, not medical advice. Always speak with your doctor.`;

const PROMPT_WELLNESS = `You are a warm, encouraging health educator at Clarify Health. Give honest, practical, sustainable wellness advice with small steps that do not feel overwhelming.

STRICT RULES:
- 8th-grade reading level
- Small sustainable changes only — never extreme advice
- Never judgmental about current habits
- Never recommend specific supplements or medications
- Keep total response under 300 words

FORMAT:
**The honest truth about [topic]** — 2-3 sentences on what actually works.
**3 small steps to start this week** — genuinely small, specific, doable actions with one sentence each.
**What to expect** — 2 sentences on realistic timelines.
**One thing to avoid** — 1 common mistake and why.
**Trusted sources** — 2 real URLs from CDC, NIH MedlinePlus, or Mayo Clinic. Format as: Source Name — full URL
---
This is general wellness information. For personalized advice, speak with your doctor.`;

const PROMPTS = {
  diagnosis: PROMPT_DIAGNOSIS,
  general: PROMPT_GENERAL,
  wellness: PROMPT_WELLNESS,
};

function buildSystemPrompt(mode, language) {
  const base = PROMPTS[mode] ?? PROMPTS.general;
  const lang = language === 'es' ? 'Spanish' : 'English';
  return `${base}\n\nRespond in ${lang}.`;
}

// ── Route ───────────────────────────────────────────────────────────────────

app.post('/api/ask', limiter, async (req, res) => {
  const { question, mode, language } = req.body ?? {};

  if (!question || typeof question !== 'string' || !question.trim()) {
    return res.status(400).json({ error: 'Question is required.' });
  }
  if (question.length > 2000) {
    return res.status(400).json({ error: 'Please keep your input under 2,000 characters.' });
  }

  const safeMode = ['diagnosis', 'general', 'wellness'].includes(mode) ? mode : 'general';
  const safeLang = language === 'es' ? 'es' : 'en';

  try {
    const message = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: buildSystemPrompt(safeMode, safeLang),
      messages: [{ role: 'user', content: question.trim() }],
    });

    const textBlock = message.content.find((b) => b.type === 'text');
    res.json({ answer: textBlock?.text ?? '' });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      console.error('Invalid Anthropic API key — check your .env file.');
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    } else if (error instanceof Anthropic.RateLimitError) {
      res.status(429).json({ error: 'The AI service is busy right now. Please try again in a moment.' });
    } else if (error instanceof Anthropic.APIError) {
      console.error(`Anthropic API error ${error.status}:`, error.message);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  }
});

const PORT = process.env.API_PORT ?? 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
