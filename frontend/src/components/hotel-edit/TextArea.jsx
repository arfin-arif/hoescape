export default function TextArea({ d, i, handler }) {
  return (
    <textarea
      // value={d.value}
      // onChange={(e) => handler(e.target.value)}
      // placeholder={d.label}
      id={i}
      name=""
    ></textarea>
  );
}
