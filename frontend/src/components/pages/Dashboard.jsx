import BannerCards from "../custom/BannerCards";
import DashboardTopBar from "../custom/DashboardTopBar";
import EmployeeList from "../custom/EmployeeList";
import "../styles/Dashboard/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardTopBar />
      <BannerCards />
      <EmployeeList />
    </div>
  );
};

export default Dashboard;
