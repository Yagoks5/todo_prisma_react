/* eslint-disable react/prop-types */
import styles from "./Task.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Task({ task, onComplete, onDelete, showDeleteButton }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.completed ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.completed ? styles.textCompleted : ""}>{task.title}</p>

      {showDeleteButton && ( // Mostrar o botão da lixeira apenas se showDeleteButton for true
        <button
          className={styles.deleteButton}
          onClick={() => onDelete(task.id)}
        >
          <TbTrash size={20} />
        </button>
      )}
    </div>
  );
}
