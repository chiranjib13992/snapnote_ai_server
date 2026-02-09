
import dotenv from "dotenv";
dotenv.config({ path: "dev.env" });
console.log(process.env.GEMINI_API_KEY, 'api key gemi servi')


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeWithGemini(base64Image, mimeType) {
  const model = genAI.getGenerativeModel({
    model: "models/gemini-2.5-flash"
  });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType
            }
          },
          {
            text: "Extract all readable text from this image and summarize it in exactly 2 sentences."
          }
        ]
      }
    ]
  });

  return result.response.text();
}
