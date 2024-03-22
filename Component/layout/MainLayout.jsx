"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  const [close, setClose] = useState(true);
  return (
    <>
      <div className="bodywithside">
        <div
          style={!close ? { transform: "translateX(0%)" } : { zIndex: "0" }}
          className={"sidebar"}
        >
          <Sidebar />
        </div>
        <img
          style={
            !close
              ? {
                  transform: "translateX(250px)",
                  top: "40px",
                  filter: "invert(100%)",
                  zIndex: 6,
                  position: "fixed",
                }
              : {}
          }
          onClick={() => setClose(!close)}
          className="menuButton"
          src="/menu.png"
          alt=""
        />
        <div className="mainBody">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
