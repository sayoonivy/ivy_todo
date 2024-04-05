import React, { useEffect, useState } from "react";
import "./StripePage.css";
import { getDisputes, getRefunds, getFrauds } from "../../services/Node";
import TabBar from "../../components/layout/TabBar";
import DisputesPage from "./disputes/DisputesPage";
import RefundsPage from "./refunds/RefundsPage";
import FraudsPage from "./frauds/FraudsPage";

const tabs = [
  {
    id: "disputes",
    name: "Disputes",
  },
  {
    id: "refunds",
    name: "Refunds",
  },
  {
    id: "frauds",
    name: "Frauds",
  },
];

export default function StripePage() {
  const [newCharges, setNewCharges] = useState([]);
  const [pendingCharges, setPendingCharges] = useState([]);
  const [lostCharges, setLostCharges] = useState([]);
  const [wonCharges, setWonCharges] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [frauds, setFrauds] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const getDisputeData = async () => {
      try {
        const response = await getDisputes();

        if (!response.ok) {
          return;
        }

        const responseData = await response.json();
        categorizeData(responseData);
      } catch (error) {
        console.error("Failed fetching data: ", error);
      }
    };

    const getRefundData = async () => {
      try {
        const response = await getRefunds();

        if (!response.ok) {
          return;
        }

        const responseData = await response.json();
        setRefunds(responseData);
      } catch (error) {
        console.error("Failed fetching data: ", error);
      }
    };

    const getFraudData = async () => {
      try {
        const response = await getFrauds();

        if (!response.ok) {
          return;
        }

        const responseData = await response.json();
        setFrauds(responseData);
      } catch (error) {
        console.error("Failed fetching data: ", error);
      }
    };

    getDisputeData();
    getRefundData();
    getFraudData();
  }, []);

  const categorizeData = (data) => {
    const newC = [];
    const pendingC = [];
    const lostC = [];
    const wonC = [];

    data.forEach((item) => {
      const indexInNewC = newC.findIndex((x) => x.orderId === item.orderId);
      const indexInPendingC = pendingC.findIndex(
        (x) => x.orderId === item.orderId
      );

      switch (item.type) {
        case "needs_response":
          if (indexInNewC !== -1) {
            newC.splice(indexInNewC, 1, item);
          } else {
            newC.push(item);
          }
          break;

        case "under_review":
          if (indexInNewC !== -1) {
            newC.splice(indexInNewC, 1);
          }
          pendingC.push(item);
          break;

        case "lost":
          if (indexInPendingC !== -1) {
            pendingC.splice(indexInPendingC, 1);
          }
          lostC.push(item);
          break;

        case "won":
          if (indexInPendingC !== -1) {
            pendingC.splice(indexInPendingC, 1);
          }
          wonC.push(item);
          break;

        default:
          break;
      }
    });

    setNewCharges(newC);
    setPendingCharges(pendingC);
    setLostCharges(lostC);
    setWonCharges(wonC);
  };

  const renderContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <DisputesPage
            newCharges={newCharges}
            pendingCharges={pendingCharges}
            lostCharges={lostCharges}
            wonCharges={wonCharges}
          />
        );

      case 1:
        return <RefundsPage refunds={refunds} />;

      case 2:
        return <FraudsPage frauds={frauds} />;

      default:
        return <div>1</div>;
    }
  };

  return (
    <div className="stripe-page">
      <div>
        <TabBar
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
      </div>
      {renderContent()}
    </div>
  );
}
