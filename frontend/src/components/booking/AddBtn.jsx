import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import QuoteDetailsForm from "./QuateDetailsForm";
import UserDetailsFrom from "./UserDetailsFrom";

export default function AddBtn({ activePage }) {
  const [isDr, setIsDr] = useState(false);

  return (
    <div className="add-btn">
      <button onClick={() => setIsDr(!isDr)}>
        <BiPlus />
        <span>Add</span>
      </button>
      {(activePage === "booking" && (
        <QuoteDetailsForm isDetails={isDr} handler={setIsDr} />
      )) ||
        (activePage === "user" && (
          <UserDetailsFrom isDetails={isDr} handler={setIsDr} />
        ))}
    </div>
  );
}
