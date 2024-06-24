import moment from "moment";
import { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import { FaPercentage, FaUserAlt } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import PopupTitle from "../basic/PopupTitle";
import Select from "../basic/Select";
import CopyLink from "./CopyLink";
import HotelSuggest from "./HotelSuggest";
import Input from "./Input";
import SendBtn from "./SendBtn";
import SendMessage from "./SendMessage";
import Tags from "./Tags";
import TimeSlot from "./TimeSlot";
import UserDetails from "./UserDetails";

export default function QuoteDetails({ isDetails, handler, isIndex, isUser }) {
  const date = new Date();
  const [isUserDetails, setIsUserDetails] = useState(false);
  const [isSuggest, setIsSuggest] = useState(false);

  const [formInfo, setFormInfo] = useState([
    {
      label: "First Name",
      value: "Connie",
    },
    {
      label: "Surname",
      value: "Murray",
    },
    {
      label: "email",
      value: "patrizgasalci.arni61@gmail.com",
    },
    {
      label: "Phone Number",
      value: "+1 (234) 567 - 891",
      country: true,
    },
  ]);

  const [options, setOptions] = useState([
    {
      name: "Trasporto Option 1",
      op: ["Bus + Bus", "Bus", "Trin"],
    },
    {
      name: "Fare",
      value: "$20",
    },
    {
      name: "Trasporto Option 2",
      op: ["Bus + Bus", "Bus", "Trin"],
    },
    {
      name: "Fare",
      value: "$15",
    },
  ]);

  const final = useRef(null);

  return (
    <div className={`details ${(isDetails && "show") || ""}`}>
      <div className="details-wrp">
        <div className="details-head">
          <div className="details-head-top">
            <div className="details-head-top-left">
              <button onClick={() => handler(false)}>
                <FaCircleChevronRight />
              </button>
              <h4>ID #2036</h4>
              <span className="quote">
                <BsQuestionLg />
                Waiting for Quote
              </span>
            </div>
            <div className="details-head-top-left">
              <button
                onClick={() => {
                  handler(false);
                }}
              >
                <GrClose />
              </button>
            </div>
          </div>
          <div className="details-head-bottom">
            <p>
              {" "}
              Request Date : <span>{moment(date).format("MMM DD, YY")} </span>
              {moment(date).format("hh:mm a")}
            </p>
          </div>
        </div>

        <CopyLink />

        <div className="details-body">
          <form onSubmit={(e) => e.preventDefault()} className="form" action="">
            <div className="title-btn">
              <PopupTitle title="General Information" />
              {isUser && (
                <>
                  {" "}
                  <button onClick={() => setIsUserDetails(true)}>
                    <FaUserAlt />
                  </button>
                  <UserDetails
                    isDetails={isUserDetails}
                    isIndex={isIndex}
                    handler={setIsUserDetails}
                    quate={false}
                  />
                </>
              )}
            </div>
            <div className="form-body">
              {formInfo.map((item, i) => (
                <div key={i} className="form-group">
                  {(item.country && (
                    <>
                      <label htmlFor={i}>{item.label}</label>{" "}
                      <div className="form-group-wrp">
                        <Select data={["🇱🇷", "🇧🇩", "🇸🇳"]} />
                        <Input data={{ value: item.value, i }} />
                      </div>
                    </>
                  )) || (
                    <>
                      {" "}
                      <label htmlFor={i}>{item.label}</label>
                      <Input data={{ value: item.value, isIndex, i }} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </form>
          <SendMessage
            data={{
              text: " sadjflk asjdf alskf l;asjdflkjasdlkf asdjf asjd flkjasdfj sdf skdj",
            }}
          />

          <Tags />
        </div>

        <div className="details-body">
          <PopupTitle title="Trip Details" />
          <form onSubmit={(e) => e.preventDefault()} className="form">
            <div className="form-body">
              <div className="form-group">
                <label htmlFor="cirra">Citta</label>
                <Input
                  data={{
                    value: "Caserta",
                    i: 232,
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Periodo">Periodo Soggiorno</label>
                <Input
                  data={{
                    value: "27 July - 03 Aug - 7 notti €520 per persona | 495",
                    i: 12,
                  }}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="details-body ">
          <div className="option">
            <div className="option-left">
              {options.map((d, i) => (
                <div key={i} className="option-left-item">
                  <span>{d.name}</span>
                  {(d.op && <Select data={d.op} />) ||
                    (d.value && <Input data={{ value: d.value, i }} />)}
                </div>
              ))}
            </div>
            <div className="option-right">
              <TimeSlot
                data={{
                  name: "1",
                  times: [
                    "7:00 PM",
                    "7:30 PM",
                    "8:00 PM",
                    "9:00 PM",
                    "9:00 PM",
                    "9:00 PM",
                    "9:00 PM",
                  ],
                }}
              />
              <TimeSlot
                data={{
                  name: "2",
                  times: ["6:00 PM", "6:30 PM", "7:00 PM", "9:00 PM"],
                }}
              />
            </div>
          </div>

          <div className="add-option">
            <button>
              <span>
                <AiOutlinePlus />
              </span>{" "}
              Add More Trasporto Option{" "}
            </button>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </div>

        <div className="details-hotel">
          <PopupTitle title="Selected Hotel" />
          <div
            onClick={(e) => {
              if (final.current && !final.current.contains(e.target))
                setIsSuggest(!isSuggest);
            }}
            className={`details-hotel-body ${(isSuggest && "hide") || ""}`}
          >
            <div className="details-hotel-body-top">
              <div className="left">
                <div className="icon">
                  <HiLocationMarker />
                </div>
                <div className="info">
                  <h4>
                    San Pierro di Positano <span>Suite</span>{" "}
                  </h4>
                  <p>3 Rooms, 2 bathroom, 1 swimming pool</p>
                </div>
              </div>
              <div className="right">
                <label htmlFor="price">Final Quote</label>
                <div className="right-input">
                  <Select data={["$", "€"]} />
                  <input
                    ref={final}
                    id="peice"
                    type="number"
                    value={"1600"}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="details-hotel-body-bottom">
              <p>
                <div className="icon">
                  <FaPercentage />
                </div>
                10% Discount Applied
              </p>

              <button onClick={() => {}}>
                <BiDotsVerticalRounded />
              </button>
            </div>
          </div>
        </div>
        <HotelSuggest isSuggest={isSuggest} setIsSuggest={setIsSuggest} />
        <div className="details-footer">
          <div className="details-footer-item"></div>{" "}
          <div className="details-footer-item">
            <SendBtn data={{ send: "Send Quote", sent: "Quote Sent" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
