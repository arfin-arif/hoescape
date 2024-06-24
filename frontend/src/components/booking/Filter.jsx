import values from "../../../values";
import FilterItem from "./filterItem";

export default function Filter({ handler }) {
  return (
    <div className="filter">
      <div className="filter-top">
        <div className="name">
          <p>Filter</p>
          <span>2</span>
        </div>
        <button>Clear All</button>
      </div>
      <div className="filter-body">
        {values.filterData.map((item, i) => (
          <FilterItem key={i} data={item} />
        ))}
      </div>

      <div className="filter-btns">
        <button onClick={() => handler(false)} className="cancel">
          cancel
        </button>
        <button onClick={() => handler(false)} className="apply">
          Apply
        </button>
      </div>
    </div>
  );
}
