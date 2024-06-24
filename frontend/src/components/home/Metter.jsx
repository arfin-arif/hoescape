import { useEffect, useRef, useState } from "react";
import img from "../../assets/images/intigat.png";

export default function Metter() {
  const confirmd = useRef(null);
  const intigat = useRef(null);
  const [roted, setRoted] = useState(180);
  const [intigatRoted, setIntigatRoted] = useState(-110);
  const total = 1223;
  const confirm = 985;

  useEffect(() => {
    confirmd.current.style.transform = `rotate(${roted}deg) translateX(-50%)`;
    intigat.current.style.transform = `translateX(-50%) rotate(${intigatRoted}deg)`;

    const interval = setInterval(() => {
      if (roted >= 180 && roted < 180 + (total / confirm) * 100) {
        setRoted(roted + 1);
      }

      if (intigatRoted < (total / confirm) * 100 - 80) {
        setIntigatRoted(intigatRoted + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="metter">
      <div ref={confirmd} className="metter-confirmd"></div>
      <div className="metter-inner"></div>
      <div className="metter-border"></div>
      <div ref={intigat} className="metter-intigator">
        <img src={img} alt="" />
        <div className="metter-intigator-inner"></div>
      </div>
    </div>
  );
}
