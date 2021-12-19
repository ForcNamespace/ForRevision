import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Revision from "./Controller/Revision";

export const RevisionContext = createContext<Revision>(new Revision());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RevisionContext.Provider value={new Revision()}>
        <App />
      </RevisionContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
