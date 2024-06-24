import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

export default function OfferTags({ isTagEdit = true }) {
  const [tags, setTags] = useState([
    "Hotel",
    "Half Board",
    "B&B",
    "new",
    "Beverage",
  ]);

  const [isInput, setIsInput] = useState();
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setTags((prev) => {
      return [...prev, value];
    });
    setValue("");
    setIsInput(false);
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <ul className="offer-tags">
      {tags.map((d, i) => (
        <li key={i}>
          {d}{" "}
          {isTagEdit && (
            <button onClick={() => handleRemoveTag(d)} className="close">
              <GrFormClose />
            </button>
          )}
        </li>
      ))}
      {isTagEdit && (
        <li className="new">
          {(!isInput && (
            <button onClick={() => setIsInput(true)}>
              <BiPlus />
              New tag
            </button>
          )) || (
            <form onSubmit={submitHandler}>
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="text"
              />
            </form>
          )}
        </li>
      )}
    </ul>
  );
}
