import { BsCalendarEvent } from "react-icons/bs";
import { Link } from "react-router-dom";
import DateLine from "../basic/DateLine";
import Title from "../basic/Title";
import HomeBtm from "../home/HomeBtm";
import HomeCounter from "../home/HomeCounter";
import HomeRecords from "../home/HomeRecords";
import { useAuth } from "../../middleware/AuthContext";

export default function Home() {
  const { userInfo } = useAuth();
  return (
    <div className="home">
      <div className="container">
        <Title title={` Benvenuto, ${userInfo?.name?.firstName}`} />
        <div className="home-dateline">
          <div className="home-dateline-left">
            <strong>Monday, 08 July 2023.</strong>
            <span>
              You’ve 5 new booking request, Checkout more in{" "}
              <Link to="booking">Booking Request</Link>
            </span>
          </div>
          <DateLine
            data={[
              "Today",
              " Last day",
              "Last 7 days",
              "Last Month",
              "Last Year",
            ]}
            defaultText="show:"
            icon={<BsCalendarEvent />}
          />
        </div>
        <HomeCounter />
        <HomeRecords />
        <HomeBtm />
      </div>
    </div>
  );
}
