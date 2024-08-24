import React from "react";
import PropTypes from "prop-types";
import "./Parallex.module.scss";
import { Typography, Box } from "@mui/material";
import { Link } from "react-scroll";

const Parallex = () => (
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
);

Parallex.propTypes = {};

Parallex.defaultProps = {};

export default Parallex;
