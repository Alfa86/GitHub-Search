import React, { useState, useEffect } from "react";
import Search from "./input";
import "./style/style.scss";
import User from "./UserInfo";

export default class App extends React.Component {
  state = {
    query: "",
    user: null,
  };

  setQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  // const [data, setData] = useState(null);
  querySearch = () => {
    fetch(`https://api.github.com/users/${this.state.query}`)
      .then((response) => response.json())
      .then((user) => this.setState({ user: user }));
  };

  componentDidMount() {
    this.querySearch();
  }

  render() {
    if (!this.state.user) {
      return <h4>Loading users info...</h4>;
    } else {
      return (
        <div className="App">
          <Search querySearch={this.querySearch} setQuery={this.setQuery} />
          {/* <Search /> */}
          <User
            img={this.state.user.avatar_url}
            name={this.state.user.name}
            location={this.state.user.location}
            bio={this.state.user.bio}
          />
        </div>
      );
    }
  }
}
