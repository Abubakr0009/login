// import { createStore } from "redux";
// import { counterReducer } from "./reduser";

// import { configureStore } from "@reduxjs/toolkit";
// import { postApi } from "./getPosts";
// import { counterReducer } from "./reduser";

// // export const store = createStore(counterReducer, );

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     [postApi.reducerPath]: postApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(postApi.middleware),
// });


import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./getPosts";
import { counterReducer } from "./reduser";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
