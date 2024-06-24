import { useEffect, useRef, useState } from "react";
import SendBtn from "./SendBtn";

export default function SendMessage({ data }) {
  const [isSend, setIsSend] = useState(false);
  const ref = useRef(null);
  const [row, setRow] = useState(1);
  const [value, setValue] = useState(data.text);

  useEffect(() => {
    if (isSend) {
      setTimeout(() => {
        ref.current.style.opacity = "0";
      }, 2500);
      setTimeout(() => {
        setIsSend(false);
        ref.current.style.opacity = "1";
      }, 3000);
    }
  }, [isSend]);

  useEffect(() => {
    if ((value.match(/\n/g) || []).length >= 0) {
      setRow((value.match(/\n/g) || []).length + 1);
    }
  }, [value]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setIsSend(true);
      }}
      className="form send-message"
      action=""
    >
      <div className="form-body">
        <div className="form-group">
          <label htmlFor="textaria"> nvia Messaggio</label>
          <textarea
            onChange={(e) => {
              setValue(e.target.value);
            }}
            name=""
            id="textaria"
            cols="30"
            rows={row}
            value={value}
          ></textarea>
        </div>

        <div className="form-group send">
          <SendBtn data={{ send: "Send Message", sent: "Message Sent" }} />
        </div>
      </div>
    </form>
  );
}
