import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Select from "../basic/Select";
import Map from "../hotel/Map";
import EditTitle from "./EditTItle";
import Input from "./Input";

export default function LocationDetails() {
  const [destinces, setDestinces] = useState([
    {
      id: "1",
      isEdit: false,
      label: "Distanza dal Mare",
      value: 0,
    },
    { id: "2", isEdit: false, label: "Distanza dal Centro", value: 0 },
    { id: "3", isEdit: false, label: "Distanza dalle Terme", value: 0 },
  ]);

  const toggleEdit = (itemId) => {
    const updatedDestinces = destinces.map((item) => {
      if (item.id === itemId) {
        return { ...item, isEdit: !item.isEdit };
      }
      return item;
    });
    setDestinces(updatedDestinces);
  };

  const handleChangeLabel = (itemId, newLabel) => {
    const updatedDestinces = destinces.map((item) => {
      if (item.id === itemId) {
        return { ...item, label: newLabel, isEdit: false };
      }
      return item;
    });
    setDestinces(updatedDestinces);
  };

  return (
    <div className="location-details">
      <h4>Location </h4>
      <p>
        Inserisci le informazi oni riguardo la posizione e infine copia le
        coordinate da Google Maps e incollale in “Coordinate Google Maps
      </p>
      <div className="inputs">
        <div className="inputs-item">
          <label htmlFor="">Città</label>
          <Select data={["Dhaka", "Dhaka", "Dhaka"]} />
        </div>
        <div className="inputs-item">
          <label htmlFor="">Nazione</label>
          <Select data={["Dhaka", "Dhaka", "Dhaka"]} />
        </div>
        <div className="inputs-item">
          <label htmlFor="">Codice Postale” </label>
          <Input d={{ value: "", label: "Inserisci codice postale " }} />
        </div>
      </div>
      <div className="inputs">
        <div className="inputs-item">
          <label htmlFor="">Address Line 1</label>
          <Input d={{ value: "", label: "Select City" }} />
        </div>
      </div>
      <div className="inputs ">
        <div className="inputs-item location">
          <label htmlFor="">Coordinate Google Map</label>
          <Input
            d={{
              value: "",
              label: "Inserisci coordinate (esempio: 40.723, 13.903) ",
            }}
          />
          <span>
            <MdLocationOn />
          </span>
        </div>
      </div>
      <Map />
      <div className="location-details-bottom">
        <h4>Distanza</h4>
        <p>Inserisci le distanze dai vari posti</p>

        <div className="destince">
          {destinces.map((d, i) => (
            <div key={i} className="destince-item">
              <div className="destince-item-top">
                <span>{d.label}</span>
                <EditTitle
                  closeHandler={(e) => toggleEdit(d.id)}
                  changeHandler={(e) => handleChangeLabel(d.id, e)}
                  isShow={d.isEdit}
                  data={d.label}
                />
                <button onClick={() => toggleEdit(d.id)}>
                  <FiEdit />
                </button>
              </div>
              <div className="destince-item-body">
                <Select data={["Metter", "Km"]} />
                <Input d={{ value: d.value, label: "" }} />
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              setDestinces((prev) => {
                return [
                  ...prev,
                  {
                    label: "Distanza dalle Terme",
                    value: 30,
                  },
                ];
              });
            }}
          >
            <AiOutlinePlus /> Add more
          </button>
        </div>
      </div>
    </div>
  );
}
