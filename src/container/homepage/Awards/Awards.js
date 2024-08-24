import React from "react";
import PropTypes from "prop-types";
import "./Awards.module.scss";
import { Typography, Box, Container } from "@mui/material";

const Awards = () => {
  return (
    <div id="awards">
      <section className="awards-section">
        <Container className="awards-container">
          <Box className="row award" style={{ color: "white" }}>
            <Box className="col-md-3 col-sm-6" style={{ textAlign: "center" }}>
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
  );
};

Awards.propTypes = {};

Awards.defaultProps = {};

export default Awards;
