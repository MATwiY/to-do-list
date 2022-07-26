import React, { useState } from "react";
import styles from "./ToDoList.module.scss";

const Notes = [
  "First note of the day",
  "Learning programming, so much fun",
  "Happy Day :)",
];

export const ToDoList: React.FC = () => {
  const [state, setState] = useState<string[]>(Notes);
  const [item, setItem] = useState("");

  const handleInput = () => {
    let i = item;
    setState((prev) => [i, ...prev]);
    setItem("");
  };

  const handleDelete = (index: number) => {
    setState([
      ...state.slice(0, index),
      ...state.slice(index + 1, state.length),
    ]);
  };

  return (
    <div className={styles.Page}>
      <div className={styles.InputList}>
        <input
          className={styles.InputItem}
          placeholder="Type your note"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button
          className={styles.AddItemButton}
          onClick={() => {
            item.trim().length > 0 ? handleInput() : console.log("error");
          }}
        >
          Add
        </button>
      </div>
      <div className={styles.NotesList}>
        <ul>
          {state.map((note, index) => (
            <ol key={index}>
              <li>{note}</li>
              <button type="button" onClick={() => handleDelete(index)}>
                X
              </button>
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
};

//tags
//default -> this
// with tags -> separate intu columns?
