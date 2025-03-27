import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { postRouter } from "./routes/Posts.routes.js";

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`app running on port ${process.env.PORT}`);
});
