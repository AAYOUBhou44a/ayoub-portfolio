import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">

        <div className="image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Ayoub Houdda"
          />
        </div>

        <div className="content">

          <div className="social_icons">
            <a
              href="https://github.com/AAYOUBhou44a"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/ayoub-houdda-9a7730397/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Ayoub Houdda</h1>

          <p>Full Stack Web Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/AAYOUBhou44a"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/ayoub-houdda-9a7730397/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;