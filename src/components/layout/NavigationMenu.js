import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

export default function NavigationMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="navigation-menu">
      <ul>
        {["dashboard", "promotions", "tiktok", "instagram"].map((item) => (
          <li key={item} className={item} onClick={() => handleClick(item)}>
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
