import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import axios from "axios";
import useStyles from "./Notification.styles";
import styles from "./Notification.module.scss";
import Layout from "../Layout/Layout";

const Notification = () => {
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
  const classes = useStyles();

  return (
    <div className="LayoutParent">
      <Layout />
      <h2>Notification</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        porttitor sem.
      </p>
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
  );
};

export default Notification;
