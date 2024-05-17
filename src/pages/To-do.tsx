import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../Slices/counterSlice";
import type { RootState } from "../app/store";
import TaskCard from "../components/TaskCard";
import "./styles/to-do.css";
import { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();
  const values = useSelector((state: RootState) => state.counter.values);

  const handleTaskRemove = (id: number) => {
    const task = id.toString();
    console.log(values)
    dispatch(removeTask(task));
    console.log(values)
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
        <input type="text" onChange={(e) => {setInputValue(e.target.value)}}/>
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
              value={value}
              id={index}
              onChange={(index) => {
                handleTaskRemove(index);
                console.log(index);
              }}
              checked={false}
            ></TaskCard>
          ))}
        </ul>
        <ul className="lista">
          <h2>Completed</h2>
        </ul>
      </section>
    </div>
  );
}

export default TodoList;