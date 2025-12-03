import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';

let client: GoogleGenAI | null = null;

if (apiKey) {
  client = new GoogleGenAI({ apiKey });
}

export const createChatSession = (): Chat | null => {
  if (!client) return null;

  // Create a context string about the products to help the AI
  const productContext = PRODUCTS.map(p => 
    `${p.name} ($${p.price}): ${p.description}`
  ).join('\n');

  const systemInstruction = `
    You are 'Vortex AI', a helpful and enthusiastic sales assistant for the Vortex Gaming Store.
    You help customers choose gaming gadgets.
    
    Here is our current product catalog:
    ${productContext}

    Rules:
    1. Be concise and friendly.
    2. Only recommend products from the catalog.
    3. Use gaming terminology (e.g., "level up", "OP", "smooth fps").
    4. If asked about prices, be accurate based on the catalog.
  `;

  return client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Sorry, I encountered a glitch in the matrix.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection error. Please try again later.";
  }
};
