import { useState } from "react";
import { ImGlass } from "react-icons/im";
import { LuEdit } from "react-icons/lu";
import img1 from "../../assets/images/create.svg";
import img from "../../assets/images/discount.svg";
import AddNewOffer from "./AddNewOffer";

export default function EditOffer() {
  const [prices, setPrices] = useState([
    {
      name: "Full Board",
      price: 120,
      dateline: "per night",
    },
    {
      name: "Half Board",
      price: 90,
      dateline: "per night",
    },
    {
      name: "Bread & Breakfast",
      price: 140,
      dateline: "per night",
    },
  ]);

  const [items, setItems] = useState([1]);

  const submitHandler = () => {
    setItems((prev) => {
      return [...prev, 1];
    });
    setIsAdd(false);
  };

  const [isAdd, setIsAdd] = useState(false);
  return (
    <div className="edit-offer">
      {items.map((d, i) => (
        <div key={i} className="edit-offer-item">
          <div className="edit-offer-item-top">
            <div className="edit-offer-item-top-left">
              <img src={img} alt="" />
              <div className="content">
                <h4>Summer Offer</h4>
                <span>From 01 june - 30 August</span>
              </div>
            </div>

            <div className="edit-btn">
              <button onClick={() => setIsAdd(true)}>
                <LuEdit /> Edit
              </button>
            </div>
          </div>
          <div className="edit-offer-item-body">
            <div className="conditions">
              <h4>Conditions</h4>
              <ul className="conditions-wrp">
                <li>&#x2713; Minimum 2 Nights </li>
                <li>&#x2713; Minimum 7 Nights </li>
              </ul>
            </div>
            <div className="conditions">
              <h4>
                <ImGlass />
                Beverage Included
              </h4>
            </div>

            <div className="price">
              <h4>Price</h4>
              <ul className="price-items">
                {prices.map((d, i) => (
                  <li key={i}>
                    <p>{d.name}</p>
                    <strong>
                      ${d.price} <span>/{d.dateline}</span>
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <AddNewOffer
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        submitHandler={submitHandler}
      />
      <button onClick={() => setIsAdd(true)} className="edit-offer-item">
        <img src={img1} alt="" />
        <h4>Create New Offer</h4>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
      </button>
    </div>
  );
}
