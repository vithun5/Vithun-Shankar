import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AboutPage.module.scss";
import { Typography, Box, Container, Avatar } from "@mui/material";
import Herophoto from "../../../assets/images/myphoto.jpg";

const AboutPage = () => {
  const [isNumberRevealed, setIsNumberRevealed] = useState(false);
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  //HandlePhoneReveal
  const handleReveal = () => {
    setIsNumberRevealed(true);
  };

  //HandleEmailReveal
  const handleEmail = () => {
    setIsEmailRevealed(true);
  };
  return (
    <div id="about">
      <section className="aboutPage-Section" style={{ marginTop: "-100px" }}>
        <Container className="aboutPage-container">
          <Box className="my-Title">
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h5"
              className="about-text"
            >
              About
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "35px", lineBreak: "30px" }}
              className="intro-text"
            >
              Let me introduce myself.
            </Typography>
          </Box>
          <Box className="media-left">
            <Avatar
              alt=" myPhoto"
              src={Herophoto}
              sx={{ width: 130, height: 130 }}
            />
            <Box className="media-body">
              <Typography>
                I'm an enthusiastic gamer with a strong passion for coding and
                technology. My skill set includes crafting dynamic user
                experiences using JavaScript, ReactJS, and Angular, as well as
                developing robust back-end systems with Java, Spring Boot, and
                Node.js. With a deep foundation in programming and a knack for
                problem-solving, I approach every project with energy and
                dedication.
              </Typography>
              <Typography>
                Driven by curiosity and a love for innovation, I continuously
                explore new tools and frameworks to enhance my capabilities and
                deliver impactful solutions. Whether I'm building web
                applications or diving into the latest tech trends, I'm always
                eager to tackle new challenges and push the boundaries of what's
                possible.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Container
              sx={{
                display: "flex",
                width: "68%",
                boxSizing: "unset",
              }}
              className="about-mobile"
            >
              <div className="col-md-6 ">
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "900",
                    letterSpacing: "2px",
                    marginBottom: "12px",
                  }}
                >
                  PROFILE
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: "25px",
                    fontWeight: "600",
                    marginBottom: "15px",
                  }}
                >
                  <i className="fa fa-globe text-primary mr-1"></i>
                  full stack Web Developer, Software Engineer, and a Gamer.
                  <br />
                  <i className="fa fa-graduation-cap text-success mr-1"></i>
                  Bachelors in Information Technology with First class, St
                  Joseph's Institute of Technology.
                  <br />
                  <i className="fa fa-briefcase text-danger mr-1"></i>
                  2.8+ years Industrial Experience
                  <br />
                </Typography>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    marginTop: "10px",
                  }}
                  className="info-list"
                >
                  <li>
                    <label>Full Name :</label>
                    <br />
                    <span>
                      <span style={{ fontWeight: "900" }}>Vithun </span> Shankar
                    </span>
                  </li>
                  <br />
                  <li>
                    <label>Birth Date :</label> <br />
                    <span> 05 September </span>
                  </li>
                  <br />
                  <li>
                    <label>Professional Career :</label> <br />
                    <span> Software Engineer, Full stack Developer </span>
                  </li>
                  <br />
                  <li>
                    <label>Phone :</label> <br />
                    <span>
                      +91
                      {!isNumberRevealed ? (
                        <span className="click-phone" onClick={handleReveal}>
                          CLICK-TO-REVEAL
                        </span>
                      ) : (
                        <span style={{ margin: "5px" }}>7010400714</span>
                      )}
                    </span>
                  </li>
                  <br />
                  <li>
                    <label>Email :</label> <br />
                    <span>
                      {!isEmailRevealed ? (
                        <span className="click-email" onClick={handleEmail}>
                          CLICK-TO-REVEAL
                        </span>
                      ) : (
                        <span>rvithun99@gmail.com</span>
                      )}
                    </span>
                  </li>
                  <br />
                </ul>
              </div>
              <div>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "900",
                    letterSpacing: "2px",
                    marginBottom: "12px",
                  }}
                >
                  SKILLS
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: "30px",
                    fontWeight: "600",
                  }}
                >
                  I have a deep passion for developing applications, with a
                  particular focus on ReactJS. Currently, I am working with
                  Angular to build modern, high-performance web applications
                  while continuously honing my skills to become a well-rounded
                  Full Stack Developer. My expertise extends to Java and Spring
                  Boot for robust back-end development, and I also leverage
                  Angular to create dynamic and responsive user interfaces.
                  Committed to improving myself every day, I strive to deliver
                  innovative and effective solutions across the full stack.{" "}
                  <i className="bi bi-emoji-smile-fill text-warning" /> Check
                  Out my Projects{" "}
                  <a href="https://github.com/vithun5">
                    Github <i className="bi bi-github text-primary "></i>
                  </a>
                  <div className="firstProgressBar-div">
                    <div>
                      Web Application Development{" "}
                      <span className="firstProgressStatus">95%</span>
                    </div>
                    <div className="first-ProgressBar"></div>

                    <div>
                      HTML & CSS, JavaScript{" "}
                      <span className="secondProgressStatus">100%</span>
                    </div>
                    <div className="second-ProgressBar"></div>

                    <div>
                      Mobile application Development
                      <span className="thirdProgressStatus">80%</span>
                    </div>
                    <div className="third-ProgressBar"></div>

                    <div>
                      Java Programming
                      <span className="fourthProgressStatus">85%</span>
                    </div>
                    <div className="fourth-ProgressBar"></div>

                    <div>
                      Data Structure and Algorithms
                      <span className="fifthProgressStatus">70%</span>
                    </div>
                    <div className="fifth-ProgressBar"></div>
                  </div>
                </Typography>
              </div>
            </Container>
          </Box>
        </Container>
      </section>
    </div>
  );
};

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
