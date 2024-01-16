import * as React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faTriangleExclamation,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  wrapper: {
    marginTop: "20px",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "row",
  },

  error: {
    border: "1px solid #DC143C",
  },

  network: {
    border: "1px solid #DAA520",
  },

  icon: {
    marginRight: "10px",
  },
});

export default function ErrorMessage({ type }) {
  const classes = useStyles();

  let message;
  let icon;
  let wrapperStyle = `${classes.wrapper}`;

  switch (type) {
    case "error":
      message = "Please check your username or your password again";
      icon = (
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={classes.icon}
          color="#DC143C"
        />
      );
      wrapperStyle += ` ${classes.error}`;
      break;

    case "network":
      message = "Please check your internet connection again";
      icon = (
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className={classes.icon}
          color="#DAA520"
        />
      );
      wrapperStyle += ` ${classes.network}`;
      break;
    default:
      message = "Unknown error.";
      icon = (
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className={classes.icon}
          color="#DC143C"
        />
      );
      wrapperStyle += ` ${classes.error}`;
  }

  return (
    <div className={wrapperStyle}>
      <div>{icon}</div>
      {message}
    </div>
  );
}
