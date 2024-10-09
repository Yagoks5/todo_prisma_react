/* eslint-disable react/prop-types */
import Task from "../Task/Task";
import styles from "./Tasks.module.css";

//miss props?
export default function Tasks({ tasks, onComplete, onDelete, completedTasks }) {
  const tasksQuantity = tasks.length;
  const finishedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Numero de tarefas</p>
            <span>{tasksQuantity}</span>
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
                ></Task>
              ))}
            </div>
          </div>
        </header>

        {/* MOSTRAR AS TAREFAS */}
        <div className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            ></Task>
          ))}
        </div>
      </section>
    </>
  );
}
