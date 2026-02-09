import { analyzeWithGemini } from "../services/gemini.service.js";

export const analyzeImage = async (req, res) => {
  try {
    console.log('analysis started', 'loading')
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

     const allowedMimeTypes = {
      "image/jpeg": "image/jpeg",
      "image/jpg": "image/jpeg",
      "image/png": "image/png",
      "image/webp": "image/webp"
    };

    const mimeType = allowedMimeTypes[req.file.mimetype];

    if (!mimeType) {
      return res.status(400).json({
        error: `Unsupported image type: ${req.file.mimetype}`
      });
    }

    const base64Image = req.file.buffer.toString("base64");

    const result = await analyzeWithGemini(base64Image, mimeType);
    console.log(result, 'result from gemini')

    res.json({ result });

  } catch (error) {
    console.error("Analyze error:", error);
    res.status(500).json({ error: "Analysis failed" });
  }
};
