import { useEffect, useRef, useState } from "react";
import { RiNotification2Fill } from "react-icons/ri";
import values from "../../../values";
import Dropdown from "../basic/Dropdown";
import Profile from "../basic/Profile";
import Search from "../basic/Search";

export default function Header() {
  const [isNotifix, setIsNotific] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsNotific(false);
      }
    });
  }, []);

  const notificHandler = () => {
    setIsNotific(!isNotifix);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-title">
          <h3>Deshboard</h3>
        </div>
        <div className="header-form">
          <Search />
        </div>
        <div className="header-right">
          <div ref={ref} className="notific">
            <button onClick={notificHandler}>
              <RiNotification2Fill />
              <span>5</span>
            </button>
            {isNotifix && <Dropdown data={values.notific} />}
          </div>
          <Profile />
        </div>
      </div>
    </header>
  );
}
