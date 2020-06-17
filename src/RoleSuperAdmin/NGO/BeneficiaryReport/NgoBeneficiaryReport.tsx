import React from "react";

import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import styles from "../Listing/NgoListing.module.scss";
import useStyles from "../Listing/NgoListing.styles";
import Layout from "../../Layout/Layout";

function NgoBeneficiaryReport() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="LayoutParent">
      <Layout />
      <div className={styles.ngoBanner}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={2}>
            <img
              src="https://uc.uxpin.com/files/91911/99228/7546_TinkalKumari-da487b7784f4abcb3f9b5180de71f76c-907464.jpg"
              alt=""
              className={styles.beneficiaryReportImg}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <h6 className={styles.BannerLableSm}>
                  last updated on 12 April 2020, 3:35 pm
                </h6>
                <h2 className={styles.sectionHead}>Tinkal Kumari</h2>
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.TextRight}>
                  <Button
                    className={classes.WhiteSm}
                    variant="contained"
                    onClick={handleClickOpen}
                  >
                    <i className="fas fa-times BtnIcon"></i>
                    Delete report
                  </Button>
                  <Button
                    color="secondary"
                    className={classes.BlueSm}
                    variant="contained"
                  >
                    <i className="fas fa-pencil-alt BtnIcon"></i>
                    Edit details
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <h6 className={styles.BannerLableSm}>
                  DATE OF VERIFICATION VISIT
                </h6>
                <p className={styles.BannerDetail}>14 March 2020, 05:30pm</p>
                <br />
                <h6 className={styles.BannerLableSm}>LOCATION OF VISIT</h6>
                <p className={styles.BannerDetail}>Patna</p>
                <br />
              </Grid>
              <Grid item xs={12} sm={3}>
                <h6 className={styles.BannerLableSm}>REPORT SUBMITTED BY</h6>
                <p className={styles.BannerDetail}>Janhvi Singhal</p>
                <br />

                <h6 className={styles.BannerLableSm}>
                  DATE OF REQUEST RECEIVED
                </h6>
                <p className={styles.BannerDetail}>15 March 2020, 05:30pm</p>
                <br />
              </Grid>
              <Grid item xs={12} sm={3}>
                <h6 className={styles.BannerLableSm}>REPORTS APPROVED BY</h6>
                <p className={styles.BannerDetail}>Devesh Srivastava</p>
                <br />

                <h6 className={styles.BannerLableSm}>
                  VERIFICATION VISIT STATUS
                </h6>
                <p className={styles.BannerDetail}>
                  <span>Success</span>
                </p>
                <br />
              </Grid>
              <Grid item xs={12} sm={3}>
                <h6 className={styles.BannerLableSm}>REPORT APPROVED ON</h6>
                <p className={styles.BannerDetail}>21 March 2020, 02:50pm</p>
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr className={styles.Hr} />
        <div className={styles.beneficiaryReportContainer}>
          <div className={styles.beneficiaryReportHead}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <p className="fs14 w700 Dark">REPORT DETAILS</p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.TextRight}>
                  <p className="fs14 w400 Light">
                    last updated 19 March 2020, 05:30pm
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.beneficiaryReportBox}>
            <img
              src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4MDE5fQ"
              alt=""
            />
            <h4>Latest report updates</h4>
            <p>
              Meera Kumari is 14 yrs age, currently studying in Grade IX at
              Chandrakala Devi Daga School. It’s a secondary school part
              Government for girls and part private for boys. Since it’s a
              government school, no fees is paid by Meera's family. Her father
              is no more and her mother is the only source of income for their
              livelihood. She has got 2 sets of school uniforms in Jan 2016 and
              set of 12 text books in May 2016 free of cost
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
              magna, et faucibus arcu condimentum sed.
            </p>
            <p>
              Meera Kumari is 14 yrs age, currently studying in Grade IX at
              Chandrakala Devi Daga School. It’s a secondary school part
              Government for girls and part private for boys. Since it’s a
              government school, no fees is paid by Meera's family. Her father
              is no more and her mother is the only source of income for their
              livelihood. She has got 2 sets of school uniforms in Jan 2016 and
              set of 12 text books in May 2016 free of cost
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
              magna, et faucibus arcu condimentum sed.
            </p>
          </div>
        </div>
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
              <i className="fas fa-times-circle alert"></i>
              <h3>Delete Report?</h3>
              <p>
                Are you sure you really want to delete{" "}
                <span>"Tinkal Kumari"</span> from the current program
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
                  <Button color="primary" variant="contained" fullWidth>
                    Confirm Delete
                  </Button>
                </Grid>
              </Grid>
              <br />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default NgoBeneficiaryReport;
