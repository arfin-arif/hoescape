import { useEffect, useState } from "react";
import AnimateValue from "../basic/AnimateValue";
import DateLine from "../basic/DateLine";
import Select from "../basic/Select";

export default function CompareItem({ value }) {
  const Item = ({ data }) => {
    return (
      <div className="item">
        <div className="item-body">
          <span>{data.name1}</span>

          <strong>
            {data.value1Prev && data.value1Prev}
            <AnimateValue data={data.value1} />
            {data.value1Next && data.value1Next}
          </strong>
        </div>
        <div className="separator"></div>
        <div className="item-body">
          <span>{data.name2}</span>
          <strong>
            {data.value2Prev && data.value2Prev}
            <AnimateValue data={data.value2} />
            {data.value2Next && data.value2Next}
          </strong>
        </div>
      </div>
    );
  };

  const Progress = ({ data }) => {
    const [wd, setWd] = useState(1);
    useEffect(() => {
      const interval = setInterval(() => {
        if (wd < data) {
          setWd(wd + 1);
        }
      }, 1);

      return () => {
        clearInterval(interval);
      };
    });

    return (
      <div
        style={{
          width: `${(wd / 2000) * 100}%`,
        }}
        className="progress"
      ></div>
    );
  };
  return (
    <div className="compare-item">
      <div className="compare-item-top">
        <div className="top">
          <p>Select Modules</p>
          <DateLine data={["tutte", "tutte 1"]} defaultText="Adv:" />
        </div>

        <Select data={["Eden e Tirrenia", "Bellevue"]} />
      </div>
      <div className="compare-item-body">
        <Item
          data={{
            name1: "Total No. of Request",
            value1: 302,
            name2: "Confirmed Request",
            value2: 217,
          }}
        />
        <Item
          data={{
            name1: "Total Amount Requested",
            value1: 52.8,
            value1Prev: "$",
            value1Next: "k",
            name2: "Avg. Request Amount",
            value2: 1.5,
            value2Next: "k",
          }}
        />
        <Item
          data={{
            name1: "Conversion Rate",
            value1: 87,
            value1Next: "%",
            name2: "Avg amount earned",
            value2: 3.2,
            value2Next: "k",
            value2Prev: "$",
          }}
        />

        <div className="item item-progress">
          <div className="item-top">
            <p>Overall Score</p>
            <AnimateValue data={value} />
          </div>
          <div className="progress-bar">
            <Progress data={value} />
          </div>
        </div>
      </div>
    </div>
  );
}
