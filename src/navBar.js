import React from "react";
import githubMark from "./images/github-mark.svg";
import gitHubLogo from "./images/GitHub_Logo_White.png";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        {/* <img className="logo_img" src={githubMark} alt="Github search"></img> */}
        <Icon className="github_mark" path={mdiGithub}></Icon>
        <div className="logo">
          <img className="logo_img" src={gitHubLogo} alt="Github search"></img>
          <span className="logo_claim">SEARCH</span>
        </div>
      </div>
    );
  }
}

export default NavBar;
