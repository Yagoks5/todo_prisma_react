const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log("Server rodando na porta 5000"));

// Rotas para a API (criar tarefa, atualizar tarefa (concluida/não concluida) e deletar a tarefa)

// Mostrar todas as tarefas
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany(); // Busca todas as tarefas
    res.json(tasks); // Retorna as tarefas encontradas
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as tarefas" }); // Retorna um erro em caso de falha
  }
});

// Criar uma tarefa
app.post("/tasks", async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "O campo titulo é necessário" });
  }
  try {
    const task = await prisma.task.create({
      data: {
        title: title, // Define o título da tarefa
        completed: false, // Define o campo completed como false por padrão
      },
    });
    res.status(201).json(task); // Retorna a tarefa criada
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
    return res.json({ error });
  }
});

// Atualizar || renomear tarefa
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    // Atualiza a tarefa no banco de dados
    const task = await prisma.task.update({
      where: { id: Number(id) }, // Busca a tarefa pelo ID
      data: { completed }, // Atualiza o campo completed
    });
    return res.json(task);
  } catch (error) {
    return res.json({ error });
  }
});

app.delete("/task/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: Number(id) }, // Converte o ID para número
    });
    return res.json({ message: "Tarefa deletada" }); // Retorna uma resposta de sucesso
  } catch (error) {
    return res.json({ error });
  }
});
