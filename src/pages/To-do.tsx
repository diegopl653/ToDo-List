import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  removeTask,
  completeTask,
  uncompleteTask,
  removeCompleteTask,
  editTask,
} from "../Slices/counterSlice";
import type { RootState } from "../app/store";
import TaskCard from "../components/TaskCard";
import "./styles/to-do.css";
import { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const values = useSelector((state: RootState) => state.counter.values);
  const complete = useSelector((state: RootState) => state.counter.complete);

  const handleTaskRemove = (id: number) => {
    const task = id.toString();
    dispatch(removeTask(task));
  };

  return (
    <div>
      <h1>ToDo-List</h1>
      <form
        className="addtask"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="submit"
          aria-label="increment-value"
          onClick={(e) => {
            e.preventDefault();
            inputValue !== ""
              ? dispatch(addTask(inputValue))
              : alert("No escribiste nada!");
          }}
        >
          Agregar Tarea al TO-DO
        </button>
      </form>
      <section className="listas">
        <ul className="lista">
          <h2>To-Do</h2>
          {values.map((value, index) => (
            <TaskCard
              key={index}
              value={value.task}
              id={index}
              onChange={(index) => {
                handleTaskRemove(index);
                dispatch(completeTask(value.task));
                console.log(value.task)
              }}
              checked={false}
              onClick={(index) => {
                handleTaskRemove(index);
              }}
              Edit={(index) => {
                console.log("Edit", index);
                dispatch(editTask(index));
              }}
            ></TaskCard>
          ))}
        </ul>
        <ul className="lista">
          <h2>Completed</h2>
          {complete.map((value, index) => (
            <TaskCard
              key={index}
              value={value.task}
              id={index}
              onChange={(index) => {
                dispatch(uncompleteTask(index));
                dispatch(removeCompleteTask(index.toString()))
              }}
              checked={true}
              onClick={(index) => {
                const taskComplete = index.toString();
                dispatch(removeCompleteTask(taskComplete));
              }}
              Edit={() => {}}
            ></TaskCard>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;
