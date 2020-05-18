import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <p>GitHub Username:</p>
          <div className="header__container--query-input">
            <input
              type="text"
              placeholder="e.g. facebook"
              onChange={this.props.setQuery}
            />
            <button onClick={this.props.querySearch}>GO!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
