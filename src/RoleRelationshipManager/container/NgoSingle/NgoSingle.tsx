import React from "react";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import styles from "../NgoListing/NgoListing.module.scss";
import useStyles from "../NgoListing/NgoListing.styles";

function NgoSingle() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <div className={styles.Body}>
        <div className={styles.BodyCard}>
          <div className={styles.BodyTitle}>
            <p className={styles.breadCrumb}>
              <i className="fas fa-home"></i> / NGO / Nav Bharat Jagriti Kendra
            </p>
            <br />
            <br />
          </div>
          <div>
            <div className={styles.ngoBanner}>
              <img
                src="https://uc.uxpin.com/files/91911/99228/nav_bharat_jagriti_kendra_desktop-50ed718d88c8d4a4864c5503e996cc07-531903.jpg"
                alt=""
                className={styles.bannerImage}
              />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={1}>
                  <img
                    src="https://uc.uxpin.com/files/91911/99228/nav_bharat_jagriti_kendra_logo-c09c6b072671b59edcde327bb6ad7760-d6741d.png"
                    alt=""
                    className={styles.ngoIcon}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <h3 className={styles.BannerName}>
                    Nav Bharat Jagriti Kendra
                  </h3>
                  <ul className={styles.BannerListInline}>
                    <li>
                      <img
                        src="https://uc.uxpin.com/files/91911/99228/give_assured_badge20-0f3265723bd3a2c8ec0dfce86b9dc901-c369dd.png"
                        alt=""
                      />
                    </li>
                    <li>
                      <i className="fas fa-book"></i>Education
                    </li>
                    <li>
                      <i className="fas fa-map-marker"></i>Tamil Nadu
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={styles.TextRight}>
                    <div>
                      <a
                        className={styles.bannerLinks}
                        href="mailto: prabhu.loganathan@ishavidhya.org"
                      >
                        prabhu.loganathan@ishavidhya.org
                      </a>
                    </div>
                    <a className={styles.bannerLinks} href="tel: +9489045045">
                      +9489045045
                    </a>
                  </div>
                </Grid>
                <Grid xs={12} sm={1}></Grid>
                <Grid xs={12} sm={2}>
                  <h6 className={styles.BannerLableSm}>RELATIONSHIP MANAGER</h6>
                  <p className={styles.BannerDetail}>Jaspreet Singh</p>
                  <h6 className={styles.BannerLableSm}>NGO ADMIN</h6>
                  <p className={styles.BannerDetail}>Pawan Singh</p>
                </Grid>
                <Grid xs={12} sm={2}>
                  <h6 className={styles.BannerLableSm}>CONTACT DETAILS</h6>
                  <p className={styles.BannerDetail}>
                    14, C.A. Thevar Layout, Kannapiran Mills Road,
                    Udayampalayam, Coimbatore 641028 Tamilnadu
                  </p>
                </Grid>
                <Grid xs={12} sm={2}></Grid>
                <Grid xs={12} sm={5}>
                  <div>
                    <h6 className={styles.BannerLableSm}>DESCRIPTION</h6>
                    <p className={styles.BannerDetail}>
                      Nav Bharat Jagriti Kendra was created a
                      progressive,peaceful, indiscreet virtues to build a
                      society based on the values of equality, fraternity, and
                      mutual help.They wanted to pull up the root causes of
                      poverty.
                    </p>
                    <p className={styles.BannerDetail}>
                      <span onClick={handleClickOpen}>Read more</span>
                    </p>
                  </div>
                </Grid>
                <Grid xs={12}>
                  <hr className={styles.Hr} />
                  <div className={styles.bannerSubhead}>
                    <h4>NGO programs (12)</h4>
                    <p>Showing all programs currently running in the NGO</p>
                  </div>
                  <hr className={styles.Hr} />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid xs={12} sm={4}>
                  <Link to="/relationship-manager/ngo-program">
                    <div className={styles.NgoCard}>
                      <img
                        src="https://uc.uxpin.com/files/91911/99228/gift_education_to_an_underprivileged_child-4ae9a8b7d237a80ae931d1afc4608c3b-818b76.jpg"
                        alt=""
                        className={styles.NgoCardImage}
                      />
                      <div className={styles.NgoCardBody}>
                        <div className={styles.NgoCardHead}>
                          <span>5 benefeciarie</span>
                          <span>West Bengal</span>
                        </div>
                        <div className={styles.NgoCardContent}>
                          <h4>Gift education to an underpriviledged child</h4>
                          <p>
                            Nav Bharat Jagriti Kendra (NBJK) is committed to
                            encouraging the education of girls by providing the
                            required support. NBJK field workers identify
                            girls...
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
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
                  <span onClick={handleClose} className={styles.DialogClose}>
                    x
                  </span>
                  <h3 className={styles.dialogTitle}>
                    Add relationship manager
                  </h3>
                  <br />
                  <br />
                  <p className={styles.dialogContent}>
                    Nav Bharat Jagriti Kendra was created a
                    progressive,peaceful, indiscreet virtues to build a society
                    based on the values of equality, fraternity, and mutual
                    help.They wanted to pull up the root causes of poverty.Their
                    main target is the poor towns and villages in Bihar, where
                    indigent people are trapped in the hands of poverty.
                  </p>
                  <p className={styles.dialogContent}>
                    They are determined to help this kind of people and built up
                    a good career and make the people independently strong
                    enough to face economic and social challenges. They provide
                    free meals support, provide transportation like school
                    bus/cab cost, and covers up school fee charges to an average
                    of 32.More than 174 youth got the advantage from the
                    education provided by them.They also establish many camps
                    for the treatment of 108 patients who were suffered from
                    cataract.
                  </p>
                  <p className={styles.dialogContent}>
                    Nav Bharat Jagriti Kendra was created a
                    progressive,peaceful, indiscreet virtues to build a society
                    based on the values of equality, fraternity, and mutual
                    help.They wanted to pull up the root causes of poverty.Their
                    main target is the poor towns and villages in Bihar, where
                    indigent people are trapped in the hands of poverty.
                  </p>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoSingle;
