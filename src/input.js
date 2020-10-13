import React from "react";
import DeveloperImg from "./images/github_develope.svg";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

class Search extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <img
            className="search_img"
            src={DeveloperImg}
            alt="Github search"
          ></img>
          <p>GitHub Username:</p>
          <div className="header__container--query-input">
            <form onSubmit={this.props.querySearch}>
              <input
                className="inputSearch"
                type="text"
                placeholder="e.g. facebook"
                onChange={this.props.setQuery}
              />
              <button className="submit-button" type="submit" value="GO!">
                Search <Icon path={mdiMagnify} size={1}></Icon>
              </button>
              {/* <Icon
                path={mdiAccount}
                title="User Profile"
                size={1}
                horizontal
                vertical
                rotate={90}
                color="red"
                spin
              /> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
