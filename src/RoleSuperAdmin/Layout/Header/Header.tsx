import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "../../../assets/images/gi-logo.svg";
function Header() {
  return (
    <header className={styles.AdminHeader}>
      <div className={styles.logo}>
        <Link to="/superadmin/dashboard">
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className={styles.HeaderNav}>
        <ul>
          <li className={styles.Breadcrumbs}>/ Communication / Send SMS</li>
          <li>
            <Link to="/superadmin/notification">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </Link>
          </li>
          <li className={styles.Name}>Rahul</li>
          <li>
            <img
              src="https://uc.uxpin.com/files/91911/99228/gift_education_to_an_underprivileged_child-4ae9a8b7d237a80ae931d1afc4608c3b-653df1.jpg"
              alt=""
              className={styles.profileImg}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
