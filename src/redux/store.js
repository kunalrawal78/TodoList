import { configureStore } from '@reduxjs/toolkit';

const reduc = (state = 0, action) => {
  switch (action.type) {
    case 'Add':
      return state + 1;
    case 'Sub':
      return state - 1;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reduc
});


