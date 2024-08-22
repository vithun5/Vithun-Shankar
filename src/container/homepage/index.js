import {
  Typography,
  Box,
  Container,
  Avatar,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Hotjar from "@hotjar/browser";
import { CardMedia } from "@mui/material";
import { Link } from "react-scroll";
import Herophoto from "../../assets/images/myphoto.jpg";
import stjosephs from "../../assets/images/stjosephs.jpg";
import stjosephs1 from "../../assets/images/stjosephs1.jpg";
import postit from "../../assets/images/postit.PNG";
import blogger from "../../assets/images/bloggerapp.PNG";
import githubfinder from "../../assets/images/githubFinder.PNG";
import Typed from "react-typed";
import pharmacy from "../../assets/images/pharmacy-store.png";
import googlethemed from "../../assets/images/google-themed.PNG";
import "./index.styles.scss";
import Navbar from "./Navbar/Navbar";

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTitleScrolled, setIsTitleScrolled] = useState(false);
  const [isNumberRevealed, setIsNumberRevealed] = useState(false);
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
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

  //HandlePhoneReveal
  const handleReveal = () => {
    setIsNumberRevealed(true);
  };

  //HandleEmailReveal
  const handleEmail = () => {
    setIsEmailRevealed(true);
  };

  //education card

  const handleCard = () => {
    setActiveItem(true);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* NAVBAR */}
      <Navbar isScrolled={isScrolled} isTitleScrolled={isTitleScrolled} />

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
                      "Coder",
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
                  explore new tools and frameworks to enhance my capabilities
                  and deliver impactful solutions. Whether I'm building web
                  applications or diving into the latest tech trends, I'm always
                  eager to tackle new challenges and push the boundaries of
                  what's possible.
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
                        <span style={{ fontWeight: "900" }}>Vithun </span>{" "}
                        Shankar
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
                    Full Stack Developer. My expertise extends to Java and
                    Spring Boot for robust back-end development, and I also
                    leverage Angular to create dynamic and responsive user
                    interfaces. Committed to improving myself every day, I
                    strive to deliver innovative and effective solutions across
                    the full stack.{" "}
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
                <Typography className="subtitle1">
                  FrontEnd Developer
                </Typography>
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
                    like singapore, English, Chinese, Taiwan, Japan, Tokyo etc.
                    I worked as a Frontend developer to maintain all the
                    frontend work of all websites.
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
                <Typography className="subtitle1">
                  FrontEnd Developer
                </Typography>
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
                    like singapore, English, Chinese, Taiwan, Japan, Tokyo etc.
                    I worked as a Frontend developer to maintain all the
                    frontend work of all websites.
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
                <Typography className="title2">
                  {" "}
                  P&G PAMPERS US DEVOPS
                </Typography>
                <Typography className="subtitle2">
                  React.JS Developer
                </Typography>
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

      {/*education */}

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

      {/* Awards */}
      <div id="awards">
        <section className="awards-section">
          <Container className="awards-container">
            <Box className="row award" style={{ color: "white" }}>
              <Box
                className="col-md-3 col-sm-6"
                style={{ textAlign: "center" }}
              >
                <i class="bi bi-lightbulb" style={{ fontSize: "75px" }}></i>
                <Typography sx={{ fontSize: "50px" }}>116</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  COMPLETED PROJECTS
                </Typography>
              </Box>
              <Box className="col-md-3 col-sm-6">
                <i class="bi bi-trophy" style={{ fontSize: "75px" }}></i>
                <Typography sx={{ fontSize: "50px" }}>2</Typography>
                <Typography sx={{ fontSize: "16px" }}>AWARDS</Typography>
              </Box>
              <Box className="col-md-3 col-sm-6">
                <i class="bi bi-cup-hot" style={{ fontSize: "75px" }}></i>
                <Typography sx={{ fontSize: "50px" }}>1005</Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  FACEBOOK FRIENDS
                </Typography>
              </Box>
              <Box className="col-md-3 col-sm-6">
                <i class="bi bi-dropbox" style={{ fontSize: "75px" }}></i>
                <Typography sx={{ fontSize: "50px" }}>2 </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  CURRENT PROJECTS
                </Typography>
              </Box>
            </Box>
          </Container>
        </section>
      </div>

      {/* Portfolio */}
      <div id="portfolio">
        <section className="portfolio-section">
          <Container className="portfolio-container">
            <Box className="portfolio-title">
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  letterSpacing: "2px",
                  fontFamily: "Roboto",
                  fontSize: "30px",
                }}
              >
                Portfolio
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "30px",
                  color: "gray",
                  marginBottom: "50px",
                }}
              >
                Check out my latest and greatest creations. Get in touch with me
                to learn more about them in detail.
              </Typography>
            </Box>
            <Box className="row " style={{ gap: "80px" }}>
              <Box className="col-md-5">
                <Card
                  sx={{
                    maxWidth: 522,
                    height: "100%",
                    marginBottom: "80px",
                    boxShadow: "0px 3px 19px black",
                  }}
                  className="card-first"
                >
                  <CardMedia sx={{ height: 300 }} image={postit} />
                  <CardContent sx={{}}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                        marginBottom: "8px",
                      }}
                    >
                      Social media clone Application
                    </Typography>
                    <Typography>
                      Designed and developed a Social Media Clone that can be
                      <br></br>
                      used by users.The User can login to his/her account using
                      <br></br>
                      their credentials, The User can like, unlike and view the
                      <br></br>
                      comments of the post and they can upload their own post as
                      <br></br>
                      well User can also change between light mode and dark mode
                      <br></br>
                      Technology used:{" "}
                      <span style={{ fontWeight: "600" }}>
                        React JS ,Node Js, Express Js, MongoDB, React-router,
                        Material UI, Redux, redux-persist
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href="https://github.com/vithun5/PostIT-social-media-clone-"
                      style={{
                        border: "1px solid",
                        color: "darkmagenta",
                        margin: "auto",
                      }}
                    >
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Box>
              <Box className="col-md-5">
                <Card
                  sx={{
                    maxWidth: 522,
                    height: "100%",
                    marginBottom: "80px",
                    boxShadow: "0px 3px 19px black",
                  }}
                  className="card-second"
                >
                  <CardMedia sx={{ height: 300 }} image={blogger} />
                  <CardContent sx={{}}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                        marginBottom: "8px",
                      }}
                    >
                      Blogging Application
                    </Typography>
                    <Typography>
                      Designed and developed a simple Blog posting application.
                      The user can add a blog and edit it.Technologies/Tools
                      used:{" "}
                      <span style={{ fontWeight: "600" }}>
                        React Js, Redux, Express js, Html, Css,{" "}
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href="https://github.com/vithun5/Blogger"
                      style={{
                        border: "1px solid",
                        color: "darkmagenta",
                        margin: "auto",
                      }}
                    >
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Box>
              <Box className="col-md-5">
                <Card
                  sx={{
                    maxWidth: 522,
                    height: "100%",
                    marginBottom: "80px",
                    boxShadow: "0px 3px 19px black",
                  }}
                  className="card-third"
                >
                  <CardMedia sx={{ height: 300 }} image={pharmacy} />
                  <CardContent sx={{}}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                        marginBottom: "8px",
                      }}
                    >
                      Pharmacy Store
                    </Typography>
                    <Typography>
                      It is a Full stack Pharmacy Store application till payment
                      using stripe. Technology used:{" "}
                      <span style={{ fontWeight: "600" }}>
                        React Js, Redux, Express js, Html, Css, Stripe,
                        redux-persist{" "}
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href="https://github.com/vithun5/Pharmacy-Store"
                      style={{
                        border: "1px solid",
                        color: "darkmagenta",
                        margin: "auto",
                      }}
                    >
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Box>
              <Box className="col-md-5">
                <Card
                  sx={{
                    maxWidth: 522,
                    height: "100%",
                    marginBottom: "80px",
                    boxShadow: "0px 3px 19px black",
                  }}
                  className="card-fourth"
                >
                  <CardMedia sx={{ height: 300 }} image={githubfinder} />
                  <CardContent sx={{}}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                        marginBottom: "8px",
                      }}
                    >
                      GITHUB Finder
                    </Typography>
                    <Typography>
                      It is a simple Github user finder where user can search
                      for Github profile and view it .
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href="https://github.com/vithun5/Github-finder-using-Reactjs"
                      style={{
                        border: "1px solid",
                        color: "darkmagenta",
                        margin: "auto",
                      }}
                    >
                      Source
                    </Button>
                  </CardActions>
                </Card>
              </Box>
              <Box className="col-md-5">
                <Card
                  sx={{
                    maxWidth: 550,
                    height: "100%",
                    marginBottom: "80px",
                    boxShadow: "0px 3px 19px black",
                  }}
                  className="card-fourth"
                >
                  <CardMedia sx={{ height: 300 }} image={googlethemed} />
                  <CardContent sx={{}}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                        marginBottom: "8px",
                      }}
                    >
                      Google Themed Personal Portfolio
                    </Typography>
                    <Typography>
                      It is my google themed personal portfolio inspired from an
                      article. Technology used:{" "}
                      <span style={{ fontWeight: "600" }}>
                        Next.JS and Styled-Component
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href="https://github.com/vithun5/Google_Themed_Personal_Portfolio"
                      style={{
                        border: "1px solid",
                        color: "darkmagenta",
                        margin: "auto",
                      }}
                    >
                      Source
                    </Button>
                    <Button
                      size="small"
                      href="https://google-themed-personal-portfolio.vercel.app/"
                      style={{ margin: "auto" }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Box>
          </Container>
        </section>
        <div className="footer">
          <div className="footer-title">Copyright © 2023 Vithun Shankar </div>
          <Box className="Social_Icons_footer">
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
        </div>
      </div>

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
