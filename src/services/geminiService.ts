import { GoogleGenAI } from '@google/genai';

/**
 * Service for interacting with Google Gemini API
 */
export class GeminiService {
  private ai: GoogleGenAI;

  constructor(apiKey: string) {
    this.ai = new GoogleGenAI({ apiKey });
  }

  async generateContent(contents: any, tools?: any[]) {
    const config = {
      temperature: 0.7,
      topP: 0.8,
      topK: 40,
    };

    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents,
      config: {
        ...config,
        tools: tools,
      }
    });

    return response.text;
  }
}
