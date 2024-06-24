import { Route, Routes } from "react-router-dom";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";
import EditModule from "../pages/EditModule";
import Home from "../pages/Home";
import Hotel from "../pages/Hotel";
import HotelDetails from "../pages/HotelDetails";
import HotelEdit from "../pages/HotelEdit";
import Index from "../pages/Index";
import Login from "../pages/Login";
import Modules from "../pages/Modules";
import Transport from "../pages/Transport";
import PrivateRoute from "./PrivateRoute";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route
          path="hotel"
          element={
            <PrivateRoute>
              <Hotel />
            </PrivateRoute>
          }
        />
        <Route
          path="hotel/:id"
          element={
            <PrivateRoute>
              <HotelDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="hotel/edit/:id"
          element={
            <PrivateRoute>
              <HotelEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="module"
          element={
            <PrivateRoute>
              <Modules />
            </PrivateRoute>
          }
        />
        <Route
          path="transport"
          element={
            <PrivateRoute>
              <Transport />
            </PrivateRoute>
          }
        />
        <Route
          path="module/edit/:id"
          element={
            <PrivateRoute>
              <EditModule />
            </PrivateRoute>
          }
        />
        <Route
          path="setting"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
