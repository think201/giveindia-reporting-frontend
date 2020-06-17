import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";

import useStyles from "./Sidebar.style";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={styles.AdminSidebar}>
      <List>
        <ListItem className={classes.sidebar}>
          <div className={styles.NavLink}>
            <NavLink to="/superadmin/dashboard">
              <HomeIcon className={classes.SidebarIcon} />
              Dashboard
            </NavLink>
          </div>
        </ListItem>
        <ListItem className={classes.sidebar}>
          <div className={styles.NavLink}>
            <NavLink to="/superadmin/relationship-managers">
              <SupervisorAccountIcon className={classes.SidebarIcon} />
              Relationship Manager
            </NavLink>
          </div>
        </ListItem>
        <ListItem className={classes.sidebar}>
          <div className={styles.NavLink}>
            <NavLink to="/superadmin/ngo-listing">
              <AccountBalanceIcon className={classes.SidebarIcon} />
              NGO's
            </NavLink>
          </div>
        </ListItem>
        <ListItem className={classes.sidebar}>
          <div className={styles.NavLink}>
            <NavLink to="/superadmin/communication">
              <MailIcon className={classes.SidebarIcon} />
              Communication
            </NavLink>
          </div>
        </ListItem>
        <ListItem className={classes.sidebar}>
          <div className={styles.NavLink}>
            <NavLink to="/superadmin/notification">
              <NotificationsIcon className={classes.SidebarIcon} />
              Notification
            </NavLink>
          </div>
        </ListItem>
        <ListItem className={classes.sidebar}>
          <div className={styles.NavLink}>
            {/* <NavLink to="/profile"> */}
            <PersonIcon className={classes.SidebarIcon} />
            Profile
            {/* </NavLink> */}
          </div>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
