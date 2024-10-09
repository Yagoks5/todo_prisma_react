/* eslint-disable no-undef */
// Componentes
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(""); // Estado para a mensagem de erro

  // Mostrar todas as tarefas
  const showAllTasks = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log("Erro ao mostrar todas as tarefas", error);
      });
  };

  // Chama a função showAllTasks quando o componente é montado
  useEffect(() => {
    showAllTasks();
  }, []);

  //Adicionar uma nova tarefa.
  const addTask = () => {
    console.log("Valor de newTask:", newTask); // Verifica o valor que está sendo enviado
    if (!newTask.trim()) {
      setError("Por favor, digite uma tarefa");
      return; // Impedir o envio se o título estiver vazio
    }
    setError(""); // apagar a mensagem carro correto

    axios
      .post("http://localhost:5000/tasks", { title: newTask })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTask("");
      })
      .catch((error) => {
        console.log("ERRO AO ADICIONAR UMA TAREFA", error);
      });
  };

  // Alterar o status da tarefa (concluida ou não concluida) Deletar
  const toggleTask = (id, completed) => {
    axios
      .put(`http://localhost:5000/tasks/${id}`, { completed: !completed })
      .then((response) => {
        setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
      })
      .catch((error) => {
        console.log("ERRO AO ATUALIZAR A TAREFA", error);
      });
  };

  // Deletar uma tarefa
  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/task/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id)).catch((error) => {
        console.log("Não foi possivel deletar a tarefa", error);
      });
    });
  };

  // Filtrar tarefas ativas e completadas
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <Header
        onAddTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
        error={error}
      ></Header>
      <Tasks
        tasks={activeTasks}
        onDelete={deleteTask}
        onComplete={toggleTask}
        completedTasks={completedTasks}
      ></Tasks>
    </>
  );
}

export default App;
