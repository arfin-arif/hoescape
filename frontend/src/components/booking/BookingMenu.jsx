import { useState } from "react";

export default function BookingMneu({ menus = [] }) {
  const [activeMenu, setActiveMenu] = useState(menus[0].name);
  return (
    <div className="booking-main">
      <div className="booking-menu">
        {menus.map((d, i) => (
          <div
            className={`booking-menu-item ${
              (d.name === activeMenu && "active") || ""
            }`}
            key={i}
          >
            <button onClick={() => setActiveMenu(d.name)} key={i}>
              {d.name}
            </button>
            {d.request && <span>{d.request}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
