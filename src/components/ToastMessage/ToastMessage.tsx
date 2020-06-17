import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface Props {
  open: boolean;
  severity: Severity;
  message: String;
  seconds: number;
  handleClose: Function;
}

// Since attribute severity can only have 5 values,
type Severity = "error" | "success" | "info" | "warning" | undefined;

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ToastMessage: React.SFC<Props> = ({
  open,
  severity,
  message,
  seconds,
  handleClose,
}) => {
  const handleCloseButton = () => {
    handleClose();
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={seconds}
        onClose={handleCloseButton}
      >
        <Alert onClose={handleCloseButton} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ToastMessage;
