import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Select from "../basic/Select";
import Input from "../hotel-edit/Input";
import DateList from "./DateList";
import ImportTemplate from "./ImportTemplate";

export default function FixedOffer({ saveTemplateHandler }) {
  const [dates, setDates] = useState([{ id: 1, value: "" }]);
  const handleDateChange = (id, newValue) => {
    // Create a copy of the dates state
    const updatedDates = [...dates];

    // Find the index of the date with the specified ID
    const dateIndex = updatedDates.findIndex((date) => date.id === id);

    // Update the value of the specified date
    if (dateIndex !== -1) {
      updatedDates[dateIndex].value = newValue;
      setDates(updatedDates);
    }
  };

  const addNewDate = () => {
    console.log("test");
    // Create a new date object with initial values
    const newDate = {
      id: dates.length + 1, // Generate a unique ID (you can use a different approach for unique IDs)
      value: "",
    };

    // Add the new date item to the existing array
    setDates([...dates, newDate]);
  };

  const deleteDate = (id) => {
    // Create a copy of the dates state and filter out the item with the specified id
    const updatedDates = dates.filter((date) => date.id !== id);

    // Set the updated state without the deleted item
    setDates(updatedDates);
  };

  const [region, setRegion] = useState([
    { id: 1, value: "$432" },
    { id: 2, value: "$323" },
  ]);
  const handleRegionChange = (id, newValue) => {
    // Create a copy of the dates state
    const updatedDates = [...region];

    // Find the index of the date with the specified ID
    const dateIndex = updatedDates.findIndex((date) => date.id === id);

    // Update the value of the specified date
    if (dateIndex !== -1) {
      updatedDates[dateIndex].value = newValue;
      setRegion(updatedDates);
    }
  };

  const addNewRegion = () => {
    console.log("test");
    // Create a new date object with initial values
    const newDate = {
      id: region.length + 1, // Generate a unique ID (you can use a different approach for unique IDs)
      value: "",
    };

    // Add the new date item to the existing array
    setRegion([...region, newDate]);
  };

  const deleteRegion = (id) => {
    // Create a copy of the dates state and filter out the item with the specified id
    const updatedDates = region.filter((date) => date.id !== id);

    // Set the updated state without the deleted item
    setRegion(updatedDates);
  };

  const [isImport, setIsImport] = useState(false);
  const [isDate, setIsDate] = useState(false);
  return (
    <div className="module-edit-basic fixed-offer">
      <ImportTemplate addhotel={isImport} handler={setIsImport} />
      <DateList addhotel={isDate} handler={setIsDate} />
      <h4>Fixed Offers</h4>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin
      </p>
      <div className="fixed-offer-item">
        <div className="fixed-offer-item-top">
          <strong>By Date</strong>
          <div className="buttons">
            <button onClick={() => saveTemplateHandler(true)}>
              Create Template{" "}
            </button>
            <span className="separator"></span>
            <button onClick={() => setIsImport(true)}>Import Offerte </button>
            <span className="separator"></span>
            <button onClick={() => setIsDate(true)}>Import Date List </button>
          </div>
        </div>
        {dates.map((date, i) => (
          <div key={i} className="fixed-offer-item-body">
            <div className="group">
              <label htmlFor="">Starting Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="group">
              <label htmlFor="">Ending Date</label>
              <input type="date" name="" id="" />
            </div>
            <div className="group">
              <label htmlFor="">Fixed Price</label>
              <div className="inner">
                <Select data={["$", "$", "$"]} />
                <Input
                  d={{ value: date.value, label: "Enter Price" }}
                  handler={(e) => handleDateChange(date.id, e)}
                />
              </div>
            </div>
            <button onClick={() => deleteDate(date.id)}>
              <AiOutlineDelete />
            </button>
          </div>
        ))}
        <button onClick={addNewDate}>
          <AiOutlinePlus /> Add More
        </button>
      </div>

      <div className="fixed-offer-item">
        <div className="fixed-offer-item-top">
          <strong>By Region</strong>
          <div className="buttons">
            <button onClick={() => saveTemplateHandler(true)}>
              Create Template{" "}
            </button>
            <span className="separator"></span>
            <button>Import Region List </button>
          </div>
        </div>
        {region.map((date, i) => (
          <div key={i} className="fixed-offer-item-body">
            <div className="group">
              <label htmlFor="">Starting Date</label>
              <Select data={["Sicily", "Catania"]} />
            </div>
            <div className="group">
              <label htmlFor="">Ending Date</label>
              <Select data={["Sicily", "Catania"]} />
            </div>
            <div className="group">
              <label htmlFor="">Fixed Price</label>
              <div className="inner">
                <Select data={["$", "$", "$"]} />
                <Input
                  d={{ value: date.value, label: "Enter Price" }}
                  handler={(e) => handleRegionChange(date.id, e)}
                />
              </div>
            </div>
            <button onClick={() => deleteRegion(date.id)}>
              <AiOutlineDelete />
            </button>
          </div>
        ))}
        <button onClick={addNewRegion}>
          <AiOutlinePlus /> Add More
        </button>
      </div>
    </div>
  );
}
