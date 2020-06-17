import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/gi-logo.svg";
import { useHistory } from "react-router";
import ToastMessage from "../../components/ToastMessage/ToastMessage";

import {
  Card,
  CardContent,
  Button,
  Input,
  InputLabel,
  Typography,
  Grid,
} from "@material-ui/core";

import useStyles from "./Login.styles";
import axios from "axios";

const Login = () => {
  // State for Input fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State for Toast Message
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const classes = useStyles();
  let history = useHistory();

  const submitCredentials = async () => {
    if (username === "" || password === "") {
      setOpen(true);
      setMessage("Both fields need to be entered");
      return { displayToast };
    }
    const res = await axios.post(`http://139.59.58.38:1337/api/login`, {
      email: username,
      password: password,
    });
    console.log(res);
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      if (res.data.role === "relationship-manager") {
        history.push("/relationship-manager/dashboard");
      } else if (res.data.role === "admin") {
        history.push("/superadmin/dashboard");
      }
    }
  };

  const handleCloseEvent = () => {
    setOpen(false);
  };
  let displayToast: any;
  if (open) {
    displayToast = (
      <ToastMessage
        open={open}
        message={message}
        severity="error"
        seconds={4000}
        handleClose={handleCloseEvent}
      />
    );
  }

  const changeUsername = (event: any) => {
    setUsername(event.target.value);
  };

  const changePassword = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.bgImg}>
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
              <Input
                id="email"
                fullWidth
                className={classes.Input}
                type="text"
                onChange={changeUsername}
              />

              <InputLabel htmlFor="password" className={classes.InputLabel}>
                Password
              </InputLabel>
              <Input
                id="password"
                fullWidth
                className={classes.Input}
                type="password"
                onChange={changePassword}
              />
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  {/* <Link to="/dashboard"> */}
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={submitCredentials}
                    fullWidth
                  >
                    Submit
                  </Button>
                  {/* </Link> */}
                </Grid>
              </Grid>
              <Link to="/forgot-password">
                <p className={styles.ForgotPassword}>Forgot Password</p>
              </Link>
            </form>
          </CardContent>
          {/* </CardActionArea> */}
        </Card>
        {displayToast};
      </div>
    </div>
  );
};

export default Login;
