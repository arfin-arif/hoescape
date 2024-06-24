import { useEffect, useRef, useState } from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import AddBtn from "../booking/AddBtn";
import Filter from "../booking/Filter";
import DateLine from "./DateLine";
import Search from "./Search";
import Select from "./Select";

export default function Filters({ activePage }) {
  const [isFilter, setIsFilter] = useState(false);
  const filter = useRef(null);

  const closeHandler = () => {
    setIsFilter(false);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (filter.current && !filter.current.contains(e.target)) {
        setIsFilter(false);
      }
    });
  }, []);
  return (
    <div className="booking-filter">
      <Search />
      <div className="booking-filters">
        {activePage && <AddBtn activePage={activePage} />}
        <div className="sort booking-btn">
          <div className="icon">
            <HiMiniBars3BottomLeft />
          </div>

          <Select data={["Sort", "Top", "Bottom"]} />
        </div>
        <div ref={filter} className=" booking-btn filter-btn-wrp">
          <button
            onClick={() => {
              setIsFilter(!isFilter);
            }}
            className="filter-btn"
          >
            <div className="icon">
              <FiFilter />
            </div>

            <p>Filters</p>
            <span>2</span>
          </button>

          {isFilter && <Filter handler={closeHandler} />}
        </div>
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
  );
}
