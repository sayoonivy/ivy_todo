import React, { useRef, useEffect, useState } from "react";
import "./TabBar.css";

export default function TabBar({ tabs, activeTabIndex, setActiveTabIndex }) {
  const tabsRef = useRef([]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="slidingTabBarContainer">
      <span
        className="tabUnderline"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="tabUnderlineInner" />
      </span>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabsRef.current[index] = el)}
          className={`tabButton ${activeTabIndex === index ? "active" : ""}`}
          onClick={() => setActiveTabIndex(index)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}
