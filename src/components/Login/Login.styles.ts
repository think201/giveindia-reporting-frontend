import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Card: {
    boxShadow: "rgba(154, 161, 171, 0.12) 0px 0px 35px 0px",
    width: "780px",
    margin: "auto",
    marginTop: "16px",
  },
  CardBody: {
    padding: "20px",
    width: "70%",
    margin: "auto",
    textAlign: "left",
  },
  H1: {
    fontSize: "25px",
    fontWeight: "normal",
    marginBottom: "5px",
  },
  Input: {
    border: "rgb(206, 212, 218) 1px solid",
    padding: "0 12px",
    height: "45px",
    borderRadius: "5px",
    marginBottom: "16px",
    "&:hover": {
      borderBottom: "0",
    },
    "&:after": {
      borderBottom: "0",
    },
    "&:before": {
      borderBottom: "0",
    },
  },
  InputLabel: {
    color: "rgba(0, 0, 0, 0.66);",
    marginBottom: "8px",
  },
});

export default useStyles;
