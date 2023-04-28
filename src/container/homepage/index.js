import { Typography, Box, Container } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import Hotjar from "@hotjar/browser";

import Typed from "react-typed";

import "./index.styles.scss";

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const prevScrollPos = window.pageYOffset;
    if (prevScrollPos === 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  }, [isScrolled]);
  const siteId = 3424228;
  const hotjarVersion = 6;
  Hotjar.init(siteId, hotjarVersion);

  return (
    <div>
      {isScrolled && (
        <section id="header">
          <Container className="Navbar-Container">
            <Box className="Navbar-title">
              <a href="#Home">
                <Typography sx={{ fontSize: "20px" }}>
                  VITHUN SHANKAR{" "}
                </Typography>
              </a>
            </Box>
            <Box className="Navbar-List">
              <ul>
                <a href="#Home">
                  <li>HOME</li>
                </a>
                <a href="#about">
                  <li>ABOUT</li>
                </a>
                <a href="#experienc">
                  <li>EXPERIENCE</li>
                </a>
                <a href="#education">
                  <li>EDUCATION</li>
                </a>
                <a href="#portfolio">
                  <li>PORTFOLIO</li>
                </a>
                <a href="#blog">
                  <li>BLOG</li>
                </a>
                <a href="#contact">
                  <li>CONTACT</li>
                </a>
              </ul>
            </Box>
          </Container>
        </section>
      )}

      <div id="Home">
        <section
          className="Homepage-section"
          style={{ height: "792px", width: "100%" }}
        >
          <div className="overlay"></div>
          <Container className="homepage-container">
            <Box className="homepage-title">
              <Typography variant="h5">Hi, Iam</Typography>

              <Typography variant="h1">VITHUN SHANKAR </Typography>

              <Typography variant="p" className="homepage-subtitle">
                I am a{" "}
                <span className="typist-text">
                  <Typed
                    strings={[
                      "Front End Enthusiast",
                      "Cook",
                      "Gamer",
                      "Web Developer",
                      "FreeLancer",
                    ]}
                    typeSpeed={75}
                    backSpeed={75}
                    loop
                  />
                </span>
              </Typography>
              <Box className="Social_Icons">
                <a href="https://www.facebook.com/vithun.vithun.75/">
                  <i class="fa fa-facebook "></i>
                </a>
                <a href="https://twitter.com/vithun_shankar_">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/vithun-shankar-484031179/">
                  <i class="fa fa-linkedin "></i>
                </a>
                <a href="https://github.com/vithun5?tab=repositories">
                  <i class="fa fa-github "></i>
                </a>
                <a href="https://google-themed-personal-portfolio.vercel.app/">
                  <i class="fa fa-briefcase "></i>
                </a>
              </Box>
            </Box>
            <Box class="Bounce_Icon">
              <a href="#about" className="Bounce_Dot"></a>
            </Box>
          </Container>
        </section>
      </div>
      <div id="about">
        <section>
          <Container>
            <Box>
              <Typography>About</Typography>
              <Typography>Let me introduce myself</Typography>
            </Box>
            <Box className="media-left">
              <Box className="media-body">
                <Typography></Typography>
                <Typography></Typography>
                <Typography></Typography>
              </Box>
            </Box>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
