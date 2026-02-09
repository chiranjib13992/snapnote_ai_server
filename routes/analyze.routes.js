import { Router } from "express";
import { analyzeImage } from "../controllers/analyze.controller.js";
import rateLimiter from "../middleware/rateLimit.js";
import upload from "../middleware/upload.js";
import { getWindowData } from "../controllers/staticData.controller.js";

const router = Router();

router.post("/image-prossing", rateLimiter, upload.single("image") , analyzeImage);
router.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});
router.get("/keyboard-shortcuts/:os", getWindowData);

export default router;
