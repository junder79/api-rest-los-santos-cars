import express from "express";
import {generateNews} from "../controller/generateNews.js";

const router = express.Router();


router.post("/", generateNews);

export default router;