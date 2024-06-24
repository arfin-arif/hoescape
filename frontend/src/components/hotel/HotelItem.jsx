import { MdLocationOn } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import Rating from "../basic/Rating";
import HotelItemImg from "./HotelItemImg";
import Offers from "./Offers";
import Tags from "./Tags";

export default function HotelItem() {
  const imas = [
    {
      src: "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_640.jpg",
    },
  ];

  return (
    <div className="hotel-item">
      <div className="hotel-item-left">
        <HotelItemImg imas={imas} />
        <div className="info">
          <div className="top">
            <Link to="/hotel/12">
              <h4>San Pietro di Positano</h4>
            </Link>

            <Rating />
          </div>
          <p>
            <span>
              <MdLocationOn /> Via Laurito, 2, 80017 Positano, Italy
            </span>

            <span className="loca">
              <RxDotFilled />
              1.7 km from centre
            </span>
          </p>
          <Tags />
          <Offers />
        </div>
      </div>
      <div className="hotel-item-right">
        <div className="hotel-item-right-top">
          <span>Starting form</span>
          <strong>$590~$5000</strong>
        </div>
        <div className="hotel-item-right-bottom">
          <Link to="/hotel/12" className="btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
