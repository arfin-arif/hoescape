import { useEffect, useRef, useState } from "react";
import { BsCalendarEvent } from "react-icons/bs";
import DateLine from "../basic/DateLine";
import { useAuth } from "../../middleware/AuthContext";

const DashboardTopBar = () => {
  const ref = useRef();
  const ref2 = useRef();

  // select timeframe data array
  const timeFrame = [
    "Last 7 days",
    "Last 15 days",
    "Last 30 days",
    "Last 3 Months",
    "Last 6 Months",
    "Last 12 Months",
  ];

  // state for show the dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // UseEffect Function for Handle Popup Open Close
  useEffect(() => {
    const closePopup = (e) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, []);

  // state for current timeframe state
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 7 days");
  const { userInfo } = useAuth();
  return (
    <div className="topbar">
      {/* welcome text */}
      <div className="welcome">
        <h1 className="jakarta">Benvenuto, {userInfo?.name?.firstName}</h1>
      </div>

      {/* Filter Option */}
      <div className="filter-custom">
        {/* Left side */}
        <div className="left">
          <p className="jakarta">Monday, 08 July 2023.</p>
          <p className="jakarta">
            You&apos;ve 5 new booking request, Checkout more in{" "}
            <span>
              <a href="#">Booking Request</a>
            </span>
          </p>
        </div>

        {/* right side */}
        <div className="right">
          {/* filter menu */}
          <DateLine
            data={[
              "Today",
              " Last day",
              "Last 7 days",
              "Last Month",
              "Last Year",
            ]}
            defaultText="show:"
            icon={<BsCalendarEvent />}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
