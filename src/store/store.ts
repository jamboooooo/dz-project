import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AvatarReducer } from "./reducers/AvatarList/AvatarListSlice";

const rootReducer = combineReducers({
  AvatarReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
