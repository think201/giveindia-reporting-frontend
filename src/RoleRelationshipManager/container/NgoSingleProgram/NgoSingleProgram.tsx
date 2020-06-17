import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { Tab, Avatar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Header from "../../components/Header/Header";
import styles from "../NgoListing/NgoListing.module.scss";
import useStyles from "../NgoListing/NgoListing.styles";
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

function NgoSingleProgram() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const [openAddNew, setOpenAddNew] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenAddNew = () => {
    setOpenAddNew(true);
  };

  const handleCloseAddNew = () => {
    setOpenAddNew(false);
  };

  return (
    <div>
      <Header />
      <div className={styles.Body}>
        <div className={styles.BodyCard}>
          <div className={styles.BodyTitle}>
            <p className={styles.breadCrumb}>
              <i className="fas fa-home"></i> / NGO / Nav Bharat Jagriti Kendra
              / Gift education to an underprivileged child
            </p>
            <br />
            <div>
              <div className={styles.ngoBanner}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={7}>
                    <p className={`${styles.BannerDetail} ${styles.Margin0}`}>
                      <span>Nav Bharat Jagriti Kendra</span>
                    </p>
                    <h3 className={`${styles.BannerName} ${styles.Margin0}`}>
                      Gift education to an underprivileged child
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
                    <div>
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
                  <Grid item xs={12} sm={5}>
                    <img
                      src="https://uc.uxpin.com/files/91911/99228/gift_education_to_an_underprivileged_child-4ae9a8b7d237a80ae931d1afc4608c3b-653df1.jpg"
                      alt=""
                      className={styles.programBannerImage}
                    />
                  </Grid>
                </Grid>
              </div>

              {/* Tabs */}
              <div>
                <AppBar position="static" className={classes.AppHead}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                  >
                    <Tab
                      className={classes.tabText}
                      label="Beneficiary"
                      {...a11yProps(0)}
                    />
                    <Tab
                      className={classes.tabText}
                      label="About"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12} sm={6}>
                      <div className={styles.TextRight}>
                        <Button
                          color="primary"
                          variant="contained"
                          onClick={handleClickOpen}
                          className={classes.WhiteSm}
                        >
                          Bulk upload beneficiary
                        </Button>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.RedSm}
                          onClick={handleClickOpenAddNew}
                        >
                          Add new beneficiary
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                  <TableContainer
                    className={classes.tableContainer}
                    component={Paper}
                  >
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead className={classes.tableHead}>
                        <TableRow>
                          <TableCell className={classes.ListHead}>
                            Beneficiary details
                          </TableCell>
                          <TableCell className={classes.ListHead}>
                            Gender
                          </TableCell>
                          <TableCell className={classes.ListHead}>
                            Age
                          </TableCell>
                          <TableCell className={classes.ListHead}>
                            Adden on
                          </TableCell>
                          <TableCell className={classes.ListHead}>
                            Action
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow className={classes.tableShadow}>
                          <TableCell>
                            <Avatar
                              alt=""
                              src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                              className={classes.logo}
                            />
                            <Typography
                              className={(classes.Listbody, classes.ListMain)}
                              paragraph={true}
                            >
                              Sharmili Khatoon
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.Listbody}
                              paragraph={true}
                            >
                              Female
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.Listbody}
                              paragraph={true}
                            >
                              15
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.Listbody}
                              paragraph={true}
                            >
                              14 March 2020, 05:30pm
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Link to="/relationship-manager/ngo-beneficiary">
                              <Typography
                                className={(classes.Listbody, classes.link)}
                                paragraph={true}
                              >
                                See details
                              </Typography>
                            </Link>
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.tableShadow}>
                          <TableCell>
                            <Avatar
                              alt=""
                              src="https://uc.uxpin.com/files/91911/99228/7546_SharmiliKhatoon-64793d0e36a9e6a23d980727be3b5a1a.jpg"
                              className={classes.logo}
                            />
                            <Typography
                              className={(classes.Listbody, classes.ListMain)}
                              paragraph={true}
                            >
                              Sharmili Khatoon
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.Listbody}
                              paragraph={true}
                            >
                              Female
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.Listbody}
                              paragraph={true}
                            >
                              15
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={classes.Listbody}
                              paragraph={true}
                            >
                              14 March 2020, 05:30pm
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              className={(classes.Listbody, classes.link)}
                              paragraph={true}
                            >
                              See details
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <h4 className="Dark w700 fs15">
                    Every monthly donation can help educate more children like
                    Mithilesh
                  </h4>
                  <p className="fs14 w400 Dark">
                    Mithilesh lives in Gosala village near Chouparan, Jharkhand.
                    He had to discontinue his education after class V due to
                    abject poverty. At that tender age, he had begun to
                    accompany the elders of his family to work.
                  </p>
                  <p className="fs14 w400 Dark">
                    His childhood and innocence were almost dead and he had no
                    option but to resign to the sad truth of poverty, when Nav
                    Bharat Jagriti Kendra (NBJK) field workers found him. They
                    counseled his parents and offered to find a donor to support
                    his education in the NBJK Amoli Apurva High School in
                    Mangarh.
                  </p>
                </TabPanel>
              </div>
              {/* Add bulk dialog */}
              <div className={styles.DialogStyles}>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent className={classes.LgDialohPadding}>
                    <span onClick={handleClose} className={styles.DialogClose}>
                      x
                    </span>
                    <h3 className={styles.dialogTitle}>
                      Bulk upload beneficiaries
                    </h3>
                    <p className={styles.dialogSubtext}>
                      Please refer to the details below for a bulk upload of
                      entries
                    </p>
                    <div className={styles.dialogFormLG}>
                      <h4 className="w700 fs15">How to upload</h4>
                      <ol className="pl16">
                        <li className="fs15 w400">
                          Either directly upload a pre-filled csv file or
                          download a template.
                        </li>
                        <li className="fs15 w400">
                          Fill your data in the template file.
                        </li>
                        <li className="fs14 w400">
                          Upload it below for processing.
                        </li>
                      </ol>
                      <div className={styles.uploadTable}>
                        <div className={styles.uploadCell}>
                          <i className="fas fa-folder-plus"></i>
                          <h4>Upload filled in csv template here</h4>
                          <p>Drag and drop or click to select</p>
                        </div>
                      </div>
                      <div>
                        <Button
                          color="primary"
                          variant="contained"
                          className="px-5 "
                        >
                          Upload beneficiaries
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {/* add new beneficiary dialog */}
              <div className={styles.DialogStyles}>
                <Dialog
                  open={openAddNew}
                  onClose={handleCloseAddNew}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent className={classes.LgDialohPadding}>
                    <span
                      onClick={handleCloseAddNew}
                      className={styles.DialogClose}
                    >
                      x
                    </span>
                    <h3 className={styles.dialogTitle}>Add beneficiaries</h3>
                    <p className={styles.dialogSubtext}>
                      Please provide all the necessary details
                    </p>
                    <div className={styles.editImg}>
                      <img
                        src="https://uc.uxpin.com/files/91911/99228/7546_TinkalKumari-22c2306ed901599c4534f4531ec680a2.jpg"
                        alt=""
                      />
                    </div>
                    <div className={styles.dialogFormLG}>
                      <div className={styles.formGroup}>
                        <label>Name*</label>
                        <input type="text" className={styles.input} />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Gender</label>
                        <ul className={styles.dialogCheckboxlist}>
                          <li>
                            <input type="checkbox" name="" id="" />
                            Male
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            Female
                          </li>
                          <li>
                            <input type="checkbox" name="" id="" />
                            Others
                          </li>
                        </ul>
                      </div>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <div className={styles.formGroup}>
                            <label>Date of Birth</label>
                            <input type="date" className={styles.input} />
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <div className={styles.formGroup}>
                            <label>Category</label>
                            <select name="" id="" className={styles.input}>
                              <option value="SC">SC</option>
                              <option value="ST">ST</option>
                              <option value=""></option>
                            </select>
                          </div>
                        </Grid>
                      </Grid>
                      <div>
                        <h4 className="fs13 w700 Dark mt-0">PARENTS DETAILS</h4>
                      </div>
                      <div className={styles.formGroup}>
                        <label>Father / MOTHER / Guarfian name</label>
                        <input type="text" className={styles.input} />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Father / MOTHER / Guarfian profession</label>
                        <input type="text" className={styles.input} />
                      </div>
                      <div>
                        <Button color="primary" variant="contained" fullWidth>
                          Save
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgoSingleProgram;
