import React from "react";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Typography } from "@material-ui/core/";
import Box from "@material-ui/core/Box";

import Header from "../../components/Header/Header";
import styles from "../NgoListing/NgoListing.module.scss";
import useStyles from "../NgoListing/NgoListing.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

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

function NgoSingleBeneficiary() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
              <i className="fas fa-home"></i> / NGO / Nav Bharat Jagriti Kendra
              / Gift education to an underprivileged child / Tinkal Kumari
            </p>
            <br />
          </div>
          <div>
            <div className={styles.ngoBanner}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/7546_TinkalKumari-da487b7784f4abcb3f9b5180de71f76c-907464.jpg"
                    alt=""
                    className={styles.beneficiarySingleImg}
                  />
                </Grid>
                <Grid container xs={12} sm={9}>
                  <Grid item xs={12} sm={12}>
                    <h6 className={styles.BannerLableSm}>
                      last updated on 12 April 2020, 3:35 pm
                    </h6>
                    <h2 className={styles.sectionHead}>Tinkal Kumari</h2>
                    <br />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <h6 className={styles.BannerLableSm}>DATE OF BIRTH</h6>
                    <p className={styles.BannerDetail}>12 November 2005</p>
                    <h6 className={styles.BannerLableSm}>
                      FATHER / MOTHER / GUARDIAN NAME
                    </h6>
                    <p className={styles.BannerDetail}>Raghu Verma</p>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <h6 className={styles.BannerLableSm}>CATEGORY</h6>
                    <p className={styles.BannerDetail}>SC (Scheduled Cast)</p>
                    <h6 className={styles.BannerLableSm}>
                      FATHER / MOTHER / GUARDIAN PROFESSION
                    </h6>
                    <p className={styles.BannerDetail}>Farming</p>
                  </Grid>
                  <Grid item xs={12}>
                    <h6 className={styles.BannerLableSm}>DESCRIPTION</h6>
                    <p className={styles.BannerDetail}>
                      Tinkal Kumari is 14 yrs age, currently studying in Grade
                      IX at Chandrakala Devi Daga School. It’s a secondary
                      school part Government for girls and part private for
                      boys. Since it’s a government school, no fees is paid by
                      Meera's family. Her father is no more and her mother is
                      the only...
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <hr className={styles.Hr} />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}></Grid>
                <Grid item xs={12} sm={3}>
                  <br />
                  <Button
                    color="secondary"
                    variant="contained"
                    fullWidth
                    onClick={handleClickOpen}
                  >
                    <i className="fas fa-check BtnIcon"></i>
                    Approve add request
                  </Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <br />
                  <Button
                    className={classes.WhiteSm}
                    variant="contained"
                    fullWidth
                  >
                    <i className="fas fa-times BtnIcon"></i>
                    Reject request
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className={styles.DialogStyles}>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.LgDialogHeight}
              >
                <DialogContent className={classes.LgDialohPadding}>
                  <div className={styles.binaryDialogue}>
                    <span onClick={handleClose} className={styles.DialogClose}>
                      x
                    </span>
                    <i className="fas fa-times-circle approve"></i>
                    <h3>Approve add request?</h3>
                    <p>
                      Are you sure you really want to add{" "}
                      <span className={styles.green}>"Tinkal Kumari"</span> into
                      the current program selection under Nav Bharat Jagriti
                      Kendra?
                    </p>
                    <br />
                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          onClick={handleClickOpen}
                          fullWidth
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button color="secondary" variant="contained" fullWidth>
                          Confirm request
                        </Button>
                      </Grid>
                    </Grid>
                    <br />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoSingleBeneficiary;
