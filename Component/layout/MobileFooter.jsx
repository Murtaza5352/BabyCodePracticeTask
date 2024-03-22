import React from "react";
import styles from "./layout.module.scss";
const MobileFooter = () => {
  return (
    <>
      <div className={styles.MobileFooter}>
        {[
          {
            icon: "/homemain.png",
            name: "Home",
          },
          {
            icon: "/Users.png",
            name: "Community",
          },
          {
            icon: "/Frame 48097125.png",
            name: "Stories",
          },
          {
            icon: "/Storefront.png",
            name: "Shop",
          },
          {
            icon: "/message-square.png",
            name: "FeedBack",
          },
        ].map((val, key) => {
          return (
            <span key={key}>
              <img src={val.icon} alt="" />
              {val.name}
            </span>
          );
        })}
      </div>
    </>
  );
};
export default MobileFooter;
