import { useEffect, useState } from "react";
import { BiSolidOffer, BiSolidUserVoice } from "react-icons/bi";
import { FaAngleLeft, FaCarSide } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiHotelFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../middleware/AuthContext";

export default function Sidebar({ isFull, setIsFull }) {
  const menu = [
    {
      name: "deshboard",
      icon: <PiSquaresFourFill />,
      url: "/",
    },
    {
      name: "Booking Request",
      icon: <BiSolidUserVoice />,
      notific: 5,
      url: "/booking",
    },
    {
      name: "Hotel Management",
      icon: <RiHotelFill />,
      url: "/hotel",
    },
    {
      name: "Modules",
      icon: <BiSolidOffer />,
      url: "/module",
    },
    {
      name: "Transport",
      icon: <FaCarSide />,
      url: "/transport",
    },
    {
      name: "Settings",
      icon: <IoSettingsSharp />,
      url: "/setting",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(menu[0].url);
  const location = useLocation();
  const { logout } = useAuth();

  useEffect(() => {
    setActiveMenu(location.pathname);
  });

  console.log(activeMenu);
  return (
    <nav className="nav" id="nav">
      <div className="nav-brand">
        <button
          style={{
            transform: !isFull
              ? "translate(50%, -50%) rotate(180deg)"
              : "translate(50%, -50%)",
          }}
          onClick={() => setIsFull(!isFull)}
          className="toggle"
        >
          {<FaAngleLeft />}
        </button>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          {isFull && <h1>HoEscape</h1>}
        </Link>
      </div>
      <div className="nav-main">
        <div className="nav-main-top">
          <span>home</span>
          <button>
            <HiOutlineDotsHorizontal />
          </button>
        </div>
        <ul className="nav-menu">
          {menu.map((d, i) => (
            <li key={i}>
              <Link
                // onClick={() => setActiveMenu(d.url.replace("/", ""))}
                className={(d.url === activeMenu && "active") || ""}
                to={d.url}
              >
                {d.icon}
                {isFull && <p>{d.name}</p>}
                {isFull && d.notific && (
                  <span className="nofic">{d.notific}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-logout">
        <button onClick={logout}>
          <FiLogOut />
          {isFull && <span>logout </span>}
        </button>
      </div>
    </nav>
  );
}
