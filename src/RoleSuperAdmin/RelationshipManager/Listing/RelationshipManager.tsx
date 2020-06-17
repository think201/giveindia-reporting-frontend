import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

import styles from "../../NGO/Listing/NgoListing.module.scss";
import useStyles from "../../NGO/Listing/NgoListing.styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import Layout from "../../Layout/Layout";

function RelationshipManager() {
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
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={9}>
            <h2 className={styles.sectionHead}>Relationship manager</h2>
            <p className={styles.sectionSubHead}>
              Showing the list of all the relationship managers in GiveIndia
              platform
            </p>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={handleClickOpen}
            >
              Add a new member
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p className={styles.smallText}>
              Showing 10 of 29 members in the platform
            </p>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.ListHead}>Name</TableCell>
                <TableCell className={classes.ListHead}>Email</TableCell>
                <TableCell className={classes.ListHead}>Phone</TableCell>
                <TableCell className={classes.ListHead}>
                  No. of NGOs mapped
                </TableCell>
                <TableCell className={classes.ListHead}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableShadow}>
                <TableCell>
                  <Avatar
                    alt=""
                    src="https://uc.uxpin.com/files/91911/99228/user_photo_1-703d8b1241fcda9df5f74ec1f2e69f8b.jpg"
                    className={classes.logo}
                  />
                  <Typography
                    className={(classes.Listbody, classes.ListMain)}
                    paragraph={true}
                  >
                    Jaspreet Singh
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.Listbody} paragraph={true}>
                    jaspreetsingh@gmail.com
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.Listbody} paragraph={true}>
                    9695963442
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.Listbody} paragraph={true}>
                    3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={(classes.Listbody, classes.link)}
                    paragraph={true}
                  >
                    <Link to="/superadmin/relationship-manager/single">
                      See details
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
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
            <h3 className={styles.dialogTitle}>Add relationship manager</h3>
            <p className={styles.dialogSubtext}>
              Please provide all the necessary details
            </p>
            <div className={styles.editImg}>
              <img
                src="https://uc.uxpin.com/files/91911/99228/86-480c5806ce883cb9aecd2d5460e3cb69.jpg"
                alt=""
              />
            </div>
            <div className={styles.dialogFormLG}>
              <div className={styles.formGroup}>
                <label>Name*</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Email*</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Phone*</label>
                <input type="text" className={styles.input} />
              </div>
              <div>
                <Button color="primary" variant="contained" fullWidth>
                  Submit
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default RelationshipManager;
