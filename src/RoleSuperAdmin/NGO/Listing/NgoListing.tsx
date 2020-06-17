import React, { useState, useEffect } from "react";
import { Typography, Avatar } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./NgoListing.module.scss";
import useStyles from "./NgoListing.styles";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

function SuperAdminNgoListing() {
  const classes = useStyles();

  let token: any = localStorage.getItem("token");

  let ngoList: any = {};
  let setNgoList: any;
  [ngoList, setNgoList] = useState([]);

  useEffect(() => {
    axios
      .get("http://139.59.58.38:1337/api/ngo-list/", {
        headers: {
          token: token,
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setNgoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="LayoutParent">
      <Layout />
      <h2 className={styles.sectionHead}>NGOs</h2>
      <p className={styles.sectionSubHead}>
        Showing the list of all NGOs in GiveIndia platform
      </p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9} className={classes.MyAuto}>
          <p className={styles.smallText}>Showing 10 of 29 NGOs in platform</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className={styles.TextRight}>
            <div className={styles.SearchIp}>
              <input type="text" placeholder="Search NGO" />
              <i className="fas fa-search"></i>
            </div>
          </div>
        </Grid>
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
            {ngoList.map((ngo: any) => (
              <TableRow key={ngo.id} className={classes.tableShadow}>
                <TableCell>
                  <Avatar alt="" src={ngo.image} className={classes.logo} />
                  <Typography
                    className={(classes.Listbody, classes.ListMain)}
                    paragraph={true}
                  >
                    {ngo.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.Listbody} paragraph={true}>
                    {ngo.relationshipManager.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.Listbody} paragraph={true}>
                    {ngo.numPrograms}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.Listbody} paragraph={true}>
                    {ngo.ngoAdmin.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={(classes.Listbody, classes.link)}
                    paragraph={true}
                  >
                    <Link to={`/superadmin/ngo-single/${ngo.id}`}>
                      See details
                    </Link>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SuperAdminNgoListing;
