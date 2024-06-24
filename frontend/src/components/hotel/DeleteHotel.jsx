import { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";

export default function DeleteHotel({
  data,
  isShow,
  closeHandler,
  changeHandler,
}) {
  const [value, setValue] = useState("");

  const ref = useRef(null);
  const wrp = useRef(null);

  useEffect(() => {
    wrp.current.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeHandler();
      }
    });
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!value) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [value]);

  return (
    <div
      ref={wrp}
      className={`edit-title-wrp delete-disable ${(isShow && "show") || ""}`}
    >
      <div ref={ref} className={`edit-title booking-box `}>
        <div className="edit-title-top">
          <h4>Delete Hotel</h4>
          <button onClick={closeHandler}>
            <GrClose />
          </button>
        </div>
        <p>Please type the hotel name to be sure that you want delete.</p>

        <div className="item">
          <label htmlFor="">Title Name</label>
          <input
            className={isError && "error"}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder={data}
          />
        </div>

        <div className="edit-title-footer">
          <button onClick={closeHandler} className="btn cancel">
            Cancel
          </button>
          <button
            onClick={() => {
              if (value) {
                changeHandler(value);
              }
            }}
            className="btn delete"
            disabled={!(data === value)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
