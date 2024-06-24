import AnimateValue from "../basic/AnimateValue";
import Select from "../basic/Select";
import Metter from "./Metter";
import RecordsTop from "./RecordsTop";

export default function Performance() {
  return (
    <div className="performance home-records-item">
      <RecordsTop
        data={{
          name: "Module Performance",
        }}
      />

      <div className="performance-body">
        <strong>Select Module</strong>
        <Select data={["Module 02", "Module 01"]} />
        <Metter />
      </div>
      <div className="performance-footer">
        <div className="performance-footer-item">
          <span>Total Request</span>
          <AnimateValue data={1223} />
        </div>
        <div className="performance-footer-item">
          <span>Confirmed Request</span>
          <AnimateValue data={985} />
        </div>
      </div>
    </div>
  );
}
