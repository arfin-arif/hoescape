import { useEffect, useRef, useState } from "react";

import { GrClose } from "react-icons/gr";
import DrapDropBody from "./DragDropBody";
import Input from "./Input";

export default function DrapDrop({ isDrag, handler, addHandler }) {
  const [url, setUrl] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setUrl(value);
  }, [value]);

  const submitHandler = (img) => {
    if (img) {
      addHandler((prev) => {
        return [...prev, { src: img }];
      });
      handler(false);
      setUrl("");
      setValue("");
    }
  };

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
    <div ref={wrp} className={`drag-drop ${(isDrag && "show") || ""}`}>
      <div ref={ref} className="drag-drop-inner booking-box">
        <div className="drag-drop-top">
          <h4>Upload Image</h4>
          <button onClick={() => handler(false)}>
            <GrClose />
          </button>
        </div>
        <DrapDropBody urlSet={setUrl} />
        <div className="sep">
          <span>OR</span>
        </div>
        <div className="drag-drop-form">
          <div className="item">
            <Input
              handler={setValue}
              d={{ value: value, label: "Paster Image URL" }}
            />
            <button onClick={(e) => submitHandler(url)} className="btn">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
