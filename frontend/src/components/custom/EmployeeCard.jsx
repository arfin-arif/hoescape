import { motion } from "framer-motion";
import { useState } from "react";
import EditEmpPopup from "../custom/EditEmpPopup";

const EmployeeCard = ({ employee, refetch }) => {
  const { name, email, password, securityLevel, _id } = employee;
  const [showEmpStatistics, setShowEmpStatistics] = useState(false);
  const [editEmp, setEditEmp] = useState(false);

  return (
    <div className="employee_card">
      {/* Top Part */}
      <div className="topPart">
        {/* left side */}
        <div className="left">
          {/* image */}
          <img src="./images/profile-pic.png" alt="" />

          {/* information */}
          <div className="info">
            {/* heading */}
            <div className="info-head">
              <h1 className="jakarta">
                {name?.firstName + " " + name?.lastName}
              </h1>
              <span className="jakarta">{securityLevel}</span>
            </div>

            {/* edited */}
            <p>Last edit: 26 Giugno 2023 alle 23:04</p>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <button className="jakarta" onClick={() => setEditEmp(true)}>
            Edit
          </button>
        </div>

        {editEmp === true ? (
          <EditEmpPopup
            refetch={refetch}
            id={_id}
            name={name}
            password={password}
            email={email}
            securityLevel={securityLevel}
            setEditEmp={setEditEmp}
          />
        ) : null}
      </div>

      {/* Bottom part */}
      <div
        className="bottomPart"
        onClick={() => setShowEmpStatistics(!showEmpStatistics)}
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 17 17"
          fill="none"
        >
          <circle cx="8.5" cy="8.5" r="7.5" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.73754 6.83654C7.73754 7.33442 7.33393 7.73803 6.83606 7.73803C6.33818 7.73803 5.93457 7.33442 5.93457 6.83654C5.93457 6.33867 6.33818 5.93506 6.83606 5.93506C7.33393 5.93506 7.73754 6.33867 7.73754 6.83654ZM11.0647 10.1639C11.0647 10.6618 10.6611 11.0654 10.1632 11.0654C9.66531 11.0654 9.2617 10.6618 9.2617 10.1639C9.2617 9.66607 9.66531 9.26246 10.1632 9.26246C10.6611 9.26246 11.0647 9.66607 11.0647 10.1639ZM10.8339 7.12289C11.0981 6.85863 11.0981 6.43019 10.8339 6.16595C10.5696 5.9017 10.1412 5.90171 9.87691 6.16597L6.17366 9.86939C5.90942 10.1336 5.90942 10.5621 6.17368 10.8263C6.43794 11.0906 6.86637 11.0906 7.13062 10.8263L10.8339 7.12289Z"
            fill="#005CAB"
          />
        </svg>

        {/* Paragraph */}
        <p className="jakarta">Clicca per vedere le statistiche.</p>
      </div>

      {/* Statistics  */}
      <motion.div
        className="emp_statistics"
        initial={{
          height: "0",
          border: "2px solid transparent",
          borderRadius: "none",
          padding: "0px",
          marginBottom: "0px",
          opacity: 1,
        }}
        animate={{
          height: showEmpStatistics ? "200px" : "0",
          border: showEmpStatistics
            ? "2px solid #efefef"
            : "2px solid transparent",
          borderRadius: showEmpStatistics ? "8px" : "none",
          marginBottom: showEmpStatistics ? "20px" : "0px",
          opacity: showEmpStatistics ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{ overflow: "hidden" }}
      >
        <div className="banner_cards">
          {/* Card Left */}
          <div className="bc_left">
            {/* Title */}
            <div className="card_title">
              <img src="./images/number-of-edit.png" alt="" />
              <p>Number of Edits</p>
            </div>

            {/* Counter */}
            <div className="counter">
              <h1 className="jakarta">1,203</h1>
            </div>

            {/* statistics */}
            <div className="statistics">
              {/* result */}
              <div className="result">
                <img src="./images/increase.png" alt="increase" />
                <p className="jakarta">1.32%</p>
              </div>

              <p>Last 7 days</p>
            </div>
          </div>

          {/* Card Center */}
          <div className="bc_center">
            {/* Title */}
            <div className="card_title">
              <img src="./images/spent-per-hour.png" alt="" />
              <p>Average Time Spent per Day</p>
            </div>

            {/* Counter */}
            <div className="counter">
              <h1 className="jakarta">3h 21m</h1>
            </div>

            {/* statistics */}
            <div className="statistics">
              {/* result */}
              <div className="result">
                <img src="./images/increase.png" alt="increase" />
                <p className="jakarta">+46m</p>
              </div>

              <p>Last Month</p>
            </div>
          </div>

          {/* Card Left */}
          <div className="bc_right">
            {/* Title */}
            <div className="card_title">
              <img src="./images/number-of-edits.png" alt="" />
              <p>Top Number of Edits</p>
            </div>

            {/* Counter */}
            <div className="counter">
              <h1 className="jakarta">4th</h1>
            </div>

            {/* statistics */}
            <div className="statistics">
              {/* result */}
              <div className="result">
                <img src="./images/decrease.png" alt="decrease" />
                <p className="jakarta">-2</p>
              </div>

              <p>Last Month</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmployeeCard;
