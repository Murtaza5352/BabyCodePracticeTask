"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import LineChart from "../../Component/Chart/LineChart";

export default function Home() {
  const [tab, setTab] = useState("IELTS");
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };
  return (
    <main className={styles.main}>
      <div className={styles.desktop}>
        <div className={styles.header}>
          <img src="/Frame 48096367.png" alt="" />
        </div>
        <div className={styles.body}>
          <div className={styles.Summary}>
            <hgroup>Your Progress Summary</hgroup>
            <div className={styles.chartAndimage}>
              <div className={styles.chart}>
                <LineChart data={chartData} />
              </div>
              <div className={styles.image}>
                <img src="/Frame 427319170.png" alt="" />
                <div className={styles.absolute}>
                  <hgroup>
                    One Share can save
                    <br />
                    many lives
                  </hgroup>
                  <span>
                    Your one share can unlock a world of education for
                    unprivileged
                  </span>
                  <button>Share App</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.EasePrep}>
              <hgroup>Perpare with ease</hgroup>
              <article>
                {[
                  { image: "/Frame 427318922.png", name: "Speaking" },
                  { image: "/Frame 427318923.png", name: "Listening" },
                  { image: "/Frame 427319153.png", name: "Reading" },
                  { image: "/Frame 48097381.png", name: "Writing" },
                  { image: "/Frame 427319150.png", name: "Vocabulary" },
                  { image: "/Frame 427319151.png", name: "Classes" },
                  { image: "/Frame 427319154.png", name: "Book IELTS Exam" },
                  { image: "/Frame 427319114.png", name: "Student News" },
                ].map((val, key) => {
                  return (
                    <span key={key}>
                      <img src={val.image} alt="" />
                      {val.name}
                    </span>
                  );
                })}
              </article>
            </div>
            <div className={styles.guide}>
              <article>
                <img src="/youtube (8) 1.png" alt="" />
                App Guide Video
              </article>
              <section>
                <hgroup>Practice Mock Tests</hgroup>
                <span>
                  Get the authentic IELTS exam experience with alldour modules
                  covered!
                </span>
                <button>Start</button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.header}>
          <article>
            {["IELTS", "PTE", "TOFL"].map((val, key) => (
              <span
                onClick={() => setTab(val)}
                style={
                  val == tab
                    ? {
                        color: "#0945b4",
                        background: "white",
                        boxShadow: "2px 2px 3px 3px rgba(0, 0, 0, 0.1)",
                      }
                    : {}
                }
                key={key}
              >
                {val}
              </span>
            ))}
          </article>
        </div>
        <div className={styles.body}>
          <div className={styles.Summary}>
            <hgroup>
              How many students we helped? <button>Check</button>
            </hgroup>
            <div className={styles.chartAndimage}>
              <div className={styles.chart}></div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.EasePrep}>
              <article>
                {[
                  { image: "/Frame 427318922.png", name: "Speaking" },
                  { image: "/Frame 427318923.png", name: "Listening" },
                  { image: "/Frame 427319153.png", name: "Reading" },
                  { image: "/Frame 48097381.png", name: "Writing" },
                  { image: "/Frame 427319150.png", name: "Vocabulary" },
                  { image: "/Frame 427319151.png", name: "Classes" },
                  { image: "/Frame 427319151.png", name: "Classes" },
                  { image: "/Frame 427319154.png", name: "Book IELTS Exam" },
                  { image: "/Frame 427319114.png", name: "Student News" },
                ].map((val, key) => {
                  return (
                    <span key={key}>
                      <img src={val.image} alt="" />
                      {val.name}
                    </span>
                  );
                })}
              </article>
            </div>
            <div className={styles.guide}>
              <section>
                <img src="/checklist_2936769 1.png" alt="" />
                <article>
                  <hgroup>Practice Mock Tests</hgroup>
                  <span>
                    Get the authentic IELTS exam experience with alldour modules
                    covered!
                  </span>
                </article>
                <button>
                  <img src="/ArrowCircleRight.png" alt="" />
                </button>
              </section>
              <article>
                <hgroup>Explore Premium Features with ease!</hgroup>
                <span>
                  <span>
                    <img src="/check-mark.png" alt="" /> Unlimited Speaking Test
                    Access
                  </span>
                  <span>
                    <img src="/check-mark.png" alt="" /> Unlimited Writinging
                    Test Access
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
                  <span>Only @ 299</span>
                  <p>
                    Buy Now <img src="/ArrowCircleRight (1).png" alt="" />
                  </p>
                </section>
              </article>
            </div>
            <div className={styles.quickActions}>
              <section>
                <article>
                  <img src="/youtube (8) 1.png" alt="" />
                  App Guide Video
                </article>
                <article>
                  <img src="/whatsapp (9) 1.png" alt="" />
                  Help & Support
                </article>
              </section>
              <div className={styles.image}>
                <img src="/Frame 427319170.png" alt="" />
                <div className={styles.absolute}>
                  <hgroup>
                    One Share can save
                    <br />
                    many lives
                  </hgroup>
                  <span>
                    Your one share can unlock a world of education for
                    unprivileged
                  </span>
                  <button>Share App</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
