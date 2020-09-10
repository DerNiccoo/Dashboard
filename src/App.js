import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

import routes from "./routes.js";

import bgImage from "./assets/img/sidebar-4.jpg";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

function App() {
  const [image, setImage] = React.useState(bgImage);

  return (
    <div className="wrapper">
      <Sidebar routes={routes} image={image} />
      <div className="mainPanel">
        <div className="content">
          <div className="container">{switchRoutes}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
