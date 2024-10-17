import { configureStore } from "@reduxjs/toolkit";
import UserDataSource from "./UserDataStore";
const store = configureStore({
  reducer: {
    userDataStore: UserDataSource,
  },
});

export { store };
