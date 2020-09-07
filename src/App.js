import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-14">
          <Dashboard />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
