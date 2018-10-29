import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

console.log(legacyLib.pageLoadTime);
legacyLib.authorize();

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
