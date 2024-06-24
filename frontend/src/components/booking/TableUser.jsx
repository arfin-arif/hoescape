import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { MdCall } from "react-icons/md";
import Input from "./Input";

export default function TableUser({ data }) {
  const [isDetails, setIsDetails] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const [td, setTD] = useState([
    {
      id: 2036,
      fName: "Courtney ",
      lName: "Richards",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2037,
      fName: "Richards",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2038,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2039,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2040,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2041,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2042,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2043,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2044,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2045,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2046,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2047,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2048,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2049,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
    {
      id: 2050,
      fName: "Darlene",
      lName: "Warren",
      email: "arfin@example.com",
      phone: "(301) 580-7410",
      lastQuoteSent: new Date(),
      quoteSent: "03",
    },
  ]);

  const selectHandler = (e) => {
    setTD((prevTD) =>
      prevTD.map((item) =>
        item.id === e.id ? { ...item, select: !item.select } : item
      )
    );
  };

  const [isDel, setIsDel] = useState(false);
  const del = useRef(null);
  const tbd = useRef(null);

  const contexHandler = (e, s, id) => {
    if (s) {
      e.preventDefault();
      const top = tbd.current.getBoundingClientRect().top;
      del.current.style.top = `${e.clientY - top}px`;
      setIsDel(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (del.current && !del.current.contains(e.target)) {
        setIsDel(false);
      }
    });
  }, []);
  return (
    <table className="table table-user">
      <thead>
        <tr className="th">
          <th>#</th>
          {data?.th.map((d) => (
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
          <th>Action</th>
        </tr>
      </thead>

      <tbody ref={tbd}>
        <div ref={del} className={`buttons ${(isDel && "show") || ""}`}>
          <button>Delete</button>
        </div>
        {td.map((d, i) => (
          <tr
            key={i}
            onClick={() => {
              data.setIsIndex(i);
            }}
            className={`${(data.isIndex === i && "active") || ""}`}
          >
            <td
              onContextMenu={(e) => contexHandler(e, d.select, d.id)}
              className="selc"
              onClick={() => selectHandler(d)}
            >
              {(d.select && <BsCheckLg />) || (i < 9 && "0" + (i + 1)) || i + 1}
            </td>
            <td
              onClick={(e) => {
                if (!isFocus || !(isFocus === "id")) {
                  if (data.isIndex === i) {
                    console.log(data.isIndex);
                    data.detailsHandler(!data.isDetails);
                    e.target.blur();
                  } else {
                    data.setIsIndex(i);
                    data.detailsHandler(true);
                    e.target.blur();
                  }
                } else {
                  if (e.target.tagName !== "INPUT") {
                    if (data.isIndex === i) {
                      console.log(data.isIndex);
                      data.detailsHandler(!data.isDetails);
                      e.target.blur();
                    } else {
                      data.setIsIndex(i);
                      data.detailsHandler(true);
                      e.target.blur();
                    }
                  } else {
                    data.detailsHandler(false);
                  }
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("id");
                data.detailsHandler(false);
              }}
              className="id"
            >
              {" "}
              <Input data={{ value: d.id }} />
            </td>
            <td
              onClick={(e) => {
                if (!isFocus || !(isFocus === "fName")) {
                  if (data.isIndex === i) {
                    console.log(data.isIndex);
                    data.detailsHandler(!data.isDetails);
                    e.target.blur();
                  } else {
                    data.setIsIndex(i);
                    data.detailsHandler(true);
                    e.target.blur();
                  }
                } else {
                  if (e.target.tagName !== "INPUT") {
                    if (data.isIndex === i) {
                      console.log(data.isIndex);
                      data.detailsHandler(!data.isDetails);
                      e.target.blur();
                    } else {
                      data.setIsIndex(i);
                      data.detailsHandler(true);
                      e.target.blur();
                    }
                  } else {
                    data.detailsHandler(false);
                  }
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("fName");
                data.detailsHandler(false);
              }}
              className="user-table"
            >
              <Input data={{ value: d.fName }} />
            </td>
            <td
              onClick={(e) => {
                if (!isFocus || !(isFocus === "lName")) {
                  if (data.isIndex === i) {
                    console.log(data.isIndex);
                    data.detailsHandler(!data.isDetails);
                    e.target.blur();
                  } else {
                    data.setIsIndex(i);
                    data.detailsHandler(true);
                    e.target.blur();
                  }
                } else {
                  if (e.target.tagName !== "INPUT") {
                    if (data.isIndex === i) {
                      console.log(data.isIndex);
                      data.detailsHandler(!data.isDetails);
                      e.target.blur();
                    } else {
                      data.setIsIndex(i);
                      data.detailsHandler(true);
                      e.target.blur();
                    }
                  } else {
                    data.detailsHandler(false);
                  }
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("lName");
                data.detailsHandler(false);
              }}
            >
              {" "}
              <Input data={{ value: d.lName }} />
            </td>
            <td
              onClick={(e) => {
                if (!isFocus || !(isFocus === "email")) {
                  if (data.isIndex === i) {
                    console.log(data.isIndex);
                    data.detailsHandler(!data.isDetails);
                    e.target.blur();
                  } else {
                    data.setIsIndex(i);
                    data.detailsHandler(true);
                    e.target.blur();
                  }
                } else {
                  if (e.target.tagName !== "INPUT") {
                    if (data.isIndex === i) {
                      console.log(data.isIndex);
                      data.detailsHandler(!data.isDetails);
                      e.target.blur();
                    } else {
                      data.setIsIndex(i);
                      data.detailsHandler(true);
                      e.target.blur();
                    }
                  } else {
                    data.detailsHandler(false);
                  }
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("email");
                data.detailsHandler(false);
              }}
              className="email"
            >
              {" "}
              <Input data={{ value: d.email }} />
            </td>
            <td
              onClick={(e) => {
                if (!isFocus || !(isFocus === "phone")) {
                  if (data.isIndex === i) {
                    console.log(data.isIndex);
                    data.detailsHandler(!data.isDetails);
                    e.target.blur();
                  } else {
                    data.setIsIndex(i);
                    data.detailsHandler(true);
                    e.target.blur();
                  }
                } else {
                  if (e.target.tagName !== "INPUT") {
                    if (data.isIndex === i) {
                      console.log(data.isIndex);
                      data.detailsHandler(!data.isDetails);
                      e.target.blur();
                    } else {
                      data.setIsIndex(i);
                      data.detailsHandler(true);
                      e.target.blur();
                    }
                  } else {
                    data.detailsHandler(false);
                  }
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("phone");
                data.detailsHandler(false);
              }}
              className="phone"
            >
              <div className="in">
                <MdCall /> <Input data={{ value: d.phone }} />
              </div>
            </td>
            <td
              onClick={() => {
                if (data.isIndex === i) {
                  console.log(data.isIndex);
                  data.detailsHandler(!data.isDetails);
                } else {
                  data.setIsIndex(i);
                  data.detailsHandler(true);
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("true");
                data.detailsHandler(false);
              }}
            >
              <div className="inner">
                <strong>{moment(d.lastQuoteSent).format("MMM DD, YY")}</strong>{" "}
                <span>{moment(d.lastQuoteSent).format("h: MM a")}</span>
              </div>
            </td>
            <td
              onClick={() => {
                if (data.isIndex === i) {
                  console.log(data.isIndex);
                  data.detailsHandler(!data.isDetails);
                } else {
                  data.setIsIndex(i);
                  data.detailsHandler(true);
                }
              }}
              onDoubleClick={(e) => {
                setIsFocus("quateSend");
                data.detailsHandler(false);
              }}
            >
              {d.quoteSent}
            </td>

            <td>
              <button
                onClick={() => {
                  if (data.isIndex === i) {
                    console.log(data.isIndex);
                    data.detailsHandler(!data.isDetails);
                  } else {
                    data.setIsIndex(i);
                    data.detailsHandler(true);
                  }
                }}
              >
                View Booking Info
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
