import { BiSolidLocationPlus } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TransportBody() {
  const Item = () => {
    return (
      <div className="item">
        <div className="item-top">
          <div className="content">
            <strong>Edino v3</strong>
            <span>13 July - 03 August 2023</span>
          </div>

          <Link to="/">View Details</Link>
        </div>
        <div className="item-bottom">
          <span>
            <FaCarSide /> Train + Bus
          </span>
          <span>
            <BiSolidLocationPlus /> Campo Santa Maria Del Giglio, 2467, 30124
            Venezia VE
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className="transport-body">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
