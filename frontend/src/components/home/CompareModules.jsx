import { BsCalendarEvent } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import DateLine from "../basic/DateLine";
import CompareItem from "./CompareItem";

export default function CompareModules({ setIsCompare }) {
  return (
    <div className="compare-modules">
      <div className="compare-modules-inner">
        <div className="compare-modules-bar">
          <span>Compare Modules</span>
          <button onClick={() => setIsCompare(false)}>
            <IoMdClose />
          </button>
        </div>
        <div className="compare-modules-top">
          <div className="left">
            <h4>Compare Modules</h4>
            <p>
              Choose two different modules so you can analyze their features
              side by side.
            </p>
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

        <div className="compare-modules-body">
          <CompareItem value={1938} />
          <CompareItem value={638} />
        </div>
      </div>
    </div>
  );
}
