import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../header/Sidebar";

export default function Index() {
  const [padding, setPadding] = useState(0);
  const [isFull, setIsFull] = useState(true);
  useEffect(() => {
    const nav = document.getElementById("nav");
    setPadding(nav.offsetWidth);
  }, [isFull]);
  return (
    <>
      <div
        style={{
          paddingLeft: `${padding}px`,
        }}
        className="main"
      >
        <Header />
        <div className="main-body">
          <Outlet />
        </div>
      </div>
      <Sidebar isFull={isFull} setIsFull={setIsFull} />
    </>
  );
}
