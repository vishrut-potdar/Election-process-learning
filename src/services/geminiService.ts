import { GoogleGenAI, GenerativeModel } from '@google/genai';

/**
 * Service for interacting with Google Gemini API
 */
export class GeminiService {
  private genAI: GoogleGenAI;
  private model: GenerativeModel;

  constructor(apiKey: string, config: { model: string, systemInstruction: string }) {
    this.genAI = new GoogleGenAI(apiKey);
    this.model = this.genAI.getGenerativeModel({
      model: config.model,
      systemInstruction: config.systemInstruction,
    });
  }

  async generateContent(contents: any[]) {
    const generationConfig = {
      temperature: 0.7,
      topP: 0.8,
      topK: 40,
      maxOutputTokens: 2048,
    };

    const result = await this.model.generateContent({
      contents,
      generationConfig,
    });

    const response = await result.response;
    return response.text();
  }
}
