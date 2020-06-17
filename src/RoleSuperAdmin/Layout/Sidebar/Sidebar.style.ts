import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      padding: " 10px 16px",
    },
    SidebarIcon: {
      minWidth: "40px",
      color: "rgb(68, 68, 68)",
      verticalAlign: "bottom",
    },
  })
);

export default useStyles;
