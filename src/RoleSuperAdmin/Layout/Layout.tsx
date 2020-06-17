import React from "react";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Layout.module.scss";
function Layout() {
  return (
    <div className={styles.LayoutContainer}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default Layout;
