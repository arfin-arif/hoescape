import { BsInfoCircle } from "react-icons/bs";

export default function RecordsTop({ data = {} }) {
  return (
    <div className="records-top">
      <div className="tp">
        <h3>{data.name}</h3>
        <div className="icon">
          <BsInfoCircle />

          <div className="info">
            <span>
              This is i buttonis is i buttonis is i buttonis is i button
            </span>
            <span>This is i button</span>
            <span>This is i button</span>
            <span>This is i button</span>
          </div>
        </div>
      </div>
      {data.text && <p>{data.text}</p>}
    </div>
  );
}
