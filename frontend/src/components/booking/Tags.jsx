import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

export default function Tags() {
  const [tags, setTags] = useState(["tag1", "$tag2"]);
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      setTags((prev) => {
        return [...prev, value];
      });
      setValue("");
    }
  };

  const deleteHandler = (e) => {
    const updatedTags = tags.filter((_, i) => i !== e);
    setTags(updatedTags);
  };

  return (
    <form onSubmit={submitHandler} action="/">
      <div className="form-group tags">
        <label htmlFor="tag">Tag</label>
        <div className="form-group-wrp">
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            type="text"
          />
          <button className="icon" onClick={() => {}}>
            <BiPlus />
          </button>
          {tags.map((d, i) => (
            <span className={(d[0] === "$" && "border") || ""} key={i}>
              {d.replace("$", "")}
              <button onClick={(e) => deleteHandler(i)}>
                <GrClose />
              </button>
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}
