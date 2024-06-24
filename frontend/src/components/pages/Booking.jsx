import { useEffect, useRef, useState } from "react";
import values from "../../../values";
import ExportBtn from "../basic/ExportBtn";
import Filters from "../basic/Filters";
import Title from "../basic/Title";
import BookingMneu from "../booking/BookingMenu";
import Pagenation from "../booking/Pagenation";
import QuoteDetails from "../booking/QuoteDetails";
import Table from "../booking/Table";
import TableUser from "../booking/TableUser";
import UserDetails from "../booking/UserDetails";

export default function Booking() {
  const [activePage, setActivePage] = useState("booking");
  const [isFilter, setIsFilter] = useState(false);
  const filter = useRef(null);
  const [isDetails, setIsDetails] = useState(false);
  const [isIndex, setIsIndex] = useState(null);
  const table = useRef(null);

  const [menus, setMenus] = useState([
    { name: "all" },
    { name: "New Request", request: 5 },
    { name: "pending" },
    { name: "declined" },
  ]);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (table.current && !table.current.contains(e.target)) {
        setIsIndex(false);
      }
    });
  });

  // key up down handler

  const handleKeyDown = (event) => {
    if (event.keyCode === 38) {
      // Arrow up key (move selection up)
      if (isIndex > 0) {
        setIsIndex((prev) => {
          return prev - 1;
        });
      }
    } else if (event.keyCode === 40) {
      // Arrow down key (move selection down)
      if (
        (activePage === "booking" && isIndex < values.requestTD.length - 1) ||
        isIndex < values.userTD.length - 1
      )
        setIsIndex((prev) => {
          return prev + 1;
        });
    }
  };

  useEffect(() => {
    if (isIndex || isIndex === 0) {
      // Attach the keydown event listener when the component mounts
      window.addEventListener("keydown", handleKeyDown);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the pressed key is the arrow down key (key code 40)
      if (event.keyCode === 40 || event.keyCode === 38) {
        event.preventDefault(); // Prevent the default scrolling behavior
        // Your custom handling for the arrow down key press can go here
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="booking">
      <div className="container">
        <div className="booking-box">
          <div className="booking-top">
            <div className="booking-top-left">
              <div className="info">
                <Title title="Recent Request" />
                <div className="booking-top-left-btns">
                  <button
                    onClick={() => {
                      setActivePage("booking");
                      setIsDetails(false);
                    }}
                    className={(activePage === "booking" && "active") || ""}
                  >
                    Booking Details
                  </button>
                  <button
                    onClick={() => {
                      setActivePage("user");
                      setIsDetails(false);
                    }}
                    className={(activePage === "user" && "active") || ""}
                  >
                    User Details
                  </button>
                </div>
              </div>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
            <div className="booking-top-right">
              <ExportBtn />
            </div>
          </div>
          <BookingMneu menus={menus} />
          <Filters activePage={activePage} />
          <div ref={table} className="booking-table">
            {(activePage === "booking" && (
              <>
                {" "}
                <Table
                  data={{
                    th: values.requestTH,
                    td: values.requestTD,
                    detailsHandler: setIsDetails,
                    isIndex: isIndex,
                    setIsIndex,
                    isDetails,
                  }}
                />
                <QuoteDetails
                  isDetails={isDetails}
                  isIndex={isIndex}
                  handler={setIsDetails}
                  isUser={true}
                />
              </>
            )) || (
              <>
                <TableUser
                  data={{
                    th: values.userTH,
                    td: values.userTD,
                    detailsHandler: setIsDetails,
                    isIndex: isIndex,
                    setIsIndex,
                    isDetails,
                  }}
                />
                <UserDetails
                  isDetails={isDetails}
                  isIndex={isIndex}
                  handler={setIsDetails}
                  setIsIndex
                  quate={true}
                />
              </>
            )}
          </div>

          <Pagenation />
        </div>
      </div>
    </div>
  );
}
