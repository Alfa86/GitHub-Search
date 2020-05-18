import React from "react";

const RepoList = (repo) => {
  return (
    <div className="user__card--info">
      <p>
        <b>Repo name:</b> {repo.name} | <b>Repo Id:</b> {repo.id}
      </p>
    </div>
  );
};

export default RepoList;
