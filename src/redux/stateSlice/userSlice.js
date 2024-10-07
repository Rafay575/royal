// src/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null, // Initial state of the user's id
  },
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    clearUserId: (state) => {
      state.id = null;
    },
  },
});

// Export actions
export const { setUserId, clearUserId } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
