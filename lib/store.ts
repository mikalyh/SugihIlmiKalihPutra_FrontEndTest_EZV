import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./features/todos/todoApiSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
