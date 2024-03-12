import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationMenu.css";

export default function NavigationMenu() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("dashboard");

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "dashboard";
    setSelectedItem(currentPath);
  }, [location]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="navigation-menu">
      <ul>
        {["dashboard", "stripe"].map((item) => (
          <li
            key={item}
            className={`${item} ${selectedItem === item ? "selectedItem" : ""}`}
            onClick={() => handleClick(item)}
          >
            <Link to={`/${item === "dashboard" ? "" : item}`} className="link">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {selectedItem === item && <div className="tab-indicator"></div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
