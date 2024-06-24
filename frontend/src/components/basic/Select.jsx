import { useEffect, useRef, useState } from "react";
import { GoTriangleDown } from "react-icons/go";

export default function Select({ data }) {
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

  useEffect(() => {
    setIsDrop(false);
  }, [value]);
  console.log("value", value);
  return (
    <div ref={ref} className="select">
      <span onClick={() => setIsDrop(!isDorp)} className="active">
        {value}
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
