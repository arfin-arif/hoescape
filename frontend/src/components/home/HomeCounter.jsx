import { useEffect, useState } from "react";
import { BsFillCalendar2Fill, BsPercent } from "react-icons/bs";
import {
  HiCurrencyDollar,
  HiTrendingDown,
  HiTrendingUp,
  HiUser,
} from "react-icons/hi";
import AnimateValue from "../basic/AnimateValue";

export default function HomeCounter() {
  const [data, setData] = useState([
    {
      name: "No of midule requested",
      icon: <BsFillCalendar2Fill />,
      value: 1203,
      symble1: "",
      symble2: "",
      up: true,
      upValue: 1.32,
      dateLine: "Last 7 days",
    },
    {
      name: "Total Amount Requested",
      icon: <HiUser />,
      value: 9.8,
      symble1: "€",
      symble2: "K",
      up: true,
      upValue: 0.32,
      dateLine: "Last 7 days",
    },
    {
      name: "Confirmed Request",
      icon: <HiCurrencyDollar />,
      value: 72,
      symble2: "%",
      up: false,
      upValue: 0.58,
      dateLine: "Last 7 days",
    },
    {
      name: "Unconfirmed Amount",
      icon: <BsPercent />,
      value: 2.9,
      symble1: "€",
      symble2: "K",
      up: true,
      upValue: 0.62,
      dateLine: "Last 7 days",
    },
  ]);

  const Value = ({ data }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (value < data.value) {
          if (data.value > 100) {
            if (value > data.value - 20) {
              setValue(data.value);
            } else {
              setValue(value + 20);
            }
          } else {
            setValue(value + 1);
          }
        }
      }, 10);

      return () => {
        clearInterval(interval);
      };
    });
    return (
      <strong>
        {data?.symble1}
        {value}
        {data?.symble2}
      </strong>
    );
  };

  return (
    <div className="home-counter">
      {data.map((d, i) => (
        <div key={i} className="home-counter-item">
          <div
            className={`home-counter-item-top ${
              (i === 1 && "purple") ||
              (i === 2 && "l-purple") ||
              (i === 3 && "yallow") ||
              ""
            }`}
          >
            <div className="icon">{d.icon}</div>

            <span>{d.name}</span>
          </div>
          <div className="home-counter-item-mid">
            <strong>{d.symble1}</strong>
            <AnimateValue data={d.value} />
            <strong>{d.symble2}</strong>
          </div>
          <div className="home-counter-item-bottom">
            <p className={(!d.up && "red") || ""}>
              {" "}
              {(d.up && <HiTrendingUp />) || <HiTrendingDown />}
              {d.upValue}%
            </p>
            <span>{d.dateLine}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
