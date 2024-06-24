import { useState } from "react";
import Button from "../basic/Button";
import ExportBtn from "../basic/ExportBtn";
import Filters from "../basic/Filters";
import Title from "../basic/Title";
import BookingMneu from "../booking/BookingMenu";
import Pagenation from "../booking/Pagenation";
import AddModule from "../module/AddModule";
import TransportBody from "../transport/TransportBody";

export default function Transport() {
  const menus = [{ name: "All" }, { name: "Recently Added" }];

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
          <TransportBody />
          <Pagenation isbrns={true} />
        </div>
      </div>
    </div>
  );
}
