import express from "express";
import { json } from "express";
const app = express();

import questionData from "../questions.json";

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
