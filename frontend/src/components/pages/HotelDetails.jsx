import { useState } from "react";
import { BsFillBuildingsFill, BsPlusLg } from "react-icons/bs";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiSightDisabled } from "react-icons/gi";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Bootcump from "../basic/BootCump";
import Rating from "../basic/Rating";
import Search from "../basic/Search";
import Title from "../basic/Title";
import AddNewOffer from "../hotel-edit/AddNewOffer";
import AgeEdit from "../hotel/AgeEdit";
import DeleteHotel from "../hotel/DeleteHotel";
import Description from "../hotel/Description";
import EditBtn from "../hotel/EditBtn";
import HotelDetailsImg from "../hotel/HoteldetailsImg";
import Map from "../hotel/Map";
import OfferItem from "../hotel/OfferItem";
import Tags from "../hotel/Tags";

export default function HotelDetails() {
  const bootcumpData = [
    {
      name: " Hotel Management",
      url: "/hotel",
      icon: <BsFillBuildingsFill />,
    },
    {
      name: "San Pietro di Positano",
    },
  ];

  const description = `Offering a private beach, fitness centre and a Michelin-starred restaurant, Il San Pietro di Positano is located in Positano. This luxurious 5-star hotel features elegantly furnished rooms with a terrace and sea views.
  
  The spacious rooms all include bathrobes, slippers and a flat-screen TV with satellite and pay-per-view channels. Some also feature a design sofa or chair.Offering a private beach, fitness centre and a Michelin-starred restaurant, Il San Pietro di Positano is located in Positano. This luxurious 5-star hotel features elegantly furnished rooms with a terrace and sea views.

  The spacious rooms all include bathrobes, slippers and a flat-screen TV with satellite and pay-per-view channels. Some also feature a design sofa or chair.Offering a private beach, fitness centre and a Michelin-starred restaurant, Il San Pietro di Positano is located in Positano. This luxurious 5-star hotel features elegantly furnished rooms with a terrace and sea views.

  The spacious rooms all include bathrobes, slippers and a flat-screen TV with satellite and pay-per-view channels. Some also feature a design sofa or chair.`;

  const [serviceItems, setServiceItems] = useState([
    { icon: <FaUmbrellaBeach />, name: "On private beach" },
    { icon: <FaUmbrellaBeach />, name: "Spa" },
    { icon: <FaUmbrellaBeach />, name: "Pool" },
    { icon: <FaUmbrellaBeach />, name: "Parking included" },
    { icon: <FaUmbrellaBeach />, name: "Breakfast included" },
    { icon: <FaUmbrellaBeach />, name: "Free Wifi" },
  ]);

  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [intems, setItems] = useState([1, 1, 1, 1, 1, 1, 1, 1]);

  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

  const deleteChange = () => {
    navigate("/hotel");
  };

  return (
    <div className="hotel hotel-details">
      <div className="container">
        <Bootcump data={bootcumpData} />
        <div className="hotel-details-wrp">
          <div className="basic">
            <div className="booking-box">
              <div className="hotel-details-top">
                <HotelDetailsImg />
                <div className="info">
                  <div className="left">
                    <Title title="San Pietro di Positano" />
                    <Rating />
                  </div>
                  <EditBtn />
                </div>
                <Tags />
              </div>
              <div className="hotel-details-des">
                <Description description={description} title="Description" />
              </div>
            </div>
            <div className="booking-box hotel-details-service">
              <div className="hotel-details-service-top">
                <h4>Services</h4>
                <EditBtn />
              </div>
              <div className="hotel-details-service-body">
                <ul className="hotel-details-service-body-items">
                  {serviceItems.map((item, i) => (
                    <li key={i}>
                      {item.icon} {item.name}
                    </li>
                  ))}
                </ul>
                <div className="hotel-details-des">
                  <Description max={30} description={description} />
                </div>
              </div>
            </div>
            <div className="booking-box hotel-details-location">
              <div className="hotel-details-location-top">
                <h4>Location</h4>
                <EditBtn />
              </div>
              <Map />
            </div>

            <div className="booking-box hotel-details-service">
              <div className="hotel-details-service-top">
                <h4>Age Reductions</h4>
                <div className="edit-btn">
                  <button
                    className={isEdit && "save"}
                    onClick={() => setIsEdit(!isEdit)}
                  >
                    {(!isEdit && (
                      <>
                        <LuEdit /> Edit
                      </>
                    )) ||
                      "Save"}
                  </button>
                </div>
              </div>
              <AgeEdit isEdit={isEdit} />
            </div>
          </div>
          <div className="hotel-details-right basic">
            <div className="booking-box delete-disable">
              <div className="delete-disable-top">
                <h4>Disable or Delete</h4>
              </div>
              <div className="delete-disable-body">
                <DeleteHotel
                  data={"San Pietro di Positano"}
                  isShow={isDelete}
                  closeHandler={() => setIsDelete(false)}
                  changeHandler={deleteChange}
                />
                <button onClick={() => setIsDelete(true)} className="btn">
                  <GiSightDisabled /> Disable
                </button>
                <button
                  onClick={() => setIsDelete(true)}
                  className="btn delete"
                >
                  <RiDeleteBin2Line /> Delete
                </button>
              </div>
            </div>
            <div className="booking-box hotel-details-offers">
              <AddNewOffer
                isAdd={isAdd}
                setIsAdd={setIsAdd}
                submitHandler={() => setIsAdd(false)}
              />
              <div className="hotel-details-offers-top">
                <Title title="Hotel offers" />
                <button onClick={() => setIsAdd(true)} className="add-new">
                  <BsPlusLg />
                </button>
              </div>
              <Search />
              <div className="hotel-details-offers-body">
                {intems.map((d, i) => (
                  <OfferItem key={i} editOfferHandler={setIsAdd} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
