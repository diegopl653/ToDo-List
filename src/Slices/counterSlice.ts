import { createSlice, current } from "@reduxjs/toolkit";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}
export interface AddingState {
  values: Task[];
  complete: Task[];
}

const initialState: AddingState = {
  values: [],
  complete: [],
};

export const addingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: Task = {
        id: state.values.length + 1,
        task: action.payload,
        completed: false,
      };
      if (state.values.some((task) => task.task === newTask.task)) {
        alert("Ya añadiste esa Tarea, agrega otra");
      } else {
        state.values.push(newTask);
        console.log(current(state.values));
      }
    },

    removeTask: (state, action) => {
      const indexToRemove = action.payload;
      if (indexToRemove !== -1) {
        state.values.splice(indexToRemove, 1);
      }
    },

    removeCompleteTask: (state, action) => {
      const indexToRemove = action.payload;
      if (indexToRemove !== -1) {
        state.complete.splice(indexToRemove, 1);
      }
    },

    completeTask: (state, action) => {
      const task: Task = {
        id: state.complete.length + 1,
        task: action.payload,
        completed: true,
      };
      state.complete.push(task);
    },

    uncompleteTask: (state, action) => {
      const indexToRemove = action.payload;
      console.log("index", indexToRemove);
      if (indexToRemove !== -1) {
        state.values.push(state.complete[indexToRemove]);
      }
    },
    editTask: (state, action) => {
      const indexToEdit = action.payload;
      console.log("index", indexToEdit);
      if (indexToEdit !== -1) {
        state.values[indexToEdit].task = action.payload;
      }
    },
  },
});

export const { addTask, removeTask, completeTask, uncompleteTask, removeCompleteTask, editTask } =
  addingSlice.actions;

export default addingSlice.reducer;
