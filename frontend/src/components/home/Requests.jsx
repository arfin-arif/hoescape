import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateValue from "../basic/AnimateValue";
import Select from "../basic/Select";
import RecordsTop from "./RecordsTop";

export default function Requests() {
  const [data, setData] = useState([
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
    {
      name: "Carlo Magno",
      amout: 480,
      text: "Hotel 4 stelle 7 notti",
    },
  ]);
  return (
    <div className="home-btm-item requests">
      <RecordsTop
        data={{
          name: "Latest Request",
          text: "This data was collected 30min ago",
        }}
      />

      <div className="requests-body">
        <div className="requests-body-top">
          <Select data={["module", "Performance"]} />
          <Select data={["Amount", "Date"]} />
        </div>
        <ul className="requests-body-main">
          {data.map((d, i) => (
            <li key={i}>
              <div className="left">
                <strong>{d.name}</strong>
                <span>{d.text}</span>
              </div>
              <div className="right">
                <strong>
                  €<AnimateValue data={d.amout} />
                </strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">View All</Link>
    </div>
  );
}
