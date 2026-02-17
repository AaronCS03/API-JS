import express from "express";

const port = process.env.port || 3000;
const app = express();

app.get("/health", (req, res) => {
    const now = new Date().toLocaleString();
    return res.json({ up: true, date: now})
});

app.get("/", (req, res) => {
    return res.json({ message: "Hola Mundo" })
});

app.listen(port, () => {
    console.log("Listening on http://localhost:3000");
});