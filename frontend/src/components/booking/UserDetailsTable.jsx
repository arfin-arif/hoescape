import moment from "moment";
import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import Input from "./Input";

export default function UserDetailsTable({ data }) {
  const [th, setTh] = useState([
    "ID",
    "Date",
    "Citta",
    "Trasporto",
    "Tipi di Camera",
    "Periodo Soggiorno",
  ]);

  const [td, setTd] = useState([
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
    {
      id: 2036,
      date: new Date(),
      citta: "Capri",
      trasporto: "Bus",
      tipi: "3 Adults, 1 Children",
      periodo: "7 notti €520 per persona | 495",
      dateline: "27 July - 03 Aug ",
    },
  ]);

  const [isQuateDetails, setIsQuateDetails] = useState(false);
  const [index, setIndex] = useState(false);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {th.map((d) => (
              <th key={d}>
                <div className="inner">
                  <span>{d}</span>
                  <div className="icon">
                    <GoTriangleUp />
                    <GoTriangleDown />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {td.map((d, i) => (
            <tr key={i}>
              <td>
                <Input data={{ value: d.id }} />
              </td>

              <td>
                <div className="inner">
                  <strong>{moment(d.date).format("MMM DD, YY")}</strong>{" "}
                  <span>{moment(d.date).format("h: MM a")}</span>
                </div>
              </td>
              <td>
                <Input data={{ value: d.citta }} />
              </td>
              <td>
                <Input data={{ value: d.trasporto }} />
              </td>
              <td className="user-table">
                <Input data={{ value: d.tipi }} />
              </td>
              <td>
                <div className="inner">
                  <strong>{d.periodo}</strong>
                  <span>{d.dateline}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
