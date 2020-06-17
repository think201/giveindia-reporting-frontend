import React from "react";
import { Typography, Avatar, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "../../NGO/Listing//NgoListing.module.scss";
import useStyles from "../../NGO/Listing/NgoListing.styles";
import Layout from "../../Layout/Layout";

function RelationshipManagerSingle() {
  const classes = useStyles();

  return (
    <div className="LayoutParent">
      <Layout />
      <div className={styles.CommonSpace}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <img
              src="https://uc.uxpin.com/files/91911/99228/user_photo_1-703d8b1241fcda9df5f74ec1f2e69f8b.jpg"
              alt=""
              className={styles.bannerImg}
            />
          </Grid>
          <Grid item xs={12} sm={3} className={classes.FlexColumn}>
            <h6 className={styles.BannerLable}>
              added on 12 April 2020, 3:35 pm
            </h6>
            <h3 className={styles.BannerName}>Jaspreet Singh</h3>
            <h6 className={styles.BannerLable}>PHONE</h6>
            <h3 className={styles.BannerDetail}>9695963442</h3>
            <h6 className={styles.BannerLable}>NUMBER OF NGOS MAPPED</h6>
            <h3 className={styles.BannerDetail}>12</h3>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.AlignCenter}>
            <h6 className={styles.BannerLable}>EMAIL</h6>
            <h3 className={styles.BannerDetail}>jaspreetsingh1990@gmail.com</h3>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" className={classes.WhiteSm}>
              Block User
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className={classes.BlueSm}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </div>

      <Grid spacing={3}>
        <Grid item xs={12} sm={6}>
          <p className={styles.smallText}>Showing 10 of 29 NGOs in platform</p>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.ListHead}>NGO details</TableCell>
              <TableCell className={classes.ListHead}>
                Relationship Manager
              </TableCell>
              <TableCell className={classes.ListHead}>
                No. of programs
              </TableCell>
              <TableCell className={classes.ListHead}>NGO admin</TableCell>
              <TableCell className={classes.ListHead}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableShadow}>
              <TableCell>
                <Avatar
                  alt=""
                  src="https://uc.uxpin.com/files/91911/99228/nav_bharat_jagriti_kendra_logo-c09c6b072671b59edcde327bb6ad7760-d6741d.png"
                  className={classes.logo}
                />
                <Typography
                  className={(classes.Listbody, classes.ListMain)}
                  paragraph={true}
                >
                  nav bharat jagriti kendra
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.Listbody} paragraph={true}>
                  Jas[reet Singh]
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.Listbody} paragraph={true}>
                  12
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.Listbody} paragraph={true}>
                  Anand Mirbhaya
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
            <TableRow className={classes.tableShadow}>
              <TableCell>
                <Avatar
                  alt=""
                  src="https://uc.uxpin.com/files/91911/99228/nav_bharat_jagriti_kendra_logo-c09c6b072671b59edcde327bb6ad7760-d6741d.png"
                  className={classes.logo}
                />
                <Typography
                  className={(classes.Listbody, classes.ListMain)}
                  paragraph={true}
                >
                  nav bharat jagriti kendra
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.Listbody} paragraph={true}>
                  Jas[reet Singh]
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.Listbody} paragraph={true}>
                  12
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.Listbody} paragraph={true}>
                  Anand Mirbhaya
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
    </div>
  );
}

export default RelationshipManagerSingle;
