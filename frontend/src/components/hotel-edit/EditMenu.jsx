import { useState } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniDocumentText, HiReceiptPercent } from "react-icons/hi2";

export default function EditMenu({ active, setActive }) {
  const [menus, setMenus] = useState([
    { id: 1, name: "Dettagli Hotel", icon: <HiMiniDocumentText /> },
    { id: 2, name: "Dettagli Location", icon: <FaLocationDot /> },
    {
      id: 3,
      name: "Dettagli Offerta",
      icon: <HiReceiptPercent />,
    },
    {
      id: 4,
      name: "Pubblica ",
      icon: <BsFillBookmarkStarFill />,
    },
  ]);

  return (
    <ul className="edit-menu">
      {menus.map((menu, i) => (
        <li
          onClick={() => setActive(i + 1)}
          className={`edit-menu-item ${(menu.id <= active && "active") || ""} `}
          key={i}
        >
          <div className="left">
            <span>{menu.icon}</span>
          </div>
          <div className="right">
            <span>Step {i + 1}</span>
            <strong>{menu.name}</strong>
          </div>
        </li>
      ))}
    </ul>
  );
}
