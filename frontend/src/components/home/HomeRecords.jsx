import Modules from "./Modules";
import Performance from "./Performance";
import Quotes from "./Quotes";

export default function HomeRecords() {
  return (
    <div className="home-records">
      <Modules />
      <Quotes />
      <Performance />
    </div>
  );
}
