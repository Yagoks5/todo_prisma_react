const express = require("express");
const {
  showAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("./controller/TodoController"); // Tive problemas com ModuleJS, usei o CommonJs. Pesquisar porq

const router = express.Router();

// Rotas para a API
router.get("/tasks", showAllTasks); // Mostrar todas as tarefas
router.post("/tasks", createTask); // Criar uma tarefa
router.put("/tasks/:id", updateTask); // Atualizar tarefa
router.delete("/task/:id", deleteTask); // Deletar tarefa

module.exports = { router }; // Exporte o router
