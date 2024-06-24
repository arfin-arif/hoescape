import { useEffect, useState } from "react";

export default function Progress({ data }) {
  const [wd, setWd] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wd < data) {
        setWd(wd + 1);
      }
    }, 1);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      style={{
        width: `${(wd / 2000) * 100}%`,
      }}
      className="progress"
    ></div>
  );
}
