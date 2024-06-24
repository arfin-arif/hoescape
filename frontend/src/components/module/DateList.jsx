import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function DateList({ handler, addhotel }) {
  const ref = useRef(null);
  const wrp = useRef(null);

  const createHandler = () => {
    handler(false);
  };

  useEffect(() => {
    wrp.current.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(false);
      }
    });
  });

  const [offers, setOffers] = useState([
    {
      id: 1,
      name: "General Template",
    },
    {
      id: 2,
      name: "General Template",
    },
    {
      id: 3,
      name: "General Template",
    },
    {
      id: 4,
      name: "General Template",
    },
  ]);

  const [dates, setDates] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const [isOffer, setIsOffer] = useState(true);
  const [activeID, setActiveId] = useState(null);
  const [istoggle, setIsToggle] = useState(null);

  return (
    <div
      ref={wrp}
      className={`add-hotel ${(addhotel && "show") || ""} module-template `}
    >
      <div ref={ref} className="add-hotel-inner">
        <div className="add-hotel-top">
          <span>
            <FaRegCalendarDays />
          </span>
          <button onClick={() => handler(false)} className="close">
            <IoClose />
          </button>
        </div>

        <div className="add-hotel-body">
          <h4>Date Templates</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <div className="module-template-search">
            <label htmlFor="search">
              <BiSearch />
            </label>
            <input type="text" placeholder="Search" id="search" />
            <button className="btn">Search</button>
          </div>
          <div className={`module-template-items `}>
            <div className="right date">
              {offers.map((item, i) => (
                <div
                  key={i}
                  className={`item ${(activeID === item.id && "active") || ""}`}
                  onClick={() => {
                    setActiveId(item.id);
                  }}
                >
                  <div className="body">
                    <FaRegCalendarDays />
                    <div className="content">
                      <h4>{item.name}</h4>
                      <p>45 dates</p>
                    </div>
                    {(!(istoggle === item.id) && (
                      <button
                        onClick={() => {
                          setIsToggle(item.id);
                          setActiveId(null);
                        }}
                        className="btn btn-white"
                      >
                        View Details
                      </button>
                    )) || (
                      <button
                        onClick={() => setIsToggle(null)}
                        className="close"
                      >
                        <FaAngleUp />
                      </button>
                    )}
                  </div>

                  <div
                    className={`offer-item-body date ${
                      (istoggle === item.id && "show") || ""
                    }`}
                  >
                    <div className="date-body">
                      <div className="date-body-left">
                        <p>Starting Date</p>
                        {dates.map((date, i) => (
                          <div key={i} className="date-body-item">
                            27/05/22
                          </div>
                        ))}
                      </div>
                      <div className="date-body-right">
                        <p>Ending Date</p>
                        {dates.map((date, i) => (
                          <div key={i} className="date-body-item">
                            29/05/22
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="add-hotel-footer">
          <button
            onClick={() => {
              handler(false);
            }}
            className="btn cancel"
          >
            cancel
          </button>
          <button onClick={createHandler} className="btn">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
