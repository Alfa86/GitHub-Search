import React from "react";
import Search from "./input";
import "./style/style.scss";
import User from "./UserInfo";

export default class App extends React.Component {
  state = {
    query: "",
    user: [],
    repo: [],
    loading: false,
  };

  setQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  querySearch = () => {
    this.setState({ loading: true });

    fetch(`https://api.github.com/users/${this.state.query}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ loading: false });
        this.setState({ user: user });
      });

    fetch(`https://api.github.com/users/${this.state.query}/repos`)
      .then((response) => response.json())
      .then((repo) => {
        // this.setState({ loading: false });
        this.setState({ repo: repo });
      });
  };

  render() {
    if (this.state.loading) {
      return <h4>Loading users info...</h4>;
    } else {
      return (
        <div className="App">
          <Search querySearch={this.querySearch} setQuery={this.setQuery} />
          <User
            img={this.state.user.avatar_url}
            name={this.state.user.name}
            location={this.state.user.location}
            bio={this.state.user.bio}
          />
          <div className="repo-list">
            {this.state.repo.map((repo) => {
              return (
                <>
                  <div>
                    <b>Repo Id:</b> {repo.id} | <b>Repo name:</b> {repo.name}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
