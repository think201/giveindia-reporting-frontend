import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import axios from "axios";

import Header from "../../components/Header/Header";
import styles from "../NgoListing/NgoListing.module.scss";
import useStyles from "../NgoListing/NgoListing.styles";

function Notifications() {
  const classes = useStyles();

  let posts: any = {};
  let setPosts: any;
  [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.Body}>
        <div className={styles.BodyCard}>
          <div className={styles.BodyTitle}>
            <p className={styles.breadCrumb}>
              <i className="fas fa-home"></i> / Notifications
            </p>
            <h2 className={styles.TitleText}>Notifications</h2>
            <p className={styles.SubTitleText}>
              Showing all your notifications for the entire platform
            </p>
          </div>
          <br />
          <hr className={styles.Hr} />
          <br />
          <div>
            {posts.map((post: any) => (
              <Paper key={post.id} className={classes.NotificationCard}>
                <Grid container spacing={1}>
                  <Grid sm={8}>
                    <div className={styles.NotificationBody}>
                      <div className={styles.NotificationIcon}>
                        <PersonAddIcon />
                      </div>
                      <div className={styles.NotificationContent}>
                        <p>{post.title}</p>
                        <small>1 day ago</small>
                      </div>
                    </div>
                  </Grid>
                  <Grid sm={4}></Grid>
                </Grid>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
