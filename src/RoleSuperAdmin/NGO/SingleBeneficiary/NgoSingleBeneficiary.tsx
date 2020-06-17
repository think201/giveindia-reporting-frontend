import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Tabs from "@material-ui/core/Tabs";
import { Tab } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core/";
import Box from "@material-ui/core/Box";

import styles from "../Listing/NgoListing.module.scss";
import useStyles from "../Listing/NgoListing.styles";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

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

function SuperAdminNgoSingleBeneficiary() {
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
    <div className="LayoutParent">
      <Layout />
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
            <Grid item xs={12} sm={6}>
              <h6 className={styles.BannerLableSm}>
                last updated on 12 April 2020, 3:35 pm
              </h6>
              <h2 className={styles.sectionHead}>Tinkal Kumari</h2>
              <br />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={styles.TextRight}>
                <Button className={classes.WhiteSmBt} variant="contained">
                  <i className="fas fa-ban BtnIcon"></i>
                  Deactivate
                </Button>
                <Button className={classes.WhiteSm} variant="contained">
                  <i className="fas fa-times BtnIcon"></i>
                  Remove
                </Button>
                <Button className={classes.BlueSm} variant="contained">
                  <i className="fas fa-pencil-alt BtnIcon"></i>
                  Edit
                </Button>
              </div>
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
                Tinkal Kumari is 14 yrs age, currently studying in Grade IX at
                Chandrakala Devi Daga School. It’s a secondary school part
                Government for girls and part private for boys. Since it’s a
                government school, no fees is paid by Meera's family. Her father
                is no more and her mother is the only...
              </p>
              <p className={styles.BannerDetail} onClick={handleClickOpen}>
                <span>Read more</span>
              </p>
            </Grid>
          </Grid>
        </Grid>
        <hr className={styles.Hr} />
        <div className={styles.DivisionHead}>
          <h4>Reports</h4>
        </div>
        <div className="">
          <AppBar position="static" className={classes.AppHead}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              className="buttonTabs"
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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <p className={styles.smallText}>
                  Showing all the approved reports ready to be sent to the
                  donors
                </p>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
            <TableContainer
              className={classes.tableContainer}
              component={Paper}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.ListHead}>
                      Date of the report request received
                    </TableCell>
                    <TableCell className={classes.ListHead}>
                      Report submitted by
                    </TableCell>
                    <TableCell className={classes.ListHead}>
                      Reports approved by
                    </TableCell>
                    <TableCell className={classes.ListHead}>
                      Report approved on
                    </TableCell>
                    <TableCell className={classes.ListHead}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.tableShadow}>
                    <TableCell>
                      <Typography
                        className={`${classes.Listbody} ${classes.ListMain}`}
                        paragraph={true}
                      >
                        14 March 2020, 05:30pm
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.Listbody} paragraph={true}>
                        Janhvi Singhal
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.Listbody} paragraph={true}>
                        Devesh Srivastava
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.Listbody} paragraph={true}>
                        21 March 2020, 02:50pm
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        className={(classes.Listbody, classes.link)}
                        paragraph={true}
                      >
                        <Link to="/superadmin/beneficiary-report">
                          See details
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <p className={styles.smallText}>
                  Showing all the Pending reports
                </p>
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
            <TableContainer
              className={classes.tableContainer}
              component={Paper}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.ListHead}>
                      Date of the report request received
                    </TableCell>
                    <TableCell className={classes.ListHead}>
                      Report submitted by
                    </TableCell>
                    <TableCell className={classes.ListHead}>
                      Reports approved by
                    </TableCell>
                    <TableCell className={classes.ListHead}>
                      Report approved on
                    </TableCell>
                    <TableCell className={classes.ListHead}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.tableShadow}>
                    <TableCell>
                      <Typography
                        className={(classes.Listbody, classes.ListMain)}
                        paragraph={true}
                      >
                        14 March 2020, 05:30pm
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.Listbody} paragraph={true}>
                        Janhvi Singhal
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.Listbody} paragraph={true}>
                        Devesh Srivastava
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography className={classes.Listbody} paragraph={true}>
                        21 March 2020, 02:50pm
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        className={(classes.Listbody, classes.link)}
                        paragraph={true}
                      >
                        <Link to="/superadmin/beneficiary-report">
                          See details
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
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
            <span onClick={handleClose} className={styles.DialogClose}>
              x
            </span>
            <h3 className={styles.dialogTitle}>Tinkal Kumari</h3>
            <br />
            <br />
            <p className={styles.dialogContent}>
              Tinkal Kumari is 14 yrs age, currently studying in Grade IX at
              Chandrakala Devi Daga School. It’s a secondary school part
              Government for girls and part private for boys. Since it’s a
              government school, no fees is paid by Meera's family. Her father
              is no more and her mother is the only.
            </p>
            <p className={styles.dialogContent}>
              They are determined to help this kind of people and built up a
              good career and make the people independently strong enough to
              face economic and social challenges. They provide free meals
              support, provide transportation like school bus/cab cost, and
              covers up school fee charges to an average of 32.More than 174
              youth got the advantage from the education provided by them.They
              also establish many camps for the treatment of 108 patients who
              were suffered from cataract.
            </p>
            <p className={styles.dialogContent}>
              Nav Bharat Jagriti Kendra was created a progressive,peaceful,
              indiscreet virtues to build a society based on the values of
              equality, fraternity, and mutual help.They wanted to pull up the
              root causes of poverty.Their main target is the poor towns and
              villages in Bihar, where indigent people are trapped in the hands
              of poverty.
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
export default SuperAdminNgoSingleBeneficiary;
