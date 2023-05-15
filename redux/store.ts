import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
