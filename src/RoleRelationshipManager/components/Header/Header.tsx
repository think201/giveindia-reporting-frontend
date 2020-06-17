import React from "react";
import { Grid, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import NotificationsIcon from "@material-ui/icons/Notifications";

import logo from "../../../assets/images/gi-logo.svg";

function Header() {
  return (
    <header className={styles.ManagerHeader}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Link to="/relationship-manager/dashboard">
            <img src={logo} alt="" className={styles.Logo} />
          </Link>
        </Grid>
        <Grid item xs={7}>
          <nav>
            <ul className={styles.NavLinks}>
              <li>
                <Link to="/relationship-manager/dashboard">
                  <i className="fas fa-home"></i>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/relationship-manager/ngo-listing">
                  <i className="fas fa-building"></i>
                  NGOs
                </Link>
              </li>
              <li>
                <Link to="/relationship-manager/communication">
                  <i className="fas fa-envelope"></i>
                  Communication
                </Link>
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.HeaderProfile}>
            <div
              className={`${styles.HeaderProfileDetail} ${styles.HeaderProfileIcon}`}
            >
              <Link to="/relationship-manager/notifications">
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon />
                </Badge>
              </Link>
            </div>
            <div className={styles.HeaderProfileDetail}>
              <span>Rahul Chetri</span>
              <img
                src="https://uc.uxpin.com/files/91911/99228/VUMBKh1U-b11b8ec29e990aa312b246eb04505a53-011f91.jpg"
                alt=""
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
