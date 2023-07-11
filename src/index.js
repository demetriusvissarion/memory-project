import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import posts from "./reducers/posts";

// import reducers from './reducers';

import App from "./App";

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    posts, // posts: posts,
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

export default store;
