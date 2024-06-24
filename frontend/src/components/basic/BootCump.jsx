import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Bootcump({ data }) {
  return (
    <ul className="bootcump">
      {data.map((d, i) => (
        <li className="bootcump-item" key={i}>
          {(d.url && (
            <Link to={d.url}>
              {d.icon} {d.name}
            </Link>
          )) || <span>{d.name}</span>}
          {d.url && <FaAngleRight />}
        </li>
      ))}
    </ul>
  );
}
