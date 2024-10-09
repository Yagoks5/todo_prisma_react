import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// MOSTRAR AS TAREFAS
export const showAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany(); // Busca todas as tarefas
    res.json(tasks); // Retorna as tarefas encontradas
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as tarefas" }); // Retorna um erro em caso de falha
  }
};

// CRIAR TAREFAS
export const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "O campo título é necessário" });
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
    return res.status(500).json({ error: "Erro ao criar a tarefa" });
  }
};

// ATUALIZAR TAREFA ? (nem vou usar acho)
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) }, // Busca a tarefa pelo ID
      data: { completed }, // Atualiza o campo completed
    });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar a tarefa" });
  }
};

//DELETAR TAREFA
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: Number(id) }, // Converte o ID para número
    });
    return res.json({ message: "Tarefa deletada" }); // Retorna uma resposta de sucesso
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar a tarefa" });
  }
};
