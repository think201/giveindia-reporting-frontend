import React from "react";
import styles from "./Login.module.scss";

import logo from "../../assets/images/gi-logo.svg";
import {
  Card,
  CardContent,
  Button,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";

import useStyles from "./Login.styles";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={styles.Container}>
      <Card className={classes.Card}>
        {/* <CardActionArea> */}
        <div className={styles.CardHeader}>
          <img src={logo} className={styles.Logo} alt="logo" />
        </div>
        <CardContent className={classes.CardBody}>
          <Typography variant="h1" className={classes.H1}>
            Sign in
          </Typography>
          <p className={styles.LightText}>
            Enter your username and password to access admin panel.
          </p>
          <form>
            <InputLabel htmlFor="email" className={classes.InputLabel}>
              Username
            </InputLabel>
            <Input id="email" fullWidth className={classes.Input} type="text" />

            <InputLabel htmlFor="password" className={classes.InputLabel}>
              Password
            </InputLabel>
            <Input
              id="password"
              fullWidth
              className={classes.Input}
              type="password"
            />
            <p className={styles.ForgotPassword}>Forgot Password</p>
            <Button color="primary" variant="contained">
              Submit
            </Button>
          </form>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </div>
  );
};

export default Login;
