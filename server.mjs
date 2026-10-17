import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/health", (_req, res) => res.json({ ok: true, aiConfigured: Boolean(process.env.OPENAI_API_KEY) }));

app.post("/api/chat", async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  const language = ["fa", "en", "ru", "tr"].includes(req.body?.language) ? req.body.language : "fa";
  if (!message) return res.status(400).json({ error: "Message is required" });
  if (message.length > 2000) return res.status(413).json({ error: "Message too long" });
  if (!process.env.OPENAI_API_KEY) return res.status(503).json({ error: "AI service is not configured. Add OPENAI_API_KEY to server environment variables." });

  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const languageNames = { fa: "Persian", en: "English", ru: "Russian", tr: "Turkish" };
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: `You are the real AI concierge for DJ V.N event and DJ services. Reply in ${languageNames[language]}. Be friendly, concise, and clear. You can explain DJ performance, sound and lighting, live percussion/music arrangements, weddings, birthdays and parties. For booking, ask for event date, city/location, event type, estimated guest count, and requested services. Never claim a booking is confirmed. Contact phones: 09217951943 and 09171531992. Location: Abadeh, Saadi Street, opposite Velayat Street. Instagram display text supplied by the owner is exactly "dj v.n1943"; do not rewrite it or invent a direct profile URL. If you do not know pricing or availability, say the team must confirm it. Do not claim to have checked a calendar or booked anything.` },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500
    });
    res.json({ reply: completion.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't form a reply." });
  } catch (err) {
    console.error("OpenAI request failed:", err?.message || err);
    res.status(502).json({ error: "AI request failed. Check the server logs and API account." });
  }
});
app.listen(port, () => console.log(`DJ V.N AI server listening on port ${port}`));
