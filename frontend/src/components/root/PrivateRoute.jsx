import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../middleware/AuthContext";
import "./loading-spinner.css";

import { InfinitySpin, Oval } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust this to control the vertical centering
  };
  if (loading) {
    return (
      <div style={containerStyle}>
        <Oval
          height={80}
          width={80}
          color="#005cab"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#005cab"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (user) {
    return children;
  }
};

export default PrivateRoute;
