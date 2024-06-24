import React, { useState } from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateForm1Data } from "../../redux/features/AddHotel/addHotelFormSlice1";
import axios from "axios";

const AddHotel = ({ handler, addhotel }) => {
  const [formData, setFormData] = useState({
    hotelID: "#",
    hotelName: "",
    hotelType: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("AdHotel.jsx", formData);
  const tags = [
    "Hotel",
    "B&B",
    "Residence",
    "Agriturismo",
    "Villaggio",
    "Casa Vacanza",
  ];
  const [isError, setIsError] = useState({});
  const [active, setActive] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleHotelTypeSelect = (selectedType) => {
    setActive(selectedType);
    setFormData((prevFormData) => ({
      ...prevFormData,
      hotelType: selectedType,
    }));
  };

  const createHandler = () => {
    // const isError = Object.values(isError).some((error) => error); // Check if there are any errors
    if (formData.hotelID && formData.hotelName && formData.hotelType) {
      dispatch(updateForm1Data(formData));
      navigate(`/hotel/edit/${formData.hotelID}`);
    }
  };

  // const createHandler = async () => {
  //   if (formData.hotelID && formData.hotelName && formData.hotelType) {
  //     try {
  //       const response = await axios.post(
  //         `http://localhost:5000/api/v1/hotel/update-hotel/${formData.hotelID}`,
  //         formData
  //       );

  //       const data = response.data;
  //       console.log("Hotel created successfully:", response);
  //       dispatch(updateForm1Data(formData));
  //       navigate(`/hotel/edit/${formData.hotelID}`);
  //     } catch (error) {
  //       console.error("Error creating hotel:", error.message);
  //     }
  //   }
  // };

  return (
    <div className={`add-hotel ${(addhotel && "show") || ""}`}>
      <div className="add-hotel-inner">
        <div className="add-hotel-top">
          <span>
            <BsFillBuildingsFill />
          </span>
          <button onClick={() => handler(false)} className="close">
            <IoClose />
          </button>
        </div>
        <div className="add-hotel-body">
          <h4>Aggiungi un nuovo hotel</h4>
          <p>
            Crea lhotel ID del nuovo Hotel, inserisci il nome e seleziona il
            tipo.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              className={`add-hotel-item ${
                (isError && !formData.hotelID && "error") || ""
              }`}
            >
              <label htmlFor="">Hotel ID</label>
              <input
                type="text"
                placeholder="#"
                name="hotelID"
                value={formData.hotelID}
                onChange={handleInputChange}
              />
            </div>
            <div
              className={`add-hotel-item ${
                (isError && !formData.hotelName && "error") || ""
              }`}
            >
              <label htmlFor="">Nome Hotel</label>
              <input
                type="text"
                placeholder="Inserisci il nome dell’hotel"
                value={formData.hotelName}
                onChange={handleInputChange}
                name="hotelName"
              />
            </div>
            <div
              className={`add-hotel-item ${
                (isError && !formData.hotelType && "error") || ""
              }`}
            >
              <label htmlFor="">Tipo Struttura</label>
              <ul className="add-hotel-item-type">
                {tags.map((d, i) => (
                  <li key={i}>
                    <button
                      className={(d === active && "active") || ""}
                      onClick={() => handleHotelTypeSelect(d)}
                    >
                      {d}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
        <div className="add-hotel-footer">
          <button onClick={() => handler(false)} className="btn cancel">
            Annulla
          </button>
          <button onClick={createHandler} className="btn">
            Crea Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
