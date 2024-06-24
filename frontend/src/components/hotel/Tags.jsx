import { useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";

export default function Tags() {
  const [tags, setTags] = useState([
    {
      text: "B&B",
      icon: <BsFillBuildingsFill />,
    },
    {
      text: "150m from the sea",
      icon: <BsFillBuildingsFill />,
    },
    {
      text: "Swimming pool",
      icon: <BsFillBuildingsFill />,
    },
    {
      text: "Spa",
      icon: <BsFillBuildingsFill />,
    },
    {
      text: "Bar",
      icon: <BsFillBuildingsFill />,
    },
  ]);
  return (
    <ul className="tags">
      {tags.map((d, i) => (
        <li key={i}>
          {d.icon} {d.text}
        </li>
      ))}
    </ul>
  );
}
