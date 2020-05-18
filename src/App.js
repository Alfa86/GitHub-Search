import React, { useState, useEffect } from "react";
import Search from "./input";
import "./style/style.scss";
import User from "./UserInfo";
import "./App.css";

function App() {
  // state = {
  //   query: "",
  // };
  // setQuery = (event) => {
  //   this.setState({ query: event.target.value });
  // };

  const API_URI = "https://api.github.com/users/facebook";

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URI)
      .then((response) => response.json())
      .then((user) => setData(user));
  }, []);

  // querySearch = () => {};

  if (!data) {
    return <h4>Loading users info...</h4>;
  }

  return (
    <div className="App">
      {/* <Search querySearch={this.querySearch} setQuery={this.setQuery} /> */}
      <Search />
      <User
        img={data.avatar_url}
        name={data.name}
        location={data.location}
        bio={data.bio}
      />
    </div>
  );
}

export default App;
