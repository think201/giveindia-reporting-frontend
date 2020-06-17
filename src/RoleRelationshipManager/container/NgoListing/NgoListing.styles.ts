import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  NotificationCard: {
    padding: "20px 30px",
    border: "1px solid rgb(239, 239, 239)",
    boxShadow: "none",
    marginBottom: "20px",
  },
  tableContainer: {
    boxShadow: "none",
    border: "0",
  },
  table: {
    minWidth: 650,
    backgroundColor: "transparent",
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    maxWidth: "1220px",
    margin: " 0 auto",
  },
  tableHead: {},
  ListHead: {
    fontSize: "13px",
    color: "rgb(68,68,68)",
    border: "0",
    padding: "10px 5px 5px",
    borderTop: "1px solid rgb(239,239,239)",
  },
  Listbody: {
    fontSize: "14px",
    color: "rgb(68,68,68)",
    border: "0",
    margin: "0",
  },
  link: {
    color: "rgb(0, 140, 140)",
    margin: 0,
  },
  ListMain: {
    display: "inline-block",
    fontSize: "14px",
    color: "rgb(68,68,68)",
    margin: "0",
  },
  logo: {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "10px",
  },
  tableShadow: {
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 5px 0px",
  },
  Search: {},
  LgDialohPadding: {
    padding: "40px",
    paddingTop: "40px !important",
  },
  LgDialogHeight: {
    maxHeight: "unset",
  },
  /*Banner*/
  FlexColumn: {
    flexDirection: "column",
  },
  AlignCenter: {
    alignSelf: "center",
  },
  WhiteSm: {
    color: "rgb(255, 80, 80)",
    padding: "5px 15px",
    boxShadow: "rgba(0, 0, 0, 0.11) 0px 4px 6px 0px",
    backgroundColor: "#fff",
    marginRight: "8px",
    fontSize: "13px",
  },
  WhiteSmBt: {
    color: "#444",
    padding: "5px 15px",
    boxShadow: "rgba(0, 0, 0, 0.11) 0px 4px 6px 0px",
    backgroundColor: "#fff",
    marginRight: "8px",
    fontSize: "13px",
  },
  BlueSm: {
    fontSize: "13px",
    padding: "5px 15px",
  },
  RedSm: {
    fontSize: "13px",
    padding: "5px 15px",
  },
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
});

export default useStyles;
