import { configureStore } from "@reduxjs/toolkit";
import clickActionReducer from "../stateSlice/clickActionSlice";
import userReducer from '../stateSlice/userSlice';
const store = configureStore({
  reducer: {
    clickAction: clickActionReducer,
    user: userReducer, 
  },
});

export default store;
