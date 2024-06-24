import Select from "../basic/Select";
import Input from "./Input";

export default function Breakdown({ data, handler }) {
  return (
    <div className="item">
      <label htmlFor="">{data.label}</label>

      {(data.input && (
        <div className="inner">
          <Select data={data.items} />
          <Input
            handler={(e) => handler(e)}
            d={{ value: data.value || 0, label: "Enter price" }}
          />
        </div>
      )) || <Select data={data.items} />}
      {}
    </div>
  );
}
