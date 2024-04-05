import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    padding: "7px",
    marginBottom: "15px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: ".7",

    "& div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },

    "& p": {
      margin: "3px",
      padding: "0px",
      textAlign: "start",
    },
  },

  new: {
    backgroundColor: "#89CFF0",
  },

  pending: {
    backgroundColor: "#FFD580",
  },

  lost: {
    backgroundColor: "#FF6961",
  },

  won: {
    backgroundColor: "#77DD77",
  },
});

export default function Dispute({ charge }) {
  const classes = useStyles();
  let wrapperStyle = `${classes.wrapper}`;

  switch (charge.type) {
    case "needs_response":
      wrapperStyle += ` ${classes.new}`;
      break;

    case "under_review":
      wrapperStyle += ` ${classes.pending}`;
      break;

    case "lost":
      wrapperStyle += ` ${classes.lost}`;
      break;

    case "won":
      wrapperStyle += ` ${classes.won}`;
      break;

    default:
      break;
  }

  function formatUSD(number) {
    return `${parseFloat(number).toFixed(2)}`;
  }

  function convertTimestampToEST(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const estDate = new Date(date.setHours(date.getHours() - 5));
    const options = { year: "2-digit", month: "short", day: "2-digit" };
    const formattedDate = estDate.toLocaleDateString("en-US", options);

    return formattedDate.replace(",", "");
  }

  return (
    <div className={wrapperStyle}>
      <div>
        <p>
          <strong>Order #:</strong> {charge.orderId}
        </p>
        <p>
          <strong>Created:</strong> {convertTimestampToEST(charge.created)}
        </p>
        <p>
          <strong>Amount:</strong> ${formatUSD(charge.amount)}
        </p>
        <p>
          <strong>Card:</strong> {charge.card}
        </p>
        <p>
          <strong>Reason:</strong> {charge.reason}
        </p>
        {charge.ip === null ? (
          <p>
            <strong>No IP Listed</strong>
          </p>
        ) : (
          <p>
            <strong>IP:</strong> {charge.ip}
          </p>
        )}
        {charge.type === "lost" || charge.type === "won" ? (
          <p>
            <strong>Completed Date:</strong> {convertTimestampToEST(charge.due)}
          </p>
        ) : (
          <p>
            <strong>Due Date:</strong> {convertTimestampToEST(charge.due)}
          </p>
        )}
      </div>
    </div>
  );
}
