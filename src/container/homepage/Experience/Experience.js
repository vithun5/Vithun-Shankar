import React from "react";
import styles from "./Experience.module.scss";
const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Al Rajhi Takaful (ART)",
      role: "Full stack developer",
      duration: "October 2023 - present ",
      description:
        "I worked as a frontend developer using Angular for the Al Rajhi Takaful insurance website , focusing on building responsive and user-friendly interfaces. The platform offers a wide range of insurance services, including medical, MMP, life, travel, and domestic helper coverage. My role involved optimizing performance, enhancing user experience, and ensuring seamless integration with backend APIs to deliver a smooth and intuitive customer journey across different devices",
    },
    {
      id: 2,
      company: "SK-II GEN3",
      role: "FrontEnd Developer",
      duration: "February 2023 - October 2023",
      description:
        "I worked as a frontend developer using ReactJS for the SK-II beauty product website, which has over four versions in different languages, including Singaporean, English, Chinese, Taiwanese, and Japanese. I was responsible for maintaining and optimizing the frontend across all versions of the site.",
    },
    {
      id: 3,
      company: "P&G PAMPERS US DEVOPS",
      role: "ReactJS Developer",
      duration: "February 2022 - 2023",
      description:
        "I contributed as a frontend developer on the P&G Pampers project in the US, utilizing ReactJS and Contentful to enhance user experience. Additionally, I actively participated in team meetings and collaborated on bug fixes to improve overall project quality.",
    },
  ];
  return (
    <div id="experience">
      <div className={styles["timeline-card"]}>
        <div
          className={styles["timeline-container"]}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            flexDirection: "column",
            width: "65%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "85%",
              backgroundColor: "#16423C ",
              position: "absolute",
              right: "50%",
            }}
            className={styles["centerline"]}
          ></div>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={styles["timeline-item"]}
              style={{
                display: "flex",
                alignSelf: exp.id % 2 === 0 ? "flex-end" : "flex-start",
              }}
            >
              <div
                className={styles["card"]}
                style={{
                  width: "340px",
                  height: "fit-content",
                  borderRadius: "16px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{exp.duration}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {exp.company}
                  </h6>
                  <p className="card-text">{exp.role}</p>
                  <p className="card-text">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
