import moment from "moment";
import { useState } from "react";
import { BsQuestionLg } from "react-icons/bs";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import values from "../../../values";
import PopupTitle from "../basic/PopupTitle";
import Select from "../basic/Select";
import Input from "./Input";
import Pagenation from "./Pagenation";
import QuoteDetails from "./QuoteDetails";
import Table from "./Table";
import Tags from "./Tags";

export default function UserDetails({ isDetails, handler, quate }) {
  const date = new Date();
  const [isIndex, setIsIndex] = useState(null);
  const [tags, setTags] = useState(["tag1", "tag2"]);
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

  const [isQuate, setIsQuate] = useState(false);

  return (
    <div className={`details user-details ${(isDetails && "show") || ""}`}>
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

        <div className="details-body">
          <form onSubmit={(e) => e.preventDefault()} className="form" action="">
            <PopupTitle title="User Details" />
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
          <Tags />
        </div>

        <div className="details-bottom">
          <PopupTitle title="Quote Requested" />
          <div className="details-bottom-table">
            <>
              {" "}
              <Table
                data={{
                  th: values.requestTH,
                  detailsHandler: setIsQuate,
                  isIndex: isIndex,
                  setIsIndex,
                  isQuate,
                }}
              />
            </>
          </div>
          <Pagenation />
        </div>
      </div>

      <QuoteDetails
        isDetails={isQuate}
        isIndex={isIndex}
        handler={setIsQuate}
        isUser={false}
      />
    </div>
  );
}
