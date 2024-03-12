import * as React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    margin: "10px 0px",
    marginTop: "20px",

    "& button": {
      width: "100%",
      backgroundColor: "#CBC3E3",
      color: "white",
      fontSize: "large",
      fontWeight: "bold",
      height: "40px",
      border: "none",
      borderRadius: "5px",
      padding: "0px 15px",
    },
  },
});

export default function Button({ text, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <button type="submit" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
