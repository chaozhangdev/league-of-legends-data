// import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// // defaults to localStorage for web
// import storage from "redux-persist/lib/storage";

// import globalSlice from "./globalSlice";

// export default configureStore({
//   reducer: {
//     global: globalSlice,
//   },
// });

import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalSlice from "./globalSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  global: globalSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { persistor };
export default store;
