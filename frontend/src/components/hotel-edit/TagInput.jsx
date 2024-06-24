import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function TagInput({ data, handler }) {
  const [active, setActive] = useState([data[0].name, data[3].name]);
  const [isInput, setIsInput] = useState(false);
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handler((prev) => {
      return [...prev, { name: value }];
    });
    setActive((prev) => {
      return [...prev, value];
    });
    setValue("");
    setIsInput(false);
  };
  console.log("value", value);
  return (
    <ul className="tag-input">
      {data.map((d, i) => (
        <li
          onClick={() => {
            if (!active.includes(d.name)) {
              setActive((prev) => {
                return [...prev, d.name];
              });
            } else {
              const updatedItems = active.filter((item) => item !== d.name);
              setActive(updatedItems);
            }
          }}
          className={(active.includes(d.name) && "active") || ""}
          key={i}
        >
          {d.icon}
          {d.name}
        </li>
      ))}
      {(!isInput && (
        <button onClick={() => setIsInput(true)}>
          <AiOutlinePlus />
          Add More
        </button>
      )) || (
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            type="text"
          />
        </form>
      )}
    </ul>
  );
}
