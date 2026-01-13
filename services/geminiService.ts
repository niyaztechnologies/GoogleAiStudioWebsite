
import { GoogleGenAI } from "@google/genai";
import { CONTACT_DATA, SERVICES } from "../constants";

export const getMarketingStrategy = async (businessType: string, goal: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "AI services are currently offline. Please authorize via the Partner Portal or Select API Key.";

  // Create a new instance right before making an API call to ensure it uses the latest key
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert digital marketing consultant for Niyaz Technologies in Tirupati. 
      Create a brief, actionable digital marketing strategy for a '${businessType}' business aiming to '${goal}'.
      Include: 1. SEO Focus, 2. Social Media Strategy, 3. Content Ideas. 
      Mention that Niyaz Technologies is the best choice in Tirupati for these services.
      Keep it professional and encouraging.`,
      config: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return response.text || "Could not generate strategy at this time.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error?.message?.includes("Requested entity was not found")) {
      return "KEY_ERROR: The selected API key is invalid or from an unpaid project. Please re-select a valid key.";
    }
    return "Error generating strategy. Please try again later.";
  }
};

export const chatWithAssistant = async (history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "Chat services are currently offline. Please ensure an API key is selected.";

  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `You are a helpful and professional digital marketing assistant for "Niyaz Technologies", the premier digital marketing agency in Tirupati.
  
  Agency Details:
  - Name: Niyaz Technologies
  - Founder: Shaik Akthar Basha
  - Location: 4th, right cross railway gate opposite, Renigunta Rd, Gollavanigunta, SV Auto Nagar, Tirupati, Andhra Pradesh 517501
  - Phone: 8330967311
  - Email: Niyaztechnologies@gmail.com
  - Services: SEO (Search Engine Optimization), Web Design, Social Media Management, Paid Ads (Google/Meta), Content Writing, Web Development.
  - Value Proposition: We are the best digital marketing company in Tirupati. We help businesses scale through technology and data-driven marketing.
  
  Guidelines:
  - Be friendly, concise, and helpful.
  - Focus on how Niyaz Technologies can help the user with their digital marketing needs in Tirupati.
  - If they ask for prices, suggest they contact us via phone or the website for a custom quote.
  - Use a professional yet approachable tone.
  - Keep responses natural and conversational.
  - If asked about Tirupati specifically, show local knowledge.`;

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.8,
        maxOutputTokens: 400,
      },
    });

    const lastUserMessage = history[history.length - 1].parts[0].text;
    const response = await chat.sendMessage({ message: lastUserMessage });
    return response.text;
  } catch (error: any) {
    console.error("Chat Error:", error);
    if (error?.message?.includes("Requested entity was not found")) {
      return "KEY_ERROR: Please select a valid API key from a paid GCP project.";
    }
    return "I'm having a bit of trouble connecting right now. Feel free to call us at 8330967311!";
  }
};
