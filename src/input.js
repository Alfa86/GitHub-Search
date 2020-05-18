import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <p>GitHub Username:</p>
          <div className="header__container--query-input">
            <form onSubmit={this.props.querySearch}>
              <input
                type="text"
                placeholder="e.g. facebook"
                onChange={this.props.setQuery}
              />
              <input className="submit-button" type="submit" value="GO!" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
