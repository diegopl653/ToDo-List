import type { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../Slices/counterSlice";
import "./styles/to-do.css";
import TaskCard from "../components/TaskCard";

function TodoList() {
  const dispatch = useDispatch();
  const values = useSelector((state: RootState) => state.counter.values);

  const handleTaskRemove = (id: number) => {
    dispatch(removeTask(id));
    console.log(values)
  };
  return (
    <div>
      <form
        className="addtask"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" />
        <button
          type="submit"
          aria-label="increment-value"
          onClick={(e) => {
            e.preventDefault();
            const inputValue = e.target.previousSibling.value;
            dispatch(addTask(inputValue));
          }}
        >
          Agregar Tarea al TO-DO
        </button>
      </form>
      <ul className="lista">
        <h2>To-Do</h2>
        {values.map((value, index) => (
          <TaskCard
            value={value}
            id={index}
            onChange={(index) => {handleTaskRemove(index)
                console.log(index)
            }}
          ></TaskCard>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
