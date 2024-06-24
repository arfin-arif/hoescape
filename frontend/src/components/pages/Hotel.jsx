import { useState } from "react";
import Button from "../basic/Button";
import ExportBtn from "../basic/ExportBtn";
import Filters from "../basic/Filters";
import Title from "../basic/Title";
import BookingMneu from "../booking/BookingMenu";
import Pagenation from "../booking/Pagenation";
import AddHotel from "../hotel/AddHotel";
import HotelItem from "../hotel/HotelItem";

export default function Hotel() {
  const [menus, setMenus] = useState([
    { name: "all" },
    { name: "Recently Added" },
  ]);
  const [items, setItems] = useState([1, 1, 1, 1, 1]);
  const [addhotel, setAddhotel] = useState(false);
  return (
    <div className="hotel">
      <AddHotel handler={setAddhotel} addhotel={addhotel} />
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
              <Button text="Add New Hotel" handler={setAddhotel} />
            </div>
          </div>
          <BookingMneu menus={menus} />
          <Filters />
          <div className="hotel-wrp">
            {items.map((item, i) => (
              <HotelItem key={i} />
            ))}
          </div>
          <Pagenation isbrns={true} />
        </div>
      </div>
    </div>
  );
}
