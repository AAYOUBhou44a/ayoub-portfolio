import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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

      <p>
        Designed & built by{" "}
        <strong>Ayoub Houdda</strong> with 💜
      </p>
    </footer>
  );
}

export default Footer;