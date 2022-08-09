import React, { useState } from "react";
import { NoteInput } from "../ToDoInput/ToDoInput";
import { ToDoDisplay } from "../ToDoDisplay/ToDoDisplay";
import styles from "./ToDoList.module.scss";

const Notes = [
  {
    id: 1,
    value:
      "First note of the day! It provides an implicit definition of children (see below) - however there are some issues with the implicit children type (e.g. DefinitelyTyped#33006), and it might be considered a better style to be explicit about components that consume children, anyway.",
  },
  {
    id: 2,
    value: "Learning programming, so much fun",
  },
  {
    id: 3,
    value: "Happy Day :)",
  },
];

export const ToDoList: React.FC = () => {
  const [state, setState] = useState(Notes);

  const handleInput = (input: string) => {
    const newItem = { id: state.length + 1, value: input };
    setState((prev) => [...prev, newItem]);
  };

  const handleDelete = (index: number) => {
    setState(state.filter((item) => item.id !== index));
  };

  return (
    <div className={styles.Page}>
      <NoteInput state={state} handleInput={handleInput} />
      <ToDoDisplay list={state} handleDelete={handleDelete} />
    </div>
  );
};

//tags
//default -> this
// with tags -> separate intu columns?
