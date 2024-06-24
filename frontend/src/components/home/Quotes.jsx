import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/profile.png";
import AnimateValue from "../basic/AnimateValue";
import RecordsTop from "./RecordsTop";

export default function Quotes() {
  const [data, setData] = useState([
    {
      name: "Maria Roselia",
      img,
      amout: 8231,
      request: 32,
      number: "+8801770201232",
    },
    {
      name: "Maria Roselia",
      img,
      amout: 8231,
      request: 32,
      number: "+8801770201232",
    },
    {
      name: "Maria Roselia",
      img,
      amout: 8231,
      request: 32,
      number: "+8801770201232",
    },
    {
      name: "Maria Roselia",
      img,
      amout: 8231,
      request: 32,
      number: "+8801770201232",
    },
  ]);

  return (
    <div className="quotes home-records-item">
      <RecordsTop
        data={{
          name: "Top Quotes",
          text: "This data was collected from last 30 days",
        }}
      />

      <ul className="quotes-body">
        {data.map((d, i) => (
          <li key={i}>
            <div className="top">
              <div className="left">
                <div className="img">
                  <img src={d.img} alt="" />
                </div>
                <strong>{d.name}</strong>
              </div>
              {/* <div className="right">
                <Link to={d.number}>
                  <MdCall />
                </Link>
                <Link to="/">
                  <MdOutlineMail />
                </Link>
              </div> */}
            </div>
            <div className="bottom">
              <div className="left">
                <span>Total amoutn:</span>
                <AnimateValue data={d.amout} />
              </div>
              <div className="separator"></div>
              <div className="right">
                <span>No. of Request:</span>
                <AnimateValue data={d.request} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Link className="quotes-btn" to="booking">
        View All
      </Link>
    </div>
  );
}
