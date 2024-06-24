import { useEffect, useRef, useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Input from "../hotel-edit/Input";

export default function AddModule({ handler, addhotel }) {
  const navigate = useNavigate();

  const [hotelId, setHotelId] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState("");

  const [isError, setIsError] = useState(false);

  const createHandler = () => {
    if (hotelId && name) {
      navigate(`/module/edit/${hotelId}`);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    setIsError(false);
  }, [name, active, hotelId]);

  const ref = useRef(null);
  const wrp = useRef(null);

  useEffect(() => {
    wrp.current.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(false);
      }
    });
  });

  return (
    <div ref={wrp} className={`add-hotel ${(addhotel && "show") || ""}`}>
      <div ref={ref} className="add-hotel-inner">
        <div className="add-hotel-top">
          <span>
            <BsFillBuildingsFill />
          </span>
          <button onClick={() => handler(false)} className="close">
            <IoClose />
          </button>
        </div>
        <div className="add-hotel-body">
          <h4>Add New Module</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              className={`add-hotel-item ${
                (isError && !hotelId && "error") || ""
              }`}
            >
              <label htmlFor="">Hotel ID</label>
              <Input d={{ value: hotelId, label: "#" }} handler={setHotelId} />
            </div>{" "}
            <div
              className={`add-hotel-item ${
                (isError && !name && "error") || ""
              }`}
            >
              <label htmlFor="">Module Name</label>
              <Input
                handler={setName}
                d={{ value: name, label: "Enter module name" }}
              />
            </div>{" "}
          </form>
        </div>
        <div className="add-hotel-footer">
          <button onClick={() => handler(false)} className="btn cancel">
            Cancel
          </button>
          <button onClick={createHandler} className="btn">
            Create Module
          </button>
        </div>
      </div>
    </div>
  );
}
