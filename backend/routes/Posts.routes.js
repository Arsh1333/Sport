import express from "express";
import { getPosts } from "../controller/Posts.controller.js";

const postRouter = express.Router();

postRouter.get("/", getPosts);

export { postRouter };
