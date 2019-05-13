import React from "react";
import ReactDOM from "react-dom";
import { lolcode } from "lolcode.macro";
import lolstdlib from "lolcode.macro/lolstdlib";

import "./styles.css";

const fizzbuzz = lolcode`
HAI
  VISIBLE "hello world"
KTHXBYE
`;

console.log(fizzbuzz);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
