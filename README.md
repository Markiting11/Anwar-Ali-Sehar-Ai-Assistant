# Anwar Ali Sehar Portfolio & Voice AI

This project is a professional portfolio featuring a Gemini Live voice assistant.

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify.
2. The build settings should be automatically detected:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Go to **Site settings > Environment variables** and add:
   - `GEMINI_API_KEY`: Your Google Gemini API Key.

### Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel will detect the Vite project and configure the build settings.
3. Go to **Project Settings > Environment Variables** and add:
   - `GEMINI_API_KEY`: Your Google Gemini API Key.

## Local Development
1. Install dependencies: `npm install`
2. Create a `.env` file and add your `GEMINI_API_KEY`.
3. Run the dev server: `npm run dev`
