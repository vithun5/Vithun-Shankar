import { Typography, Box, Container, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Hotjar from "@hotjar/browser";
import { Link } from "react-scroll";
import myphoto from "../../assets/images/myphoto.jpg";

import Typed from "react-typed";

import "./index.styles.scss";

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTitleScrolled, setIsTitleScrolled] = useState(false);
  const [isNumberRevealed, setIsNumberRevealed] = useState(false);
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [showPampers, setShowPampers] = useState(false);

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

  //HandlePhoneReveal
  const handleReveal = () => {
    setIsNumberRevealed(true);
  };

  //HandleEmailReveal
  const handleEmail = () => {
    setIsEmailRevealed(true);
  };
  return (
    <div>
      {/* NAVBAR */}
      {isScrolled && (
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
                <Link to="blog" smooth={true} duration={1000}>
                  <li>BLOG</li>
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                  <li>CONTACT</li>
                </Link>
              </ul>
            </Box>
          </Container>
        </section>
      )}

      {/* HOMEPAGE */}
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
            <Link to="about" smooth={true} duration={1000}>
              <Box class="Bounce_Icon">
                <div className="Bounce_Dot"></div>
              </Box>
            </Link>
          </Container>
        </section>
      </div>

      {/* About page */}
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
                src={myphoto}
                sx={{ width: 130, height: 130 }}
              />
              <Box className="media-body">
                <Typography>
                  I am a Gamer, vegetarian, and an experimental chef. Well, I
                  would like to experiment as much as I can, on food and my
                  life. My body is made up of HTML & CSS, which is literally me!
                  This defines me as a Full Stack Web Developer (Front End, Back
                  End, Middleware, Whatever...).
                </Typography>
                <Typography>
                  Oh yeah, I am a highly motivated, passionate hard-core web
                  developer with diverse experience in developing web
                  applications, hybrid mobile apps, and Python Programming
                  ranging from working on cute layouts, payment gateways
                  etcetera and the list goes on till making a clone, better than
                  Facebook. Yup, you heard it right. I did make a clone of our
                  favourite social network from scratch.
                </Typography>
                <Typography>
                  Oh yeah, I am a highly motivated, passionate hard-core web
                  developer with diverse experience in developing web
                  applications, hybrid mobile apps, and cloud c
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
              >
                <div className="col-md-6 col-sm-6">
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
                    Web Developer, Graphic Designer, and a User Experience
                    Architect.
                    <br />
                    <i className="fa fa-graduation-cap text-success mr-1"></i>
                    Bachelors in Information Technology with First class, St
                    Joseph's Institute of Technology.
                    <br />
                    <i className="fa fa-briefcase text-danger mr-1"></i>
                    1.6+ years Industrial Experience
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
                        <span style={{ fontWeight: "900" }}>Vithun </span>{" "}
                        Shankar
                      </span>
                    </li>
                    <br />
                    <li>
                      <label>Birth Date :</label> <br />
                      <span> 05 September, Every Year </span>
                    </li>
                    <br />
                    <li>
                      <label>Professional Career :</label> <br />
                      <span> Software Engineer, Mern stack Developer </span>
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
                    I have a huge passion in developing applications using
                    React.JS and now I am currently working on Next.JS
                    applications and Improving myself day by day to become a
                    full stack developer{" "}
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
                        Python Programming
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

      {/* Parallex */}
      <div id="parallex">
        <section className="Hire-me">
          <Box className="Hireme-div">
            <Typography sx={{ color: "white" }}>
              May I help you with something? Hire me now.
            </Typography>
            <Link to="contact" smooth={true} duration={1000}>
              <button>Hire Me</button>
            </Link>
          </Box>
        </section>
      </div>

      {/* Experience */}
      <div id="experience">
        <section className="experience-section">
          <Container className="Experience-container">
            <Box sx={{ textAlign: "center", marginTop: "80px" }}>
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
                  marginBottom: "80px",
                }}
              >
                A variety of Experiences all over the world.
              </Typography>
            </Box>
            <Box className="center-line"></Box>
            <Box className="project-details">
              <Typography className="title1">P&G PAMPERS US DEVOPS</Typography>
              <Typography className="subtitle1">React.JS Developer</Typography>
              {!showPampers && (
                <i
                  class="bi bi-caret-down-square-fill"
                  style={{
                    float: "right",
                    fontSize: "20px",
                    position: "relative",
                    bottom: "10px",
                  }}
                  onClick={() => setShowPampers(true)}
                ></i>
              )}
              {showPampers && (
                <Typography className="description1">
                  We are a small team of software engineers and testers with
                  varied experience and academic backgrounds.We develop and
                  maintain the website and I worked as a frontend developer.
                </Typography>
              )}
            </Box>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
