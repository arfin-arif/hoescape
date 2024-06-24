import { useState } from "react";

export default function Description({ description, title, max }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const maxWords = max || 50;
  const truncatedDescription = description
    .split(" ")
    .slice(0, maxWords)
    .join(" ");

  return (
    <div className=" description">
      {title && <h4>{title}</h4>}
      <p> {showFullDescription ? description : truncatedDescription + "..."}</p>
      <button onClick={() => setShowFullDescription(!showFullDescription)}>
        {(showFullDescription && "Show less") || "Show more"}
      </button>
    </div>
  );
}
