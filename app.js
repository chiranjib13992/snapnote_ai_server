import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.routes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/analyze", analyzeRoutes);

export default app;
