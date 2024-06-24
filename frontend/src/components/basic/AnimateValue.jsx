import { useEffect, useState } from "react";

export default function AnimateValue({ data }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value !== data && data > value) {
        if (data > 1000) {
          if (value >= data - 100) {
            setValue(data);
          } else {
            setValue(value + 100);
          }
        } else if (data > 100) {
          if (value >= data - 10) {
            setValue(data);
          } else {
            setValue(value + 10);
          }
        } else {
          setValue(value + 1);
        }
      } else {
        setValue(data);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  });
  return <strong>{value}</strong>;
}
