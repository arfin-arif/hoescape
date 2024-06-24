import { useState } from "react";
import Button from "../basic/Button";
import ExportBtn from "../basic/ExportBtn";
import Filters from "../basic/Filters";
import Title from "../basic/Title";
import BookingMneu from "../booking/BookingMenu";
import Pagenation from "../booking/Pagenation";
import AddModule from "../module/AddModule";
import ModuleTable from "../module/ModuleTable";

export default function Modules() {
  const menus = [
    { name: "All" },
    { name: "Crcently Added" },
    { name: "Archived" },
    { name: "Deleted" },
  ];
  const [isDetails, setIsDetails] = useState(false);
  const [isIndex, setIsIndex] = useState(false);

  const [addModule, setAddModule] = useState(false);
  return (
    <div className="module hotel">
      <AddModule handler={setAddModule} addhotel={addModule} />
      <div className="container">
        <div className="booking-box">
          <div className="hotel-top">
            <div className="hotel-top-left">
              <Title title="Hotel Lish" />
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
            <div className="hotel-top-right">
              <ExportBtn />
              <Button handler={setAddModule} text="Add New Hotel" />
            </div>
          </div>
          <BookingMneu menus={menus} />
          <Filters />
          <div className="module-table-wrp">
            <ModuleTable
              data={{
                detailsHandler: setIsDetails,
                isIndex: isIndex,
                setIsIndex,
                isDetails,
              }}
            />
          </div>

          <Pagenation />
        </div>
      </div>
    </div>
  );
}
