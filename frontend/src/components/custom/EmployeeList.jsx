import React from "react";
import "../styles/Dashboard/dashboard.scss";
import EmployeeCard from "./EmployeeCard";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeHeading from "./EmployeeHeading";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ALL_USERS } from "../../useFetch/useFetch";
const EmployeeList = () => {
  // const [employees, setEmployees] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/v1/auth/all-users")
  //     .then((response) => {
  //       setEmployees(response.data.data);
  //       setLoading(false);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: employees = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      try {
        const res = await fetch(`${ALL_USERS}`);
        const data = await res.json();
        return data.data;
      } catch {}
    },
  });

  return (
    <div className="employee_list">
      <EmployeeHeading />
      <EmployeeFilter refetch={refetch} />

      {/* Display loading state while fetching data */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="employee-cards">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              refetch={refetch}
              employee={employee}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
