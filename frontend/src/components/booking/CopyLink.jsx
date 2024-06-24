import { useEffect, useRef, useState } from "react";
import { BiCopy } from "react-icons/bi";

export default function CopyLink() {
  const [link, setLink] = useState("https://ischia.com/form/2sk9824hfjho34");
  const [isCopy, setIsCopy] = useState(false);
  const ref = useRef(null);
  const handelCopy = () => {
    setIsCopy(true);

    if (ref.current) {
      // Make the <span> element editable
      ref.current.contentEditable = "true";

      // Select the text inside the <span> element
      const range = document.createRange();
      range.selectNode(ref.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Copy the selected text to the clipboard
      document.execCommand("copy");

      // Reset the contentEditable attribute after copying (optional)
      ref.current.contentEditable = "false";
      window.getSelection().removeAllRanges();
    }
  };

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    }
  }, [isCopy]);
  return (
    <div className="copy-link">
      <div className="copy-link-left">
        <a href={link} target="blank">
          Link:{" "}
        </a>
        <span ref={ref}>{link}</span>
      </div>
      <div className="copy-link-right">
        <button className={(!isCopy && "active") || ""} onClick={handelCopy}>
          <BiCopy /> <span>Copy Link</span>{" "}
        </button>
        <span className={`coped ${(isCopy && "active") || ""}`}>
          {" "}
          link coped!
        </span>
      </div>
    </div>
  );
}
