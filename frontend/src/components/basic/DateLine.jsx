// import Select from "./Select";

// export default function DateLine() {
//   return (
//     <div className="dateline">
//       <BsCalendarEvent />
//       <span>show:</span>
//       <Select
//         data={["Today", " Last day", "Last 7 days", "Last Month", "Last Year"]}
//       />
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";

export default function DateLine({ data, defaultText, icon }) {
  const [isDorp, setIsDrop] = useState(false);
  const ref = useRef(null);

  const [value, setValue] = useState(data[0]);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsDrop(false);
      }
    });
  }, []);

  return (
    <div ref={ref} className="select dateline">
      <span onClick={() => setIsDrop(!isDorp)} className="active">
        <span className="text">{icon}</span>
        <span className="text">{defaultText}</span>
        <span>{value}</span>
      </span>
      <button onClick={() => setIsDrop(!isDorp)} className="icon">
        <GoTriangleDown />
      </button>
      {isDorp && (
        <ul className="dropdown">
          {data.map((d, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  setValue(d);
                  setIsDrop(false);
                }}
              >
                {d}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
