import { HiOutlineDownload } from "react-icons/hi";

export default function ExportBtn({ text = "Generate Report", handler }) {
  return (
    <button onClick={handler} className="export-btn">
      <HiOutlineDownload />
      <span>{text}</span>
    </button>
  );
}
