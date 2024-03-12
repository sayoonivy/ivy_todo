import * as React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: "blue",
    padding: "5px 10px",
    margin: "15px 0px",
    textAlign: "start",
    borderRadius: "5px",
  },

  update: {
    backgroundColor: "#AEC6CF",
  },

  closed: {
    backgroundColor: "#FF6961",
  },

  refund: {
    backgroundColor: "#FDFD96",
  },

  won: {
    backgroundColor: "#77DD77",
  },
});

export default function StripeEvent({ charge }) {
  const classes = useStyles();
  let wrapperStyle = `${classes.wrapper}`;

  switch (charge.type) {
    case "charge.dispute.updated":
      wrapperStyle += ` ${classes.update}`;
      break;

    case "charge.dispute.closed":
      if (charge.status === "won") {
        wrapperStyle += ` ${classes.won}`;
        break;
      }
      wrapperStyle += ` ${classes.closed}`;
      break;

    case "charge.refunded":
      wrapperStyle += ` ${classes.refund}`;
      break;

    default:
      wrapperStyle += ` ${classes.error}`;
  }

  function formatDateString(dateStr) {
    const options = { year: "2-digit", month: "short", day: "2-digit" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  }

  function formatString(input) {
    let result = input.replace(/[^a-zA-Z0-9]/g, " ");
    result = result.trim();
    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();

    return result;
  }

  return (
    <div className={wrapperStyle}>
      <h2>Order #: {charge.orderId}</h2>
      <p>Date: {formatDateString(charge.created)}</p>
      <p>Amount: ${charge.amount}</p>
      {charge.type !== "charge.refunded" ? (
        <p>Description: {formatString(charge.description)}</p>
      ) : (
        <></>
      )}
      {charge.type === "charge.dispute.updated" ? (
        <p>Has evidence? {formatString(charge.name)}</p>
      ) : (
        <p>Name: {charge.name}</p>
      )}
    </div>
  );
}
