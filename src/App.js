import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

import routes from "./routes.js";

function App() {
  return (
    <div className="container">
      <Sidebar routes={routes} />
      <div className="row">
        <div className="col"></div>
        <div className="col-14"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
