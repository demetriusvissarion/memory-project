import React from "react";
import ReactDOM from "react-dom";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);

export default store;
