/* eslint-disable react/prop-types */
import styles from "./Header.module.css";

export default function Header({ onAddTask, newTask, setNewTask, error }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(newTask); // Passa o título para a função addTask
    setNewTask(""); // Limpa o campo de entrada após a submissão
  }

  function onChangeTitle(event) {
    setNewTask(event.target.value); // Atualiza o estado com o valor do input
  }

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <button type="submit">+</button>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newTask} // Certifique-se de que este valor está sendo atualizado
          onChange={onChangeTitle}
        />
      </form>
      {error && <p className={styles.error}>{error}</p>}{" "}
      {/* Exibe a mensagem de erro */}
    </header>
  );
}
