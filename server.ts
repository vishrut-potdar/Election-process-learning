import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { GeminiService } from './src/services/geminiService.ts';

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security headers
  app.use(helmet({
    contentSecurityPolicy: false, // Disable CSP for development or configure strictly
    crossOriginEmbedderPolicy: false
  }));

  app.use(express.json());

  // AI API Route (Sensitive logic kept on server)
  app.post('/api/chat', async (req, res) => {
    try {
      const { contents, config } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error('GEMINI_API_KEY is missing');
        return res.status(500).json({ error: 'Server configuration error.' });
      }

      const gemini = new GeminiService(apiKey);
      
      const tools = [{ googleSearch: {} }];
      const responseText = await gemini.generateContent(contents, tools);

      res.json({ text: responseText });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: 'Failed to generate response from AI.' });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
