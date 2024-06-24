import { useState } from "react";

export default function TimeSlot({ data }) {
  const [active, setActive] = useState("7:00 PM");
  return (
    <div className="time-slot">
      <div className="time-slot-top">
        <span>Available Time Slot</span>
        <div className="time-slot-top-group">
          <input id={data.name} type="checkbox" />
          <label htmlFor={data.name}>Show other slot to customer</label>
        </div>
      </div>
      <div className="time-slot-btns-wrp">
        <div className="time-slot-btns">
          {data.times.map((d, i) => (
            <button
              onClick={() => setActive(d)}
              className={(active === d && "active") || ""}
              key={i}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
