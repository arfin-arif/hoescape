import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function FilterItem({ data }) {
  const [collops, setCollops] = useState(false);
  return (
    <div className="filter-item">
      <button onClick={() => setCollops(!collops)}>
        <span>{data.name}</span> {data.count && <small>{data.count}</small>}
        {<FaAngleDown /> || <FaAngleUp />}
      </button>
      <ul className={`filter-item-body ${(collops && "show") || ""}`}>
        {data?.items.map((d, i) => (
          <div key={i} className="group">
            <input type="checkbox" id={d} />
            <label htmlFor={d}>{d}</label>
          </div>
        ))}
        <div className="filter-item-bottom">
          <button>Show All</button>
        </div>
      </ul>
    </div>
  );
}
