import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

console.log("owo");

const App = hot(() => <div>Hello World!</div>);

ReactDOM.render(<App />, document.querySelector("#app-mount"));
