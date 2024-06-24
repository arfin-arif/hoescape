import { useEffect, useRef, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import values from "../../../values";
import profileImg from "../../assets/images/profile.png";
import Dropdown from "./Dropdown";
import { useAuth } from "../../middleware/AuthContext";

export default function Profile() {
  const [isDropdown, setIsDropdown] = useState(false);
  const ref = useRef(null);
  const { userInfo } = useAuth();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsDropdown(false);
      }
    });
  }, []);

  const dropdownHandler = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <div className="profile" ref={ref}>
      <div className="img">
        <img src={profileImg} alt="" />
      </div>
      <div onClick={dropdownHandler} className="profile-body">
        <strong>
          {userInfo?.name?.firstName + " " + userInfo?.name?.lastName}
        </strong>
        <span>{userInfo?.securityLevel}</span>
      </div>
      <div className="profile-btn">
        <button onClick={dropdownHandler}>
          <BiSolidDownArrow />
        </button>
      </div>
      {isDropdown && <Dropdown data={values.profileMenu} />}
    </div>
  );
}
