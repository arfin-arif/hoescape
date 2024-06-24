import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateValue from "../basic/AnimateValue";
import CompareModules from "./CompareModules";
import Progress from "./Progress";
import RecordsTop from "./RecordsTop";

export default function Modules() {
  const [data, setData] = useState([
    {
      name: "Eden",
      value: 1938,
    },
    {
      name: "Carlo Magno",
      value: 976,
    },
    {
      name: "Eden Park",
      value: 823,
    },
    {
      name: "Park Hotel Carlo",
      value: 751,
    },
    {
      name: "Bellevue",
      value: 659,
    },
    {
      name: "Bellevue 1",
      value: 1200,
    },
  ]);

  const [isCompare, setIsCompare] = useState(false);

  return (
    <div className="modules home-records-item">
      <RecordsTop
        data={{
          name: "Top Modules",
          text: "This data was collected from last 30 days",
        }}
      />

      <ul className="modules-body">
        {data.map((d, i) => (
          <li key={i}>
            <p>
              {d.name}
              <AnimateValue data={d.value} />
            </p>

            <Progress data={d.value} />
          </li>
        ))}
      </ul>
      <div className="modules-bottom">
        <Link onClick={() => setIsCompare(true)} to="/">
          <div className="icon"></div>
          <span>Compare module</span>
        </Link>
      </div>

      {isCompare && <CompareModules setIsCompare={setIsCompare} />}
    </div>
  );
}
