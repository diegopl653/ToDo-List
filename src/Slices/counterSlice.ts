import { createSlice } from "@reduxjs/toolkit";

export interface AddingState {
  values: string[];
}

const initialState: AddingState = {
  values: [],
};

export const addingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.values.push(action.payload);
    },
    removeTask: (state, action) => {
      const indexToRemove = state.values.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.values.splice(indexToRemove);
      }
    },
    getTasks: (state) => {
        const valuesArray = state.values; 
      return valuesArray;
    },
  },
});

export const { addTask, removeTask } = addingSlice.actions;

export default addingSlice.reducer;
