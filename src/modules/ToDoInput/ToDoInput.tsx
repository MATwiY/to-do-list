import { useState } from "react";
import styles from "./ToDoInput.module.scss";

export const NoteInput: React.FC<{ state: any; handleInput: any }> = (
  props
) => {
  const [item, setItem] = useState("");

  const addTodo = (e: any) => {
    e.preventDefault();
    props.handleInput(item);
    setItem("");
  };

  return (
    <div className={styles.todo_form}>
      <input
        className={styles.todo_input}
        placeholder="Type your note"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className={styles.todo_submit_btn}
        onClick={(e) => {
          item.trim().length > 0 ? addTodo(e) : console.log("error");
        }}
      >
        Add
      </button>
    </div>
  );
};
