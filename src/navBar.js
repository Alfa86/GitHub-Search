import React from "react";
import gitHubLogo from "./images/GitHub_Logo_White.png";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Icon className="github_mark" path={mdiGithub}></Icon>
        <a href="https://github.com/Alfa86/GitHub-Search" target="_blank">
          <div className="logo">
            <img
              className="logo_img"
              src={gitHubLogo}
              alt="Github search"
            ></img>
            <span className="logo_claim">SEARCH</span>
          </div>
        </a>
      </div>
    );
  }
}

export default NavBar;
