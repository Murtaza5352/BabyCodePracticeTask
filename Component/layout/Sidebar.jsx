import React from "react";
import styles from "./layout.module.scss";
const Sidebar = () => {
  return (
    <>
      <div style={{ minWidth: "300px" }}></div>
      <div className={styles.sidebar}>
        <div>
          <article>
            <img src="/logo.svg" alt="" /> BabyCode
          </article>
          <section>
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
          </section>
        </div>
        <div>
          <article>
            <hgroup>Explore Premium Features with ease!</hgroup>
            <span>
              <span>
                <img src="/check-mark.png" alt="" /> Unlimited Speaking Test
                Access
              </span>
              <span>
                <img src="/check-mark.png" alt="" /> Unlimited Writinging Test
                Access
              </span>
              <span>
                <img src="/check-mark.png" alt="" />
                Analyze Your Answer
              </span>
              <span>
                <img src="/check-mark.png" alt="" />
                Check Band Score
              </span>
            </span>
            <section>
              <span>Only @ 200</span>
              <p>
                Buy Now <img src="/ArrowCircleRight (1).png" alt="" />
              </p>
            </section>
          </article>

          <p>
            <img src="/logout.png" alt="" /> Logout
          </p>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
