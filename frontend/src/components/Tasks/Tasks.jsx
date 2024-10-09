/* eslint-disable react/prop-types */
import Task from "../Task/Task";
import styles from "./Tasks.module.css";

//miss props?
export default function Tasks({ tasks, onComplete, onDelete, completedTasks }) {
  const tasksQuantity = tasks.length;

  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <h3 className={styles.tituloTarefa}>Tarefas: {tasksQuantity}</h3>
          </div>
          <div>
            <p>Tarefas ativas</p>
            <div className={styles.list}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onComplete={onComplete}
                  onDelete={onDelete}
                  showDeleteButton={false}
                ></Task>
              ))}
            </div>
          </div>
          <div>
            <p>Tarefas concluidas</p>
            <div className={styles.list}>
              {completedTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onComplete={onComplete}
                  onDelete={onDelete}
                  showDeleteButton={true}
                ></Task>
              ))}
            </div>
          </div>
        </header>

        {/* MOSTRAR AS TAREFAS */}
      </section>
    </>
  );
}
