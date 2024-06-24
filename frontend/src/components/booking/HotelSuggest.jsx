import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Select from "../basic/Select";
import Input from "./Input";

import { BsThreeDotsVertical } from "react-icons/bs";
import PopupTitle from "../basic/PopupTitle";

export default function HotelSuggest({ isSuggest, setIsSuggest }) {
  const Item = ({ data }) => {
    return (
      <div className="item">
        <span>
          {data.name} {data.op && <small>({data.op})</small>}
        </span>
        {data.checkbox && (
          <>
            <input id={data.name} type="checkbox" />
            <label htmlFor={data.name}>{data.checkbox}</label>
          </>
        )}
        {(data?.options && <Select data={data.options} />) || (
          <Input data={{ value: data.value }} />
        )}
      </div>
    );
  };

  const CostItem = () => {
    return (
      <div className="item-wrp">
        <Item
          data={{
            name: "Guest Type",
            options: ["Adult", "Child"],
          }}
        />
        <Item
          data={{
            name: "Audlt Cost",
            value: "$100",
          }}
        />
        <Item
          data={{
            name: " Discount",
            value: "10%",
          }}
        />

        <div className="cost">
          <small>Cost</small>
          <strong>
            €80 <span>€100</span>
          </strong>
        </div>
      </div>
    );
  };

  const ChildItem = () => {
    return (
      <div className="item-wrp child">
        <Item
          data={{
            name: "Guest Type",
            options: ["Child", "Audlt"],
          }}
        />
        <Item
          data={{
            name: "Child Cost",
            value: "$100",
          }}
        />
        <Item
          data={{
            name: "Age",
            value: "Below 10 yrs ",
          }}
        />
        <Item
          data={{
            name: " Discount",
            value: "10%",
            op: "Optioonal",
          }}
        />

        <div className="cost">
          <small>Cost</small>
          <strong>
            €80 <span>€100</span>
          </strong>
        </div>
      </div>
    );
  };
  const [rooms, setRooms] = useState([{ id: 1, name: "room 1", gust: [1] }]);

  const addHotelHandler = () => {
    setRooms((prev) => {
      const item = {
        id: new Date().getTime(),
        name: `room ${prev.length + 1}`,
        gust: [],
      };
      return [...prev, item];
    });
  };

  const deleteRoom = (id) => {
    // Filter out the room with the specified id
    const updatedRooms = rooms.filter((room) => room.id !== id);
    // Update the state with the filtered array
    setRooms(updatedRooms);
  };

  const addGustHandler = (e) => {
    const updatedRooms = rooms.map((room) => {
      if (room.id === e) {
        // Create a new guest array with the new item added
        const newGuestArray = [...room.gust, 1];
        // Return a new room object with the updated guest array
        return { ...room, gust: newGuestArray };
      }
      return room; // Return unchanged room for other rooms
    });

    setRooms(updatedRooms); // Set the state with the new array
  };

  const [isDelete, setIsDelete] = useState(false);

  const SuggestHotel = ({ data }) => {
    return (
      <>
        <div className="details-suggest-body-top">
          <div className="left">
            <span>Hotel Name</span>
            <Select
              data={["Ocean Paradise", "Ocean Paradise1", "Ocean Paradise 2"]}
            />
          </div>
          <div className="separator"></div>
          <div className="right">
            <span>Final Quote</span>
            <strong>€180</strong>
            <span className="delete">€201</span>

            <button
              onClick={() => {
                data.setIsDelete(!isDelete);
              }}
            >
              <BsThreeDotsVertical />
            </button>
            <div className={`btns ${(data.isDelete && "show") || ""}`}>
              <button
                onClick={() => {
                  data.setIsDelete(false);
                  data.setIsSuggest(false);
                }}
              >
                {(data.delete && "Delete") || "close"}
              </button>
            </div>
          </div>
        </div>
        {data.rooms.map((room, i) => (
          <div key={i} className="details-suggest-body-main">
            <div className="top">
              <div className="left">
                <h4>{room.name}</h4>{" "}
                {data.rooms.length > 1 && (
                  <button onClick={() => data.deleteRoom(room.id)}>
                    <RiDeleteBin2Fill />
                  </button>
                )}
              </div>

              <button onClick={data.addHotelHandler}>
                <AiOutlinePlus />
                Add New Room
              </button>
            </div>
            <div className="item-wrp">
              <Item
                data={{
                  name: "Room Type",
                  options: ["Suite", "Audlt", "Child"],
                }}
              />
              <Item
                data={{
                  name: "Board Type",
                  options: ["Suite 1", "Suite2", "Suite3"],
                }}
              />
              <Item
                data={{
                  name: "Overall Discount",
                  value: "10%",
                  checkbox: "Show in quote",
                }}
              />
            </div>
            <ChildItem />
            {room?.gust.map((g, i) => (
              <CostItem key={i} />
            ))}

            <div className="invoice">
              <div className="left">
                <button onClick={() => data.addGustHandler(room.id)}>
                  <AiOutlinePlus /> Add More Guest
                </button>
              </div>
              <div className="right">
                <div className="invoice-item">
                  <span>Subtotal (2 Adult, 1 Child) </span>
                  <strong>$201</strong>
                </div>
                <div className="invoice-item discount">
                  <span>Subtotal (2 Adult, 1 Child) </span>
                  <strong>-$21</strong>
                </div>
                <div className="invoice-item cost">
                  <span>Subtotal (2 Adult, 1 Child) </span>
                  <strong>$180</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  const [suggests, setSuggests] = useState([]);

  const addMoreHandler = () => {
    const hotel = {
      id: new Date().getTime() + Math.random(),
      isDelete: false,
      rooms: [{ id: new Date().getTime(), name: "room 1", gust: [1] }],
    };
    setSuggests((prev) => {
      return [...prev, hotel];
    });
  };

  const addDataToRooms = (suggestId) => {
    setSuggests((prevState) => {
      // Find the suggest that matches the given ID
      const updatedSuggests = prevState.map((suggest) => {
        if (suggest.id === suggestId) {
          // Create a new room object and add it to the rooms array
          const newRoom = {
            id: new Date().getTime(),
            name: `room ${suggest.rooms.length + 1}`,
            gust: [2, 3],
          };
          return { ...suggest, rooms: [...suggest.rooms, newRoom] };
        }
        return suggest;
      });
      return updatedSuggests;
    });
  };

  const addGuestToRoom = (suggestId, roomId) => {
    setSuggests((prevState) => {
      // Find the suggest that matches the given ID
      const updatedSuggests = prevState.map((suggest) => {
        if (suggest.id === suggestId) {
          // Find the room that matches the given ID
          const updatedRooms = suggest.rooms.map((room) => {
            if (room.id === roomId) {
              // Add the guest to the guests array for this room
              return { ...room, gust: [...room.gust, 1] };
            }
            return room;
          });
          return { ...suggest, rooms: updatedRooms };
        }
        return suggest;
      });
      return updatedSuggests;
    });
  };

  const isDeleteHandler = (id) => {
    setSuggests((prevSuggests) =>
      prevSuggests.map((item) =>
        item.id === id ? { ...item, isDelete: !item.isDelete } : item
      )
    );
  };

  const deleteHandler = (id) => {
    setSuggests((prevSuggests) =>
      prevSuggests.filter((item) => item.id !== id)
    );
  };

  const gustDeleteRoom = (suggestId, roomId) => {
    // Find the correct suggests object
    const updatedSuggests = suggests.map((suggest) => {
      if (suggest.id === suggestId) {
        // Filter out the room with the specified roomId
        const updatedRooms = suggest.rooms.filter((room) => room.id !== roomId);
        // Create a new suggests object with the updated rooms array
        return { ...suggest, rooms: updatedRooms };
      }
      return suggest; // Return unchanged suggests objects
    });

    // Update the state with the updated suggests array
    setSuggests(updatedSuggests);
  };

  return (
    <div className={`details-suggest`}>
      <div
        className={`details-suggest-body-wrp ${(isSuggest && "show") || ""}`}
      >
        <div className={`details-suggest-body  ${(isSuggest && "show") || ""}`}>
          <SuggestHotel
            data={{
              rooms,
              addGustHandler,
              addHotelHandler,
              setIsSuggest,
              delete: false,
              setIsDelete,
              isDelete,
              deleteRoom,
            }}
          />
        </div>
      </div>

      <>
        <PopupTitle title="Suggested Hotels" />
        {suggests.map((s, i) => (
          <div key={i} className={`details-suggest-body-wrp show`}>
            <div className={`details-suggest-body show`}>
              <SuggestHotel
                data={{
                  rooms: s.rooms,
                  addGustHandler: (e) => addGuestToRoom(s.id, e),
                  addHotelHandler: () => addDataToRooms(s.id),
                  delete: true,
                  isDelete: s.isDelete,
                  setIsDelete: () => isDeleteHandler(s.id),
                  setIsSuggest: () => deleteHandler(s.id),
                  deleteRoom: (e) => gustDeleteRoom(s.id, e),
                }}
              />
            </div>
          </div>
        ))}
      </>

      <div className="addMoreBtn">
        <button onClick={addMoreHandler}>
          <AiOutlinePlus /> Add more suggest hotels
        </button>
      </div>
    </div>
  );
}
