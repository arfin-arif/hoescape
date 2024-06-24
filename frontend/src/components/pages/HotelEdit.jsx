import { useEffect, useMemo, useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Bootcump from "../basic/BootCump";
import EditMenu from "../hotel-edit/EditMenu";
import EditOffer from "../hotel-edit/EditOffer";
import HotelDetailsForm from "../hotel-edit/HotelDetailsForm";
import LocationDetails from "../hotel-edit/LocationDetails";
import Publish from "../hotel-edit/Publish";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";

export default function HotelEdit() {
  const formData2 = useSelector((state) => state.form2);

  // const ratingAndService = useSelector((state) => {
  //   return state.rating;
  // });
  // const formData1 = useSelector((state) => {
  //   return state.form1;
  // });

  // useEffect(() => {
  //   console.log("Form Data 1:", formData1);
  // }, [formData1]);

  // useEffect(() => {
  //   console.log("Form Data 2:", formData2);
  // }, [formData2]);
  // useEffect(() => {
  //   console.log("ratingAndService:", ratingAndService);
  // }, [ratingAndService]);

  // const transformedData = {};

  // Object.values(formData2).forEach((item) => {
  //   const { label, value } = item;
  //   transformedData[label] = value;
  // });

  // const finalData = {
  //   ...transformedData,
  //   ...ratingAndService,
  // };

  // console.log("final data", finalData);

  // const form1 = useAppSelector((state) => state.form2);
  console.log("form 2 data using selector", formData2);

  const bootCump = [
    {
      name: "Hotel Management",
      url: "/hotel",
      icon: <BsFillBuildingsFill />,
    },
    {
      name: "Add New Hotel",
    },
  ];

  const [active, setActive] = useState(1);
  const [isPublish, setIsPublish] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="hotel-edit hotel">
      <div className="container">
        <Bootcump data={bootCump} />
        <div className="hotel-edit-wrp booking-box">
          <div className="hotel-edit-top">
            <EditMenu active={active} setActive={setActive} />
          </div>
          <div className="hotel-edit-body">
            {(active === 1 && <HotelDetailsForm />) ||
              (active === 2 && <LocationDetails />) ||
              (active === 3 && <EditOffer />) ||
              (active === 4 && isPublish && <Publish />)}
          </div>

          <div className="hotel-edit-footer">
            <div className="left">
              <button>Discard</button>
            </div>
            <div className="right">
              {!isPublish && <button>Save Changes</button>}
              <button
                onClick={() => {
                  if (active < 4 && !isPublish) {
                    setActive(active + 1);
                  } else if (isPublish) {
                    navigate("/hotel");
                  } else {
                    setIsPublish(true);
                  }
                }}
                className="submit"
              >
                {(active === 4 && !isPublish && "Publish") || "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
