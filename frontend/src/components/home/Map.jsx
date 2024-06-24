import { useState } from "react";
import img from "../../assets/images/map.png";
import pin from "../../assets/images/pin.png";

export default function Map() {
  const [pins, setPins] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const Pin = ({ data }) => {
    return (
      <div className={`pin pin${data}`}>
        <div className="pin-body">
          <img src={pin} alt="" />
          <div className="pin-info">
            <div className="pin-info-top">
              <strong>Lombardia</strong>
            </div>
            <div className="pin-info-body">
              <div className="pin-info-item">
                <span>Total Amount :</span>
                <strong>€3,900</strong>
              </div>
              <div className="separator"></div>
              <div className="pin-info-item">
                <span>No. of Request </span>
                <strong>20</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="italy-map">
      <div className="italy-map-img">
        <img src={img} alt="" />

        {pins.map((d) => (
          <Pin key={d} data={d} />
        ))}
      </div>
    </div>
  );
}
