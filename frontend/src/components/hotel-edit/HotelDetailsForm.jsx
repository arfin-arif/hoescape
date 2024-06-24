import { useEffect, useState } from "react";
import { BiSwim } from "react-icons/bi";
import AgeEdit from "../hotel/AgeEdit";
import DetailsImgs from "./DetailsImgs";
import DetailsInputs from "./DetailsInputs";
import Rating from "./Rating";
import TagInput from "./TagInput";
import TextArea from "./TextArea";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { updateRatings } from "../../redux/features/AddHotel/ratingAndServiceSlice";

export default function HotelDetailsForm() {
  const [imgs, setImgs] = useState([
    // {
    //   id: "image-1",
    //   src: "https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // },
    // {
    //   id: "image-2",
    //   src: "https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // },
    // ... other images
  ]);
  const [ratings, setRatings] = useState(0);

  const [include, setInclude] = useState([
    {
      icon: <BiSwim />,
      name: "Private beach",
    },
    {
      icon: <BiSwim />,
      name: "Pool",
    },
    {
      icon: <BiSwim />,
      name: "Spa",
    },
    {
      icon: <BiSwim />,
      name: "Parking included",
    },
    {
      icon: <BiSwim />,
      name: "free wifi",
    },
  ]);

  // const [active, setActive] = useState([include[0].name, include[3].name]);
  const [strengths, setStrengths] = useState([
    {
      icon: <BiSwim />,
      name: "Private beach",
    },
    {
      icon: <BiSwim />,
      name: "Pool",
    },
    {
      icon: <BiSwim />,
      name: "Spa",
    },
    {
      icon: <BiSwim />,
      name: "Parking included",
    },
    {
      icon: <BiSwim />,
      name: "free wifi",
    },
  ]);
  const [serviceDetails, setServiceDetails] = useState("");
  const dispatch = useDispatch();

  const data = {
    serviceDetails: serviceDetails,
    ratings: ratings,
    image: imgs,
  };

  useEffect(() => {
    dispatch(updateRatings(data));
  }, [dispatch]);

  console.log("images", imgs);
  console.log("ratings", ratings);
  console.log("service details", serviceDetails);
  console.log("includ", include);
  console.log("strengths", strengths);
  return (
    <from className="hotel-details-form">
      <div className="images">
        <h4>Hotel Images</h4>
        <p>
          Add 2 or more images of the hotel to give the customer a better
          experience
        </p>
        <DetailsImgs imgs={imgs} setImgs={setImgs} />
      </div>
      <div className="hotel-form-details">
        <h4>Hotel Details</h4>
        <p>
          Clicca da sinistra verso destra per selezionare il numero di stelle
          della struttura.
        </p>

        <DetailsInputs />
      </div>
      <div className="hotel-details-form-rating">
        <h4>Stelle Struttura</h4>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical
        </p>
        <Rating active={ratings} setActive={setRatings} />
      </div>

      <div className="service">
        <h4>Dettagli Servizi</h4>
        <p>Aggiungi una descrizione sui servizi dell hotel</p>
        <div className="hotel-form-details-item full">
          <label htmlFor="">Dettagli Servizi</label>
          <div className="inner">
            <textarea
              onChange={(e) => setServiceDetails(e.target.value)}
              name=""
              placeholder="Inserisci una descrizione sui servizi dell hotel"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="hotel-edit-bottom">
        <h4>Servizi Inclusi</h4>
        <TagInput data={include} handler={setInclude} />
        <h4>Strengths</h4>
        <TagInput data={strengths} handler={setStrengths} />
      </div>

      <div className="service age-edit-wrp">
        <h4>Riduzioni Età</h4>
        <p>
          Questi valori verranno presi come default per tutte le offerte
          dell’hotel. Tuttavia potranno essere modificati anche per le singole
          offerte
        </p>
        <AgeEdit isEdit={true} />
      </div>
    </from>
  );
}
