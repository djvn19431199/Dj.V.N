DJ V.N — PRO WEBSITE + REAL AI CHAT ASSISTANT (4 LANGUAGES)
===========================================================

Included:
- Premium responsive DJ landing page with your supplied hero image.
- Animated neon/gold styling, responsive navigation, services, about, contact, sound visualizer.
- Language switcher: Persian, English, Russian, Turkish.
- Restored floating AI assistant chat widget.
- Real AI backend using OpenAI API, plus a multilingual built-in FAQ fallback that still answers common questions if hosted on GitHub Pages without a server. The API key is server-side only and is NOT embedded in browser code.
- Instagram text is exactly: djv.n1943 (unchanged, including the space).

IMPORTANT: GitHub Pages only hosts static files; it cannot run the server or safely keep an AI API key. For a genuinely working AI assistant, deploy this whole project to a Node.js host (for example Render) and add OPENAI_API_KEY as a private environment variable in that host's dashboard. Never put your secret API key in index.html, script.js, or a public GitHub repository.

DEPLOY REAL AI (simple path):
1. Create a private or public GitHub repository and upload the files from this ZIP.
2. On Render, create a new Web Service from that repository.
3. Runtime: Node. Build command: npm install. Start command: npm start.
4. In Render Environment, add:
   OPENAI_API_KEY = your API key (secret)
   OPENAI_MODEL = gpt-4o-mini (optional)
5. Deploy. Test the service URL + /health. It should return {"ok":true,"aiConfigured":true}.
6. Open the deployed website URL. The chat sends messages to /api/chat on the same server. If the AI server is unavailable (for example on GitHub Pages), the assistant falls back to built-in multilingual answers for services, booking, pricing, contact, location and Instagram.

IMAGE:
Keep your exact hero image at assets/dj-vn-hero.png. Do not rename the file.
The page uses a relative image path, which works when the project is deployed at the domain root.

INSTAGRAM:
The visible text stays exactly "djv.n1943". Instagram usernames cannot contain spaces, so a direct profile link cannot be safely inferred from this display text. Instagram profile link is https://www.instagram.com/djv.n1943/.

CONTACT DETAILS included:
09217951943
09171531992
Abadeh, Saadi Street, opposite Velayat Street

SECURITY:
- Do not commit your .env file.
- Do not paste your API key into public files.
- API usage may incur charges; set usage limits on your API account.


GITHUB PAGES IMAGE FIX (IMPORTANT):
Upload the CONTENTS of this ZIP to the ROOT of your GitHub repository, not the ZIP itself. Keep index.html, style.css, script.js, dj-vn-hero.png and the assets folder together. The hero image is included at both assets/dj-vn-hero.png and dj-vn-hero.png, and the HTML has a fallback path. In Settings > Pages, deploy from branch main and folder /(root).
Instagram link: https://www.instagram.com/djv.n1943/
