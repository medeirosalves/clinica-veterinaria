
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/clinica_vet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Animal = mongoose.model("Animal", {
    nome: String,
    especie: String,
    raca: String,
    tutor: String,
});

app.post("/api/animais", async (req, res) => {
    const animal = new Animal(req.body);
    await animal.save();
    res.send(animal);
});

app.get("/api/animais", async (req, res) => {
    const animais = await Animal.find();
    res.send(animais);
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
