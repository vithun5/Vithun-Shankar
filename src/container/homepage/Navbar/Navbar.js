import { Typography, Box, Container } from "@mui/material";
import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = ({ isScrolled, isTitleScrolled }) => {
  const [isHamburger, setIsHamburger] = useState(false);
  return (
    <div>
      {isScrolled && (
        <div>
          <section id="header">
            <Container className="Navbar-Container">
              <Box className="Navbar-title">
                <Link to="Home" smooth={true} duration={1000}>
                  {isTitleScrolled && (
                    <Typography sx={{ fontSize: "20px" }}>
                      VITHUN <span className="lastName">SHANKAR</span>
                    </Typography>
                  )}
                </Link>
              </Box>
              <Box className="Navbar-List">
                <ul>
                  <Link to="Home" smooth={true} duration={1000}>
                    <li>HOME</li>
                  </Link>
                  <Link to="about" smooth={true} duration={1000}>
                    <li>ABOUT</li>
                  </Link>
                  <Link to="experience" smooth={true} duration={1000}>
                    <li>EXPERIENCE</li>
                  </Link>
                  <Link to="education" smooth={true} duration={1000}>
                    <li>EDUCATION</li>
                  </Link>
                  <Link to="portfolio" smooth={true} duration={1000}>
                    <li>PORTFOLIO</li>
                  </Link>
                  {/* <Link to="contact" smooth={true} duration={1000}>
                      <li>CONTACT</li>
                    </Link> */}
                </ul>
              </Box>
              <Box
                className="hamburger-menu"
                style={{ display: "none", fontSize: "30px", curosr: "pointer" }}
              >
                <i
                  class="bi bi-list"
                  onClick={() => setIsHamburger(!isHamburger)}
                ></i>
              </Box>
            </Container>
            {isHamburger && (
              <div>
                <hr style={{ border: "1px solid black" }}></hr>
              </div>
            )}
            <Box className="hamburgerMenu">
              {isHamburger && (
                <ul>
                  <Link to="Home" smooth={true} duration={1000}>
                    <li>HOME</li>
                  </Link>
                  <Link to="about" smooth={true} duration={1000}>
                    <li>ABOUT</li>
                  </Link>
                  <Link to="experience" smooth={true} duration={1000}>
                    <li>EXPERIENCE</li>
                  </Link>
                  <Link to="education" smooth={true} duration={1000}>
                    <li>EDUCATION</li>
                  </Link>
                  <Link to="portfolio" smooth={true} duration={1000}>
                    <li>PORTFOLIO</li>
                  </Link>
                  {/* <Link to="contact" smooth={true} duration={1000}>
                      <li>CONTACT</li>
                    </Link> */}
                </ul>
              )}
            </Box>
          </section>
        </div>
      )}
    </div>
  );
};

export default Navbar;
