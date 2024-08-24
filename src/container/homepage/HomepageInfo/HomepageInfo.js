import { Typography, Box, Container } from "@mui/material";
import Typed from "react-typed";
import { Link } from "react-scroll";
import "./HomepageInfo.scss";
const HomepageInfo = () => {
  return (
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
  );
};
export default HomepageInfo;
