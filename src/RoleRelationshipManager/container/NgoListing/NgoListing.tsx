import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./NgoListing.module.scss";
import useStyles from "./NgoListing.styles";

function NgoListing() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={styles.Body}>
        <div className={styles.BodyCard}>
          <div className={styles.BodyTitle}>
            <p className={styles.breadCrumb}>
              <i className="fas fa-home"></i> / NGO
            </p>
            <h2 className={styles.TitleText}>NGOs</h2>
            <p className={styles.SubTitleText}>
              Showing the list of all NGOs in GiveIndia platform
            </p>
          </div>
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell className={classes.ListHead}>
                    NGO details
                  </TableCell>
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
                    <Link to="/relationship-manager/ngo-single">
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
      </div>
      <Footer />
    </div>
  );
}

export default NgoListing;
