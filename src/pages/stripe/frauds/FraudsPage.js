import React from "react";
import "../StripePage.css";

export default function FraudsPage({ frauds }) {
  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  function getDataByMonth(month) {
    const date = new Date();
    const year = date.getFullYear();

    var totalFrauds = 0;

    for (var i = 0; i < frauds.length; i++) {
      if (frauds[0].year === year && frauds[0].month === month) {
        totalFrauds = frauds[0].total;
      }
    }

    return totalFrauds;
  }

  function getRecentDate(month) {
    const date = new Date();
    const year = date.getFullYear();

    var recentFraud = "None";

    for (var i = 0; i < frauds.length; i++) {
      if (frauds[0].year === year && frauds[0].month === month) {
        recentFraud = convertTimestampToEST(frauds[0].recent);
      }
    }

    return recentFraud;
  }

  function convertTimestampToEST(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const estDate = new Date(date.setHours(date.getHours() - 5));
    const options = { year: "2-digit", month: "short", day: "2-digit" };
    const formattedDate = estDate.toLocaleDateString("en-US", options);

    return formattedDate.replace(",", "");
  }

  return (
    <div className="fraud-events">
      <h1>{getCurrentYear()}</h1>
      <div className="calendar">
        <div>
          <div className="jan">
            <h2>January</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(1)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(1)}</strong>
            </p>
          </div>
          <div className="feb">
            <h2>February</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(2)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(2)}</strong>
            </p>
          </div>
          <div className="mar">
            <h2>March</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(3)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(3)}</strong>
            </p>
          </div>
          <div className="apr">
            <h2>April</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(4)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(4)}</strong>
            </p>
          </div>
        </div>
        <div>
          <div className="may">
            <h2>May</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(5)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(5)}</strong>
            </p>
          </div>
          <div className="jun">
            <h2>June</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(6)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(6)}</strong>
            </p>
          </div>
          <div className="jul">
            <h2>July</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(7)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(7)}</strong>
            </p>
          </div>
          <div className="aug">
            <h2>August</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(8)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(8)}</strong>
            </p>
          </div>
        </div>
        <div>
          <div className="sep">
            <h2>September</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(9)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(9)}</strong>
            </p>
          </div>
          <div className="oct">
            <h2>October</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(10)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(10)}</strong>
            </p>
          </div>
          <div className="nov">
            <h2>November</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(11)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(11)}</strong>
            </p>
          </div>
          <div className="dec">
            <h2>December</h2>
            <p>
              Number of frauds: <strong>{getDataByMonth(12)}</strong>
            </p>
            <p>
              Most recent fraud:
              <br />
              <strong>{getRecentDate(12)}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
