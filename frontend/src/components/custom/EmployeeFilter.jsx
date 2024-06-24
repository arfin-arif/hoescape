import { useState } from "react";
import AddEmpPopup from "./AddEmpPopup";

const EmployeeFilter = ({ refetch }) => {
  // Add empoloyee state
  const [addEmp, setAddEmp] = useState(false);

  return (
    <>
      {/* Search and filter */}
      <div className="search_filter">
        {/* SearchBar */}
        <div className="searchBar">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M14.875 14.875L11.7937 11.7937M13.4583 7.79167C13.4583 10.9213 10.9213 13.4583 7.79167 13.4583C4.66205 13.4583 2.125 10.9213 2.125 7.79167C2.125 4.66205 4.66205 2.125 7.79167 2.125C10.9213 2.125 13.4583 4.66205 13.4583 7.79167Z"
              stroke="#C1C1C1"
              strokeWidth="1.41667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Input */}
          <input type="text" placeholder="Search here.." className="jakarta" />
        </div>

        {/* Sorting */}
        <div className="filter_add">
          <div className="sort">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="#858585"
            >
              <mask
                id="mask0_1_465"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="17"
              >
                <rect y="0.5" width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_465)">
                <path d="M5.33333 12.5H2.66667C2.47778 12.5 2.31956 12.436 2.192 12.308C2.064 12.1804 2 12.0222 2 11.8333C2 11.6444 2.064 11.4862 2.192 11.3587C2.31956 11.2307 2.47778 11.1667 2.66667 11.1667H5.33333C5.52222 11.1667 5.68067 11.2307 5.80867 11.3587C5.93622 11.4862 6 11.6444 6 11.8333C6 12.0222 5.93622 12.1804 5.80867 12.308C5.68067 12.436 5.52222 12.5 5.33333 12.5ZM13.3333 5.83333H2.66667C2.47778 5.83333 2.31956 5.76956 2.192 5.642C2.064 5.514 2 5.35556 2 5.16667C2 4.97778 2.064 4.81933 2.192 4.69133C2.31956 4.56378 2.47778 4.5 2.66667 4.5H13.3333C13.5222 4.5 13.6804 4.56378 13.808 4.69133C13.936 4.81933 14 4.97778 14 5.16667C14 5.35556 13.936 5.514 13.808 5.642C13.6804 5.76956 13.5222 5.83333 13.3333 5.83333ZM9.33333 9.16667H2.66667C2.47778 9.16667 2.31956 9.10267 2.192 8.97467C2.064 8.84711 2 8.68889 2 8.5C2 8.31111 2.064 8.15267 2.192 8.02467C2.31956 7.89711 2.47778 7.83333 2.66667 7.83333H9.33333C9.52222 7.83333 9.68067 7.89711 9.80867 8.02467C9.93622 8.15267 10 8.31111 10 8.5C10 8.68889 9.93622 8.84711 9.80867 8.97467C9.68067 9.10267 9.52222 9.16667 9.33333 9.16667Z" />
              </g>
            </svg>

            <select className="jakarta">
              <option value="sort">Sort</option>
              <option value="sort2">Sort2</option>
              <option value="sort3">Sort3</option>
              <option value="sort4">Sort4</option>
              <option value="sort5">Sort5</option>
            </select>
          </div>

          {/* Add Icon */}
          <div className="add" onClick={() => setAddEmp(true)}>
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="#fff"
            >
              <path
                d="M7 1.5V7.5M7 13.5V7.5M7 7.5H1M7 7.5H13"
                stroke="#858585"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="jakarta">Add</p>
          </div>
        </div>
      </div>

      {/* Popup */}
      {addEmp === true ? (
        <AddEmpPopup refetch={refetch} setAddEmp={setAddEmp} />
      ) : null}
    </>
  );
};

export default EmployeeFilter;
