import React from "react";
import ReactDOM from "react-dom";
import { lolcode } from "lolcode.macro";
import lolstdlib from "lolcode.macro/dist/lolstdlib";

import "./styles.css";

const fizzbuzz = lolcode`
HAI
    I HAS A count ITS 1
    IM IN YR fizzbuzz UPPIN YR count TIL BOTH SAEM count AN 30
        I HAS A div ITS MOD OF count AN 3
        IT R BOTH SAEM 0 AN div
        O RLY?
            YA RLY
                VISIBLE "Fizz"
            MEBBE BOTH SAEM 0 AN MOD OF count AN 5
                VISIBLE "Buzz"
            NO WAI
                VISIBLE count
        OIC
    IM OUTTA YR fizzbuzz
KTHXBYE
`;

fizzbuzz();

function App() {
    return (
        <div
            className="App"
            style={{ textAlign: "left", width: "450px", margin: "0 auto" }}
        >
            <h1>🐱</h1>
            <h2>Open the console</h2>
            <p>
                This is FizzBuzz implemented in{" "}
                <a href="http://www.lolcode.org/">LOLCODE</a> written inside
                JavaScript.
            </p>
            <pre>{`
const fizzbuzz = lolcode\`
HAI
    I HAS A count ITS 1
    IM IN YR fizzbuzz UPPIN YR count TIL BOTH SAEM count AN 30
        I HAS A div ITS MOD OF count AN 3
        IT R BOTH SAEM 0 AN div
        O RLY?
            YA RLY
                VISIBLE "Fizz"
            MEBBE BOTH SAEM 0 AN MOD OF count AN 5
                VISIBLE "Buzz"
            NO WAI
                VISIBLE count
        OIC
    IM OUTTA YR fizzbuzz
KTHXBYE
\``}</pre>
            <p>
                A babel macro compiles it to a JavaScript function that you can
                execute anywhere. Open the console to see output 😛
            </p>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
