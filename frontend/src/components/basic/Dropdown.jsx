import { Link } from "react-router-dom";
import { useAuth } from "../../middleware/AuthContext";

export default function Dropdown({ data }) {
  const { logout } = useAuth();
  return (
    <ul onClick={logout} className="dropdown">
      {data.map((d, i) => (
        <li key={i}>
          <Link to={d?.url}>{d?.name}</Link>
        </li>
      ))}
    </ul>
  );
}
