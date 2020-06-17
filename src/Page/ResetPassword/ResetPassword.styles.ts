import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "rgba(154, 161, 171, 0.12) 0px 0px 35px 0px",
  },
  content: {
    padding: "10% 12% !important",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "25px",
    lineHeight: "29px",
    color: "rgb(0, 0, 0)",
  },
  subText: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#999",
  },
  InputLabel: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "rgba(0,0,0,0.66)",
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
  button: {
    width: "100%",
  },
  pos: {
    marginBottom: 12,
  },
});

export default useStyles;
