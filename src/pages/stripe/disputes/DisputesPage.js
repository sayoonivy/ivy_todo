import React from "react";
import Dispute from "./Dispute";
import "../StripePage.css";

export default function DisputesPage({
  newCharges,
  pendingCharges,
  lostCharges,
  wonCharges,
}) {
  function getTotalAmount(items) {
    let total = 0;
    items.forEach((item) => {
      const numericAmount = Number(
        item.amount.toString().replace(/[^\d.]/g, "")
      );
      total += numericAmount;
    });
    return total.toFixed(2);
  }
  return (
    <div className="stripe-events">
      <div>
        <div>
          <h1>NEW ({newCharges.length})</h1>
          {newCharges.map((charge) => (
            <Dispute key={charge.orderId} charge={charge} />
          ))}
        </div>
        <div>
          <h1>PENDING ({pendingCharges.length})</h1>
          {pendingCharges.map((charge) => (
            <Dispute key={charge.orderId} charge={charge} />
          ))}
        </div>
        <div>
          <h1>LOST ({lostCharges.length})</h1>
          {lostCharges.map((charge) => (
            <Dispute key={charge.orderId} charge={charge} />
          ))}
        </div>
        <div>
          <h1>WON ({wonCharges.length})</h1>
          {wonCharges.map((charge) => (
            <Dispute key={charge.orderId} charge={charge} />
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2>Total Amount: ${getTotalAmount(newCharges)}</h2>
        </div>
        <div>
          <h2>Total Amount: ${getTotalAmount(pendingCharges)}</h2>
        </div>
        <div>
          <h2>Total Amount: ${getTotalAmount(lostCharges)}</h2>
        </div>
        <div>
          <h2>Total Amount: ${getTotalAmount(wonCharges)}</h2>
        </div>
      </div>
    </div>
  );
}
