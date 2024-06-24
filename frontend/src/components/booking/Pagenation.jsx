import { useState } from "react";

export default function Pagenation({ isbrns }) {
  const [btns, setBtns] = useState([1, 2, 3, 4]);
  const [activeBtn, setActiveBtn] = useState(btns[0]);
  return (
    <div className="pagenation-wrp">
      <span>Showing 13 from 324 Entries</span>
      {isbrns && (
        <ul className="pagenation">
          <li>
            <button
              onClick={() => {
                if (activeBtn > 1) {
                  setActiveBtn(activeBtn - 1);
                }
              }}
              disabled={activeBtn === 1}
              className="prenext"
            >
              Previous
            </button>
          </li>
          {btns.map((btn) => (
            <li key={btn}>
              <button
                onClick={() => setActiveBtn(btn)}
                className={`pagenation-btn ${
                  (activeBtn === btn && "active") || ""
                }`}
              >
                {btn}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                if (activeBtn < btns[btns.length - 1]) {
                  setActiveBtn(activeBtn + 1);
                }
              }}
              disabled={activeBtn === btns[btns.length - 1]}
              className="prenext"
            >
              next
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
