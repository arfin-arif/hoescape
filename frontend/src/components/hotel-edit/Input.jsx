export default function Input({ d, i, handler }) {
  return (
    <input
      type="text"
      value={d.value}
      onChange={(e) => handler(e.target.value)}
      placeholder={d.label}
      id={i}
    />
  );
}
