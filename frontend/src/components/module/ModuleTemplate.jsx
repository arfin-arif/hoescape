import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiDocumentText } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ModuleTemplate({ handler, addhotel }) {
  const navigate = useNavigate();

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

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Ceneral Template",
    },
    {
      id: 2,
      name: "General Template - Modificed",
    },
    {
      id: 3,
      name: "General Template - Modificed",
    },
    {
      id: 4,
      name: "Ceneral Template",
    },
  ]);

  const [activeItem, setActiveItem] = useState(null);

  return (
    <div
      ref={wrp}
      className={`add-hotel ${(addhotel && "show") || ""} module-template`}
    >
      <div ref={ref} className="add-hotel-inner">
        <div className="add-hotel-top">
          <span>
            <HiDocumentText />
          </span>
          <button onClick={() => handler(false)} className="close">
            <IoClose />
          </button>
        </div>
        <div className="add-hotel-body">
          <h4>Module Templates</h4>
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
          <div className="module-template-items">
            <div className="left">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`item ${
                    (activeItem === item.id && "active") || ""
                  }`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <HiDocumentText />
                  <div className="content">
                    <h4>Ceneral Template</h4>
                    <p>Section 1, Section 2, Section 3</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="add-hotel-footer ">
          <button onClick={() => handler(false)} className="btn cancel">
            Cancel
          </button>
          <button onClick={createHandler} className="btn">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
