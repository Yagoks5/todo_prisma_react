const express = require("express");
const cors = require("cors");
const { router } = require("./routes"); // Importa as rotas

const app = express();

app.use(cors());
app.use(express.json());

app.use(router); // Usa as rotas do arquivo routes.js

app.listen(5000, () => console.log("Server rodando na porta 5000"));
