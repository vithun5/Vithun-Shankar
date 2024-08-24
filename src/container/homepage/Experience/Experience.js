import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Experience.module.scss";
import { Typography, Box, Container } from "@mui/material";

const Experience = () => {
  const [showSK, setShowSK] = useState(false);
  const [showPampers, setShowPampers] = useState(false);
  return (
    <div id="experience">
      <section className="experience-section">
        <Container className="Experience-container">
          <Box sx={{ textAlign: "center", marginTop: "33px" }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "uppercase",
                fontWeight: "500",
                letterSpacing: "2px",
                fontFamily: "Roboto",
              }}
            >
              Experience
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "30px",
                color: "gray",
                marginBottom: "50px",
              }}
            >
              A variety of Experiences.
            </Typography>
          </Box>

          {/* Project 1 */}
          <>
            <Box className="center-line"></Box>
            <Box className="project-icon">
              <i
                class="bi bi-briefcase-fill"
                style={{
                  fontSize: "23px",
                  color: "white",
                  position: "absolute",
                  left: "32%",
                  top: "20%",
                }}
              ></i>
            </Box>
            <Box className="project-details">
              <Typography className="title1">SK-II GEN3</Typography>
              <Typography className="subtitle1">FrontEnd Developer</Typography>
              {!showSK && (
                <i
                  class="bi bi-caret-down-square-fill bg-FF6969"
                  style={{
                    float: "right",
                    fontSize: "20px",
                    position: "relative",
                    bottom: "20px",
                    backgroundColor: "FF6969",
                  }}
                  onClick={() => setShowSK(true)}
                ></i>
              )}
              {showSK && (
                <Typography className="description1">
                  It is a Beauty product Website, Where there are more than 4
                  websites for this product which contains different languages
                  like singapore, English, Chinese, Taiwan, Japan, Tokyo etc. I
                  worked as a Frontend developer to maintain all the frontend
                  work of all websites.
                </Typography>
              )}
            </Box>
            <Typography
              sx={{
                textAlign: "right",
                position: "absolute",
                right: "421px",
                fontSize: "19px",
                letterSpacing: "4px",
                fontFamily: "Montserrat",
              }}
              style={{ top: showSK ? "325px" : "327px" }}
              className="project1-date"
            >
              April 2023 - present
            </Typography>
          </>
          <>
            <Box className="center-line"></Box>
            <Box className="project-icon">
              <i
                class="bi bi-briefcase-fill"
                style={{
                  fontSize: "23px",
                  color: "white",
                  position: "absolute",
                  left: "32%",
                  top: "20%",
                }}
              ></i>
            </Box>
            <Box className="project-details">
              <Typography className="title1">SK-II GEN3</Typography>
              <Typography className="subtitle1">FrontEnd Developer</Typography>
              {!showSK && (
                <i
                  class="bi bi-caret-down-square-fill bg-FF6969"
                  style={{
                    float: "right",
                    fontSize: "20px",
                    position: "relative",
                    bottom: "20px",
                    backgroundColor: "FF6969",
                  }}
                  onClick={() => setShowSK(true)}
                ></i>
              )}
              {showSK && (
                <Typography className="description1">
                  It is a Beauty product Website, Where there are more than 4
                  websites for this product which contains different languages
                  like singapore, English, Chinese, Taiwan, Japan, Tokyo etc. I
                  worked as a Frontend developer to maintain all the frontend
                  work of all websites.
                </Typography>
              )}
            </Box>
            <Typography
              sx={{
                textAlign: "right",
                position: "absolute",
                right: "421px",
                fontSize: "19px",
                letterSpacing: "4px",
                fontFamily: "Montserrat",
              }}
              style={{ top: showSK ? "325px" : "327px" }}
              className="project1-date"
            >
              April 2023 - present
            </Typography>
          </>

          <>
            <Box
              className="completedProject-icon"
              style={{ bottom: showSK ? "132px" : "248px" }}
            >
              <i
                class="bi bi-check2-all"
                style={{
                  fontSize: "23px",
                  color: "white",
                  position: "absolute",
                  left: "32%",
                  top: "20%",
                }}
              ></i>
            </Box>
            <Box className="project-details2">
              <Typography className="title2"> P&G PAMPERS US DEVOPS</Typography>
              <Typography className="subtitle2">React.JS Developer</Typography>
              {!showPampers && (
                <i
                  class="bi bi-caret-down-square-fill bg-FF6969"
                  style={{
                    float: "right",
                    fontSize: "20px",
                    position: "relative",
                    bottom: "20px",
                    backgroundColor: "FF6969",
                  }}
                  onClick={() => setShowPampers(true)}
                ></i>
              )}
              {showPampers && (
                <Typography className="description2">
                  We are a small team of software engineers and testers with
                  varied experience and academic backgrounds.We develop and
                  maintain the website and I worked as a frontend developer.
                </Typography>
              )}
              <Typography
                sx={{
                  position: "relative",
                  right: "572px",
                  fontSize: "19px",
                  letterSpacing: "4px",
                  fontFamily: "Montserrat",
                }}
                style={{ bottom: showPampers ? "114px" : "35px" }}
                className="project2-date"
              >
                February 2022 - 2023
              </Typography>
            </Box>
          </>
        </Container>
      </section>
    </div>
  );
};
Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
