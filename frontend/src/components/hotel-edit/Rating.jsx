import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating({ active, setActive }) {
  return (
    <ul className="hotel-details-form-rating-wrp">
      {Array.from({ length: 5 }, (d, i) => (
        <li
          onClick={() => setActive(i + 1)}
          className={(i + 1 <= active && "active") || ""}
          key={i}
        >
          {(!(i + 1 <= active) && <AiOutlineStar />) || <AiFillStar />}
        </li>
      ))}
    </ul>
  );
}
