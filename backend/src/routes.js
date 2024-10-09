import express from "express";
import {
  showAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./TodoController";

const router = express.Router();

// Rotas para a API
router.get("/tasks", showAllTasks); // Mostrar todas as tarefas
router.post("/tasks", createTask); // Criar uma tarefa
router.put("/tasks/:id", updateTask); // Atualizar tarefa
router.delete("/task/:id", deleteTask); // Deletar tarefa

export { router };
