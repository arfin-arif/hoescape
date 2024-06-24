import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Select from "../basic/Select";
import OfferTags from "../hotel/OfferTags";
import AgeReduction from "./AgeReduction";
import Breakdown from "./Breakdown";
import Input from "./Input";
import TextArea from "./TextArea";

export default function AddNewOffer({ isAdd, setIsAdd, submitHandler }) {
  const [title, setTitle] = useState("Summer Offer 2023");
  const [offerID, setOfferID] = useState("#0394-21");

  const [items, setItems] = useState([
    {
      id: 1,
      items: [
        {
          id: "10",
          label: "Select Board type",
          items: ["Full board", "Half Board"],
        },
        {
          id: "10",
          label: "Price type",
          items: ["Per night", "Per night"],
        },
        {
          id: "11",
          label: "Select Board type",
          items: ["$", "$"],
          value: 0,
          input: true,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: "10",
          label: "Select Board type",
          items: ["Full board", "Half Board"],
        },
        {
          id: "10",
          label: "Price type",
          items: ["Per night", "Per night"],
        },
        {
          id: "12",
          label: "Select Board type",
          items: ["$", "$"],
          value: 0,
          input: true,
        },
      ],
    },
  ]);

  const [ages, setAges] = useState([
    {
      id: 1,
      items: [
        {
          id: "10",
          label: "Select Board type",
          items: ["All", " All 2"],
        },
        {
          id: "12",
          label: "Age Limit",
          value: 0,
        },
        {
          id: "11",
          label: "Discount",
          value: "10%",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: "10",
          label: "Select Board type",
          items: ["All", " All 2"],
        },
        {
          id: "12",
          label: "Age Limit",
          value: 10,
        },
        {
          id: "11",
          label: "Discount",
          value: "10%",
        },
      ],
    },
  ]);

  const handleChange = (parentId, itemId, newValue) => {
    const updatedItems = items.map((itemGroup) => {
      if (itemGroup.id === parentId) {
        const updatedItemsInGroup = itemGroup.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, value: parseInt(newValue) };
          }
          return item;
        });
        return { ...itemGroup, items: updatedItemsInGroup };
      }
      return itemGroup;
    });
    setItems(updatedItems);
  };

  const ageVlaueChange = (parentId, itemId, newValue) => {
    const updatedItems = ages.map((itemGroup) => {
      if (itemGroup.id === parentId) {
        const updatedItemsInGroup = itemGroup.items.map((item) => {
          if (item.id === itemId) {
            if (typeof item.value === "number") {
              return { ...item, value: Number(newValue) };
            } else {
              return { ...item, value: newValue };
            }
          }
          return item;
        });
        return { ...itemGroup, items: updatedItemsInGroup };
      }
      return itemGroup;
    });
    setAges(updatedItems);
  };

  const ref = useRef(null);
  const wrp = useRef(null);

  useEffect(() => {
    wrp.current.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsAdd(false);
      }
    });
  });

  return (
    <div ref={wrp} className={`add-new-offer  ${(isAdd && "show") || ""}`}>
      <div ref={ref} className="add-new-offer-inner booking-box">
        <div className="add-new-offer-top">
          <h4>Crate new offer</h4>
          <button onClick={() => setIsAdd(false)}>
            <GrClose />
          </button>
        </div>
        <div className="add-new-offer-body">
          <div className="offer-details">
            <h4>Offer Details</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </p>
            <div className="add-new-offer-details">
              <div className="item">
                <label htmlFor="title">Offer Title</label>
                <Input
                  handler={setTitle}
                  d={{ value: title, label: "Enter title" }}
                />
              </div>
              <div className="item">
                <label htmlFor="title">Offer ID</label>
                <Input
                  handler={setOfferID}
                  d={{ value: offerID, label: "#" }}
                />
              </div>
              <div className="item full">
                <label htmlFor="title">Description</label>
                <TextArea />
              </div>
            </div>
          </div>
          <div className="offer-details">
            <h4>Offer Validity</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </p>
            <div className="add-new-offer-details">
              <div className="item">
                <label htmlFor="title">Starting Date</label>
                <input type="date" name="" id="" placeholder="select date" />
              </div>
              <div className="item">
                <label htmlFor="title">Ending Date</label>
                <input type="date" name="" id="" placeholder="select date" />
              </div>
            </div>
          </div>{" "}
          <div className="offer-details">
            <h4>Offer Condition</h4>

            <div className="add-new-offer-details">
              <div className="item">
                <label htmlFor="title">Minimum Stay</label>
                <Select data={["2 days", "3 days", "4 days"]} />
              </div>
              <div className="item">
                <label htmlFor="title">Minimum Stay</label>
                <Select data={["5 days", "3 days", "4 days"]} />
              </div>
              <div className="item">
                <label htmlFor="title">Beverage Availability</label>
                <Select data={["Included", "Included 1", "Included 2"]} />
              </div>
              <div className="item">
                <label htmlFor="title">
                  Maximum People <span>(Optional)</span>
                </label>
                <Select
                  data={["ex. 5 person", "ex. 5 person", "ex. 5 person"]}
                />
              </div>
            </div>
          </div>
          <div className="offer-details">
            <h4>Tags</h4>
            <OfferTags />
          </div>
          <div className="offer-details">
            <h4>Price breakdown</h4>
            <div className="breakdown">
              {items.map((d, i) => (
                <div className="breakdown-inner" key={i}>
                  {d.items.map((d1, i) => (
                    <Breakdown
                      handler={(e) => {
                        handleChange(d.id, d1.id, e);
                      }}
                      key={i}
                      data={d1}
                    />
                  ))}
                </div>
              ))}

              <button
                onClick={() => {
                  setItems((prev) => {
                    return [
                      ...prev,
                      {
                        id: items.length + 1,
                        items: [
                          {
                            id: "10",
                            label: "Select Board type",
                            items: ["Full board", "Half Board"],
                          },
                          {
                            id: "10",
                            label: "Price type",
                            items: ["Per night", "Per night"],
                          },
                          {
                            id: "11",
                            label: "Select Board type",
                            items: ["$", "$"],
                            value: 0,
                            input: true,
                          },
                        ],
                      },
                    ];
                  });
                }}
              >
                <AiOutlinePlus /> Add More Price
              </button>
            </div>
          </div>
          <div className="offer-details">
            <h4>Age Reduction</h4>
            <div className="breakdown">
              {ages.map((d, i) => (
                <div className="breakdown-inner" key={i}>
                  {d.items.map((d1, i) => (
                    <AgeReduction
                      handler={(e) => {
                        ageVlaueChange(d.id, d1.id, e);
                      }}
                      key={i}
                      data={d1}
                    />
                  ))}
                </div>
              ))}

              <button
                onClick={() => {
                  setAges((prev) => {
                    return [
                      ...prev,
                      {
                        id: ages.length + 1,
                        items: [
                          {
                            id: "10",
                            label: "Select Board type",
                            items: ["All", " All 2"],
                          },
                          {
                            id: "12",
                            label: "Age Limit",
                            value: 0,
                          },
                          {
                            id: "11",
                            label: "Discount",
                            value: "10%",
                          },
                        ],
                      },
                    ];
                  });
                }}
              >
                <AiOutlinePlus /> Add More Age Reduction
              </button>
            </div>
          </div>
        </div>
        <div className="hotel-edit-footer">
          <div className="left">
            <button onClick={() => setIsAdd(false)}>Discard</button>
          </div>
          <div className="right">
            <button>Save Changes</button>
            <button onClick={submitHandler} className="submit">
              {"Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
