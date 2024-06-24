import { useEffect, useRef, useState } from "react";
import "../styles/Navbar/navbar.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // refs
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // states
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  // UseEffect Function for Handle Popup Open Close
  useEffect(() => {
    const closePopup = (e) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setShowNotificationPopup(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [ref, ref2]);

  // UseEffect Function for Handle Popup Open Close
  useEffect(() => {
    const closePopup = (e) => {
      if (
        !ref3?.current?.contains(e?.target) &&
        !ref4?.current?.contains(e?.target)
      ) {
        setShowLogout(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [ref3, ref4]);

  return (
    <div className="navbar">
      {/* left side */}
      <div className="nav_left">
        <h2 className="jakarta">Dashboard</h2>
      </div>

      {/* center */}
      <div className="nav_center">
        {/* left side */}
        <div className="nc_left">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g opacity="0.5">
              <path
                d="M15.75 15.75L13.1251 13.125M15 8.625C15 12.1458 12.1458 15 8.625 15C5.10418 15 2.25 12.1458 2.25 8.625C2.25 5.10418 5.10418 2.25 8.625 2.25C12.1458 2.25 15 5.10418 15 8.625Z"
                stroke="#84818A"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          {/* input */}
          <input type="text" placeholder="Quick Search" />
        </div>

        {/* right icon */}
        <div className="nc_right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            style={{ cursor: "pointer" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.40013 11.494H1.14929C0.804292 11.494 0.524292 11.214 0.524292 10.869C0.524292 10.524 0.804292 10.244 1.14929 10.244H6.40013C6.74513 10.244 7.02513 10.524 7.02513 10.869C7.02513 11.214 6.74513 11.494 6.40013 11.494Z"
              fill="#84818A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9924 3.41699H8.74243C8.39743 3.41699 8.11743 3.13699 8.11743 2.79199C8.11743 2.44699 8.39743 2.16699 8.74243 2.16699H13.9924C14.3374 2.16699 14.6174 2.44699 14.6174 2.79199C14.6174 3.13699 14.3374 3.41699 13.9924 3.41699Z"
              fill="#84818A"
            />
            <mask
              id="mask0_126_48"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="6"
              height="6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 0.166992H5.68817V5.32666H0.5V0.166992Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_126_48)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.09404 1.41669C2.35321 1.41669 1.74988 2.01335 1.74988 2.74752C1.74988 3.48085 2.35321 4.07669 3.09404 4.07669C3.83571 4.07669 4.43821 3.48085 4.43821 2.74752C4.43821 2.01335 3.83571 1.41669 3.09404 1.41669ZM3.09404 5.32669C1.66404 5.32669 0.499878 4.17002 0.499878 2.74752C0.499878 1.32502 1.66404 0.166687 3.09404 0.166687C4.52488 0.166687 5.68821 1.32502 5.68821 2.74752C5.68821 4.17002 4.52488 5.32669 3.09404 5.32669Z"
                fill="#84818A"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4898 9.50665C11.7481 9.50665 11.1448 10.1033 11.1448 10.8367C11.1448 11.5708 11.7481 12.1667 12.4898 12.1667C13.2306 12.1667 13.8331 11.5708 13.8331 10.8367C13.8331 10.1033 13.2306 9.50665 12.4898 9.50665ZM12.4898 13.4167C11.0589 13.4167 9.89478 12.2592 9.89478 10.8367C9.89478 9.41415 11.0589 8.25665 12.4898 8.25665C13.9198 8.25665 15.0831 9.41415 15.0831 10.8367C15.0831 12.2592 13.9198 13.4167 12.4898 13.4167Z"
              fill="#84818A"
            />
          </svg>
        </div>
      </div>

      {/* right side */}
      <div className="nav_right">
        {/* notification icon box */}
        <div
          ref={ref}
          className="notification_box"
          onClick={() => setShowNotificationPopup(true)}
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.5C8.77095 3.5 6.05382 5.99085 5.67964 9.29403L5.33476 12.3385C5.24906 13.095 4.94246 13.8069 4.45549 14.38C3.42209 15.5964 4.26081 17.5 5.83014 17.5H18.1699C19.7392 17.5 20.5779 15.5964 19.5445 14.38C19.0575 13.8069 18.7509 13.095 18.6652 12.3385L18.3204 9.29403C17.9462 5.99085 15.2291 3.5 12 3.5ZM14.9721 19.5715C14.5147 20.6992 13.3565 21.5 12 21.5C10.6435 21.5 9.48526 20.6992 9.02789 19.5715C9.00883 19.5245 9 19.474 9 19.4233C9 19.1895 9.18951 19 9.42329 19H14.5767C14.8105 19 15 19.1895 15 19.4233C15 19.474 14.9912 19.5245 14.9721 19.5715Z"
              fill="#B0B7C3"
            />
          </svg>

          {/* Tooltip */}
          <div className="notofications-count">
            <p>5</p>
          </div>

          {/* Notifications popup*/}

          {showNotificationPopup === true ? (
            <div className="notification_popup">
              <ul>
                <li className="jakarta">Notification 1</li>
                <li className="jakarta">Notification 2</li>
                <li className="jakarta">Notification 3</li>
                <li className="jakarta">Notification 4</li>
                <li className="jakarta">Notification 5</li>
              </ul>
            </div>
          ) : null}
        </div>

        {/* Profile */}
        <div
          className="profile_info"
          ref={ref3}
          onClick={() => setShowLogout(true)}
        >
          {/* image */}
          <img src="./images/avatar.png" alt="avatar" />

          {/* author info */}
          <div className="author">
            <p className="author_name">Sarah Sanders</p>
            <span className="author_position jakarta">Sub-Admin</span>
          </div>

          {/* Icon  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginLeft: "-10px", marginBottom: "5px" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.291 10.7074C16.9214 10.0776 16.4754 9 15.5842 9H8.41268C7.52199 9 7.07572 10.0767 7.70525 10.7068L11.2878 14.2926C11.6782 14.6833 12.3113 14.6836 12.702 14.2932L16.291 10.7074Z"
              fill="#8F92A1"
              fillOpacity="0.4"
            />
          </svg>

          {/* Logout button */}
          {showLogout === true ? (
            <div className="profile_popup" ref={ref4}>
              <button className="jakarta">See Profile</button>
              <NavLink to="/login">
                <button className="jakarta">Logout</button>
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
