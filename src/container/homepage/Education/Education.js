import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Education.module.scss";
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { CardMedia } from "@mui/material";
import stjosephs from "../../../assets/images/stjosephs.jpg";
import Typed from "react-typed";
import stjosephs1 from "../../../assets/images/stjosephs1.jpg";

const Education = () => {
  const [activeItem, setActiveItem] = useState(false);
  const handleCard = () => {
    setActiveItem(true);
  };
  return (
    <div id="education">
      <section className="education-section">
        <Container className="education-container">
          <Box className="Education-title">
            <Typography
              variant="h4"
              sx={{
                textTransform: "uppercase",
                fontWeight: "500",
                letterSpacing: "2px",
                fontFamily: "Roboto",
              }}
              className="title1"
            >
              Education
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "30px",
                color: "gray",
                marginBottom: "50px",
              }}
              className="subtitle1"
            >
              The stuff I am made up of.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "30px",
                color: "gray",
                marginBottom: "50px",
              }}
              className="subtitle1"
            >
              2017-2021
            </Typography>
          </Box>
          <Box className="Card-Box">
            {/* First card */}

            <Card
              sx={{
                maxWidth: 522,
                height: 380,
                marginBottom: "80px",
                boxShadow: "0px 3px 19px black",
              }}
              className="card1"
            >
              <CardMedia sx={{ height: 140 }} image={stjosephs} />
              <CardContent sx={{}}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    letterSpacing: "2px",
                  }}
                >
                  Bachelor of Engineering in Information Technology.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "gray",
                    fontWeight: "500px",
                    letterSpacing: "2px",
                    marginBottom: "10px",
                  }}
                >
                  St Joseph's Institute of technology(First Class)
                </Typography>
                <Typography>
                  This course covers the basic theoretical aspects of Computer
                  Software and Engineering with basics of engineering like
                  Mechanical and Electrical Engineering with workshop
                  experience.
                </Typography>
              </CardContent>
              {!activeItem && (
                <CardActions>
                  <Button size="small" onClick={handleCard}>
                    Learn More
                  </Button>
                </CardActions>
              )}
            </Card>

            {/* Second Card */}
            {activeItem && (
              <Card
                sx={{
                  maxWidth: 522,
                  height: 380,
                  marginBottom: "80px",
                  boxShadow: "0px 3px 19px black",
                }}
                className="card2"
              >
                <CardMedia sx={{ height: 140 }} image={stjosephs1} />
                <CardContent sx={{}}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    <Typed
                      strings={[
                        "My final project was TRAFFIC SIGNAL VIOLATION DETECTION USING DEEP LEARNING. The aim of this To detect the violation of Traffic signal i.e., if any vehicle crossing the signal when the signal is Red then it is traffic rules violation. Also to enhance the localization tasks.,the goal of the project is to automate the traffic signal violation detection system and make it easy for the traffic police department to monitor the traffic and take action against the violated vehicle owner in a fast and efficient way.",
                      ]}
                      typeSpeed={30}
                    />
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Box>
        </Container>
      </section>
    </div>
  );
};

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
