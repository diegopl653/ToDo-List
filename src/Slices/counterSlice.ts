import { createSlice } from "@reduxjs/toolkit";

export interface AddingState {
  values: string[];
  completed: string[];
}

const initialState: AddingState = {
  values: [],
  completed: [],
};

export const addingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = action.payload;
      if(state.values.includes(task)){
        alert("Ya añadiste esa Tarea, agrega otra")
      }else{
        state.values.push(task);
        const indice = state.values.indexOf(action.payload)
        console.log("indice", indice)
      }
    },
    removeTask: (state, action) => {
      const indexToRemove = action.payload;
      console.log("index",indexToRemove)
      if (indexToRemove !== -1) {
        state.values.splice(indexToRemove, 1)
      }
    },
    completeTask: () => {

    },
    uncompleteTask: () => {

    },

  },
});

export const { addTask, removeTask } = addingSlice.actions;

export default addingSlice.reducer;
