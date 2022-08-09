import styles from "./ToDoDisplay.module.scss";

export const ToDoDisplay: React.FC<{ list: any; handleDelete: any }> = (
  props
) => {
  const Remove = (id: number) => {
    console.log("id: " + id);
    props.handleDelete(id);
  };

  return (
    <div className={styles.todo_list}>
      {props.list.map((index: any) => (
        <div className={styles.todo_item} key={index.id}>
          <h1>{index.value}</h1>
          <div className={styles.todo_delete_btn}>
            <button
              onClick={() => {
                Remove(index.id);
              }}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
