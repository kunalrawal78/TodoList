import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo"; // Import the reducer

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Use the reducer
    // Add other reducers if needed
  },
});

export default store;