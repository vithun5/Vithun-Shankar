import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Hotjar from "@hotjar/browser";
import { CardMedia } from "@mui/material";
import { Link } from "react-scroll";

import postit from "../../assets/images/postit.PNG";
import blogger from "../../assets/images/bloggerapp.PNG";
import githubfinder from "../../assets/images/githubFinder.PNG";
import Typed from "react-typed";
import pharmacy from "../../assets/images/pharmacy-store.png";
import googlethemed from "../../assets/images/google-themed.PNG";
import "./index.styles.scss";
import Navbar from "./Navbar/Navbar";
import HomepageInfo from "./HomepageInfo/HomepageInfo";
import AboutPage from "./AboutPage/AboutPage";
import Parallex from "./Parallex/Parallex";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Awards from "./Awards/Awards";
import Portfolio from "./Portfolio/Portfolio";

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTitleScrolled, setIsTitleScrolled] = useState(false);

  const [activeItem, setActiveItem] = useState(false);
  const [showPampers, setShowPampers] = useState(false);
  const [showSK, setShowSK] = useState(false);

  //Navbar Active
  useEffect(() => {
    const handleTitleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsTitleScrolled(true);
      } else {
        setIsTitleScrolled(false);
      }
    };
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleTitleScroll);
  }, [isScrolled]);

  //FeedBAck
  const siteId = 3424228;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);

  //education card

  const handleCard = () => {
    setActiveItem(true);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* NAVBAR */}
      <Navbar isScrolled={isScrolled} isTitleScrolled={isTitleScrolled} />

      {/* HOMEPAGE */}
      <HomepageInfo />

      {/* About page */}
      <AboutPage />
      {/* Parallex */}
      <Parallex />

      {/* Experience */}
      <Experience />
      {/*education */}

      <Education />

      {/* Awards */}
      <Awards />

      {/* Portfolio */}
      <Portfolio />

      {/* footer */}
      {/* <div id="footer">
        <section className="footer-section">
          <Container>
            <Box>
              <Typography>Copyright 2023</Typography>
            </Box>
          </Container>
        </section>
      </div> */}
    </div>
  );
};

export default Homepage;
