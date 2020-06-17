import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    NotificationCard: {
      padding: "20px 30px",
      border: "1px solid rgb(239, 239, 239)",
      boxShadow: "none",
      marginBottom: "20px",
    },
  })
);

export default useStyles;
