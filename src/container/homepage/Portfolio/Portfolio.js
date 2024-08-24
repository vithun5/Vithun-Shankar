import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.module.scss";
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
import postit from "../../../assets/images/postit.PNG";
import blogger from "../../../assets/images/bloggerapp.PNG";
import githubfinder from "../../../assets/images/githubFinder.PNG";
import pharmacy from "../../../assets/images/pharmacy-store.png";
import googlethemed from "../../../assets/images/google-themed.PNG";
const Portfolio = () => {
  return (
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
                    The user can add a blog and edit it.Technologies/Tools used:{" "}
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
                    It is a simple Github user finder where user can search for
                    Github profile and view it .
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
  );
};

Portfolio.propTypes = {};

Portfolio.defaultProps = {};

export default Portfolio;
