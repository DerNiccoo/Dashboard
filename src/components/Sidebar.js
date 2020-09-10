import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import styles from "../assets/jss/sidebarStyle.js";
const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  const { routes, image } = props;

  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  let links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        let listItemClasses;

        listItemClasses = classNames({
          [" " + classes["blue"]]: activeRoute(prop.path),
        });

        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path),
        });

        return (
          <NavLink
            to={prop.path}
            activeClassName="active"
            key={key}
            className={classes.item}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <prop.icon className={classes.itemIcon + whiteFontClasses} />
              <ListItemText
                primary={prop.name}
                className={classes.itemText + whiteFontClasses}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  return (
    <div>
      <Drawer
        variant="temporary"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div className={classes.sidebarWrapper}>{links}</div>
        <div
          className={classes.background}
          style={{ backgroundImage: "url(" + image + ")" }}
        />
      </Drawer>
    </div>
  );
}
