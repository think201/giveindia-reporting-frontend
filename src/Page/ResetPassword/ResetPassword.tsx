import React from "react";
import logo from "../../assets/images/gi-logo.svg";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  InputLabel,
  Input,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./ResetPassword.styles";
import styles from "./ResetPassword.module.scss";
const ResetPassword = () => {
  const classes = useStyles();
  return (
    <section className={styles.FpSection}>
      <Container>
        <Card className={classes.root}>
          <div className={styles.CardHeader}>
            <img src={logo} className={styles.Logo} alt="logo" />
          </div>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h2"
            >
              Forgot password
            </Typography>
            <Typography paragraph className={classes.subText}>
              Enter your email here and we'll send you a link to reset your
              password.
            </Typography>
            <InputLabel htmlFor="email" className={classes.InputLabel}>
              Username
            </InputLabel>
            <Input id="email" fullWidth className={classes.Input} type="text" />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              className={classes.button}
            >
              Submit
            </Button>
            <Link to="/">
              <div className={styles.more}>
                <a href="#">Sign In</a>
              </div>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export default ResetPassword;
