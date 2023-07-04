import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Olá, Meu Nome é Rafael</h2>
        <div className="prompt">
          <p>
            Um desenvolvedor de software back-end apaixonado por aprender e
            codar.
          </p>
          <a href="https://www.linkedin.com/in/rafaamartins/">
            <LinkedInIcon />
          </a>
          <a href="mailto:rafaelgemelli1@hotmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/rafaelmarttins">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, jQuery, StyledComponents</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, .NET, ExpressJS, SQLite, SQLServer</span>
          </li>
          <li className="item">
            <h2>Linguagem</h2>
            <span>JavaScript, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
