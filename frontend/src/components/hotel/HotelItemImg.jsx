import { useState } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

export default function HotelItemImg({ imas }) {
  const [trn, setTrns] = useState(0);
  return (
    <div className="img">
      {imas.map((d, i) => (
        <img
          style={{ transform: `translateX(-${trn * 100}%)` }}
          key={i}
          src={d.src}
          alt=""
        />
      ))}
      {trn > 0 && (
        <button onClick={() => setTrns(trn - 1)} className="prev">
          <LiaAngleLeftSolid />
        </button>
      )}
      {trn < imas.length - 1 && (
        <button onClick={() => setTrns(trn + 1)} className="next">
          <LiaAngleRightSolid />
        </button>
      )}
    </div>
  );
}
