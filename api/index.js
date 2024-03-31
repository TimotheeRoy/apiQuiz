import express from "express";
import { json } from "express";
const app = express();
const cors = require("cors");

const corsOtions = {
    origin: ["https://quiz-app-topaz-theta.vercel.app"],
    optionsSuccessStatus: 200,
};

import questionData from "../questions.json";

app.use(cors(corsOtions));
app.use(json());

app.get("/quiz", (req, res) => {
    const themes = Object.keys(questionData);
    res.json(themes);
});

app.get("/quiz/:theme", (req, res) => {
    const { theme } = req.params;
    const questions = questionData[theme];
    res.json(questions);
});

export default app;
