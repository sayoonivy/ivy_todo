import React from "react";
import "../StripePage.css";

export default function FraudsPage({ frauds }) {
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  function getDataByMonth(month) {}

  return (
    <div className="fraud-events">
      <h1>{getCurrentYear()}</h1>
      <div className="calendar">
        <div>
          <div className="jan">
            <h2>January</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="feb">
            <h2>February</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="mar">
            <h2>March</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="apr">
            <h2>April</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
        </div>
        <div>
          <div className="may">
            <h2>May</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="jun">
            <h2>June</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="jul">
            <h2>July</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="aug">
            <h2>August</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
        </div>
        <div>
          <div className="sep">
            <h2>September</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="oct">
            <h2>October</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="nov">
            <h2>November</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
          <div className="dec">
            <h2>December</h2>
            <p>Number of frauds: 0</p>
            <p>Most recent fraud: Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
