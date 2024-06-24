import { useEffect, useMemo, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { PiArrowSquareOutBold } from "react-icons/pi";
import Select from "../basic/Select";
import Input from "./Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateDetailsInput } from "../../redux/features/AddHotel/detailsInputSlice";

export default function DetailsInputs() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => {
    return state.form1;
  });
  // console.log("Form Data", formData);

  const { hotelID, hotelName } = formData;
  const [inputs, setInputs] = useState([
    {
      label: "Nome Hotel",
      value: hotelName,
    },
    {
      label: "Hotel ID",
      value: hotelID,
    },
    {
      label: "Morgana ID",
      value: "",
    },
    {
      label: "Sito Web Hotel",
      value: "",
      url: true,
    },
    {
      label: "Email",
      value: "",
    },
    {
      label: "Numero di Telefono",
      value: "",
      number: true,
    },

    {
      label: "Hotel XMLurl",
      value: "",
      url: true,
    },

    {
      label: "Priorità",
      value: "32",
    },
  ]);
  const [textareas, setTextAreas] = useState([
    {
      label: "Descrizione Hotel",
      placeholder: "Inserisci la descrizione dell hotel",
      value: "",
    },
    {
      label: "Riassunto Descrizione",
      placeholder: "Inserisci il riassunto della descrizione dell hotel",
      value: "",
    },
    {
      label: "Descrizione Camere",
      placeholder: "Inserisci una descrizione delle camere",
      value: "",
    },
  ]);
  const changeHandler = (label, newValue) => {
    if (label === "Priority") {
      const updatedInputs = inputs.map((input) =>
        input.label === label ? { ...input, value: parseInt(newValue) } : input
      );
      setInputs(updatedInputs);
    } else {
      const updatedInputs = inputs.map((input) =>
        input.label === label ? { ...input, value: newValue } : input
      );
      setInputs(updatedInputs);
    }
  };

  const changeHandler2 = (label, newValue) => {
    if (label === "Priority") {
      const updatedTextareas = textareas.map((textareas) =>
        textareas.label === label
          ? { ...textareas, value: parseInt(newValue) }
          : textareas
      );
      setTextAreas(updatedTextareas);
    } else {
      const updatedTextareas = textareas.map((textareas) =>
        textareas.label === label
          ? { ...textareas, value: newValue }
          : textareas
      );
      setTextAreas(updatedTextareas);
    }
  };
  const finalData = inputs.concat(textareas);

  useEffect(() => {
    dispatch(updateDetailsInput(finalData));
  }, [dispatch]);

  const formData2 = useSelector((state) => state.form2);
  console.log("data after stor ", formData2);

  return (
    <>
      <div className="hotel-form-details-wrp">
        {inputs.map((d, i) => (
          <div key={i} className="hotel-form-details-item">
            <label htmlFor={i}>{d.label}</label>
            <div className="inner">
              {d.number && <Select data={["🇱🇷", "🇧🇩", "🇸🇳"]} />}
              <Input handler={(e) => changeHandler(d.label, e)} d={d} i={i} />
              {d.url && (
                <a href={d.value} target="blank">
                  <PiArrowSquareOutBold />
                </a>
              )}
            </div>
          </div>
        ))}
        {textareas.map((d, i) => (
          <>
            <div key={i} className="hotel-form-details-item full">
              <label htmlFor="">{d.label}</label>
              <div className="inner">
                {/* <TextArea
                handler={(e) => changeHandler(d.label, e)}
                d={d}
                i={i}
                /> */}

                <textarea
                  value={d.value}
                  onChange={(e) => changeHandler2(d.label, e.target.value)}
                  placeholder={d.placeholder}
                  id={i}
                  name=""
                ></textarea>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="buttons">
        {!textareas.some(
          (textarea) => textarea.label === "Spa Description"
        ) && (
          <button
            onClick={() => {
              setTextAreas((prev) => {
                return [...prev, { label: "Spa Description" }];
              });
            }}
          >
            <BiPlus />
            Add Spa Description
          </button>
        )}
        {!textareas.some(
          (textarea) => textarea.label === " Restaurants Description"
        ) && (
          <button
            onClick={() => {
              setTextAreas((prev) => {
                return [...prev, { label: " Restaurants Description" }];
              });
            }}
          >
            <BiPlus />
            Add Restaurants Description
          </button>
        )}
      </div>
    </>
  );
}
