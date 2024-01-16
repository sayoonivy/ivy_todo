import * as React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    margin: "7px 0px",
    display: "flex",
    "& input": {
      width: "100%",
      height: "40px",
      border: "1px solid lightgrey",
      borderRadius: "5px",
      padding: "0px 7px",
      caretColor: "#CBC3E3",
    },
    "& input:focus": {
      outline: "none",
      border: "2px solid #CBC3E3",
    },
  },
  icon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
});

export default function TextField({
  name,
  type: initialType,
  autoFocus,
  onChanged,
}) {
  const [type, setType] = React.useState(initialType);
  const classes = useStyles();

  const togglePasswordVisibility = () => {
    setType(type === "password" ? "text" : "password");
  };

  const handleChange = (e) => {
    if (onChanged) {
      onChanged(e.target.value);
    }
  };

  return (
    <div className={classes.wrapper}>
      <label htmlFor={name} aria-label={`Textfield for ${name}`}></label>
      <input
        type={type}
        autoFocus={autoFocus}
        placeholder={name}
        id={name}
        autoComplete={name}
        onChange={handleChange}
      />
      {initialType === "password" && (
        <span className={classes.icon} onClick={togglePasswordVisibility}>
          {" "}
          {type === "password" ? (
            <FontAwesomeIcon icon={faLock} color="gold" />
          ) : (
            <FontAwesomeIcon icon={faLockOpen} color="red" />
          )}
        </span>
      )}
    </div>
  );
}
