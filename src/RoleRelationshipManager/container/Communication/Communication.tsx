import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { Tab, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import styles from "../NgoListing/NgoListing.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const useStyles = makeStyles((theme: Theme) => ({
  tabhead: {},
  AppHead: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  SheduleButton: {
    padding: "7px 55px",
  },
  tabText: {
    color: "rgb(68, 68, 68)",
    fontSize: "18px",
    textTransform: "none",
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Communication() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
            <AppBar position="static" className={classes.AppHead}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                className={classes.tabhead}
              >
                <Tab
                  className={classes.tabText}
                  label="Send SMS"
                  {...a11yProps(0)}
                />
                <Tab
                  className={classes.tabText}
                  label="Send Email"
                  {...a11yProps(1)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <div className={styles.ModuleBody}>
                <div>
                  <label className={styles.label}>Select users*</label>
                  <div>
                    <textarea className={styles.textArea}></textarea>
                  </div>
                </div>
                <div className={styles.displayFlex}>
                  <label className={styles.label2}>SELECT BY GROUP :</label>
                  <div className={styles.groupFlex}>
                    <div>
                      <input type="checkbox" />
                      <span>All NGO admins</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>All NGO users</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>All donors</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className={styles.label}>
                    SMS Message* (SMS default character limit is 160 characters)
                  </label>
                  <div>
                    <textarea className={styles.textArea}></textarea>
                  </div>
                </div>
                <div className={styles.spaceBottom}>
                  <input type="checkbox" />
                  <span className="blue">
                    Schedule this SMS for a particular date and time
                  </span>
                </div>
                <div>
                  <label className={styles.label}>Select date and time</label>
                  <div>
                    <input className={styles.date} type="date" />
                  </div>
                </div>
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.SheduleButton}
                  >
                    Schedule SMS
                  </Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className={styles.ModuleBody}>
                <div>
                  <label className={styles.label}>Select users*</label>
                  <div>
                    <textarea className={styles.textArea}></textarea>
                  </div>
                </div>
                <div className={styles.displayFlex}>
                  <label className={styles.label2}>SELECT BY GROUP :</label>
                  <div className={styles.groupFlex}>
                    <div>
                      <input type="checkbox" />
                      <span>All NGO admins</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>All NGO users</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>All donors</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className={styles.label}>Email subject*</label>
                  <div>
                    <input className={styles.input} type="date" />
                  </div>
                </div>
                <div>
                  <label className={styles.label}>Email content*</label>
                  <div>
                    <textarea className={styles.textArea}></textarea>
                  </div>
                </div>
                <div className={styles.spaceBottom}>
                  <input type="checkbox" />
                  <span className="blue">
                    Schedule this Email for a particular date and time
                  </span>
                </div>
                {/* <div>
            <label className={styles.label}>Select date and time</label>
            <div>
              <input className={styles.date} type="date" />
            </div>
          </div> */}
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.SheduleButton}
                  >
                    Send email
                  </Button>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communication;
