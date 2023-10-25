import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetails\Slice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});