import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
  },
});
