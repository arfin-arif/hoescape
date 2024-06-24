import { useEffect, useRef, useState } from "react";
import { BiSearch, BiSolidOffer } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { ImGlass } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Description from "../hotel/Description";
import OfferTags from "../hotel/OfferTags";

export default function ImportTemplate({ handler, addhotel }) {
  const navigate = useNavigate();

  const ref = useRef(null);
  const wrp = useRef(null);

  const createHandler = () => {
    handler(false);
  };

  useEffect(() => {
    wrp.current.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(false);
      }
    });
  });

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Ceneral Template",
    },
    {
      id: 2,
      name: "General Template - Modificed",
    },
    {
      id: 3,
      name: "General Template - Modificed",
    },
    {
      id: 4,
      name: "Ceneral Template",
    },
  ]);
  const [offers, setOffers] = useState([
    {
      id: 1,
      name: "HoEscape Offer",
    },
    {
      id: 2,
      name: "HoEscape Offer",
    },
    {
      id: 3,
      name: "HoEscape Offer",
    },
    {
      id: 4,
      name: "HoEscape Offer",
    },
  ]);

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
  const description =
    "Offering a private beach, fitness centre and a Michelin-starred restaurant, Il San Pietro di Positano is located in Positano. This luxurious 5-star hotel features elegantly furnished rooms with a terrace and sea views.Offering a private beach, fitness centre and a Michelin-starred restaurant, Il San Pietro di Positano is located in Positano. This luxurious 5-star hotel features elegantly furnished rooms with a terrace and sea views.Offering a private beach, fitness centre and a Michelin-starred restaurant, Il San Pietro di Positano is located in Positano. This luxurious 5-star hotel features elegantly furnished rooms with a terrace and sea views.";

  const [isOffer, setIsOffer] = useState(true);
  const [activeID, setActiveId] = useState(null);
  const [istoggle, setIsToggle] = useState(null);

  return (
    <div
      ref={wrp}
      className={`add-hotel ${(addhotel && "show") || ""} module-template ${
        isOffer && "offer"
      }`}
    >
      <div ref={ref} className="add-hotel-inner">
        <div className="add-hotel-top">
          <span>
            {(isOffer && <BiSolidOffer />) || <BsFillBuildingsFill />}
          </span>
          <button onClick={() => handler(false)} className="close">
            <IoClose />
          </button>
        </div>

        <div className="add-hotel-body">
          <h4>{(isOffer && "Select Offer") || "Select Hotel"}</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text
          </p>
          <div className="module-template-search">
            <label htmlFor="search">
              <BiSearch />
            </label>
            <input type="text" placeholder="Search" id="search" />
            <button className="btn">Search</button>
          </div>
          <div
            className={`module-template-items max ${(isOffer && "hide") || ""}`}
          >
            <div className="left">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`item`}
                  onClick={() => setIsOffer(true)}
                >
                  <BsFillBuildingsFill />
                  <div className="content">
                    <h4>{item.name}</h4>
                    <p>Section 1, Section 2, Section 3</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="right">
              {offers.map((item, i) => (
                <div
                  key={i}
                  className={`item ${(activeID === item.id && "active") || ""}`}
                  onClick={() => {
                    setActiveId(item.id);
                  }}
                >
                  <div className="body">
                    <BiSolidOffer />
                    <div className="content">
                      <h4>{item.name}</h4>
                      <p>From 01 June - 30 August</p>
                    </div>
                    {(!(istoggle === item.id) && (
                      <button
                        onClick={() => {
                          setIsToggle(item.id);
                          setActiveId(null);
                        }}
                        className="btn btn-white"
                      >
                        View Details
                      </button>
                    )) || (
                      <button
                        onClick={() => setIsToggle(null)}
                        className="close"
                      >
                        <FaAngleUp />
                      </button>
                    )}
                  </div>

                  <div
                    className={`offer-item-body ${
                      (istoggle === item.id && "show") || ""
                    }`}
                  >
                    <Description description={description} max={20} />
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

                    <div className="offer-item-tags">
                      <h4>Tags</h4>
                      <OfferTags isTagEdit={false} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOffer && (
          <div className="add-hotel-footer">
            <button
              onClick={() => {
                setIsOffer(false);
                setIsToggle(null);
              }}
              className="btn cancel"
            >
              back
            </button>
            <button onClick={createHandler} className="btn">
              Select
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
