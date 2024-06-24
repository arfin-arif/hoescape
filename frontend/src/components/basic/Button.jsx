import { BiPlus } from "react-icons/bi";

export default function Button({ text, handler }) {
  return (
    <button className="btn" onClick={handler}>
      <BiPlus />
      {text}
    </button>
  );
}
