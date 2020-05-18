import React, { useState, useEffect } from "react";
import Search from "./input";
import User from "./UserInfo";
import "./App.css";

function App() {
  const API_URI = "https://api.github.com/users/facebook";

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URI)
      .then((response) => response.json())
      .then((user) => setData(user));
  }, []);

  if (!data) {
    return <h2>Loading users info...</h2>;
  }

  return (
    <div className="App">
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
