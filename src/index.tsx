import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "styles";
import "./styles/reset.css";
import { Provider } from "react-redux";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <Routing />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
