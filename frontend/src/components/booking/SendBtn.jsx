import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";

export default function SendBtn({ data }) {
  const [isSend, setIsSend] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        ref.current.style.opacity = "0";
      }, 2500);
      setTimeout(() => {
        setIsSend(false);
        ref.current.style.opacity = "1";
      }, 3000);
    }
  }, [isSend]);

  return (
    <button
      className={`sendbtn ${(isSend && "animat") || "no"}`}
      onClick={() => {
        setIsSend(true);
      }}
    >
      <span ref={ref}>
        {(isSend && data.sent) || data.send}
        <div className="icon">
          <IoSend />
        </div>
      </span>
    </button>
  );
}
