import React from "react";

import Header from "../../components/Header/Header";

import styles from "../NgoListing/NgoListing.module.scss";
import useStyles from "../NgoListing/NgoListing.styles";

function ManagerDashboard() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={styles.Body}>
        <div className={styles.BodyCard}>
          <div className={styles.BodyTitle}>
            <p className={styles.breadCrumb}>
              <i className="fas fa-home"></i> / Dashboard
            </p>
            <h2 className={styles.TitleText}>Dashboard</h2>
            <p className={styles.SubTitleText}>
              All statistical based data will come here with a quick overview of
              things
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerDashboard;
