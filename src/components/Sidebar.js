import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

export default function Sidebar(props) {
  const { routes } = props;

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open="true"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <List disablePadding dense>
            {routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} activeClassName="active" key={key}>
                  <ListItem button>
                    <prop.icon />
                    <ListItemText primary={prop.name} />
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
        </Drawer>
      </Hidden>
    </div>
  );
}
