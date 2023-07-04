import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/rafaadev/?hl=pt-br">
          <InstagramIcon />
        </a>
        <a href="https://github.com/rafaelmarttins">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/rafaamartins/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 rafaamartins.netlify.app</p>
    </div>
  );
}

export default Footer;
