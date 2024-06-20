import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.id}
          onClick={() => openRepoInNewTab(repo.url)}
          className="repo-content"
        >
          {repo.image && (
            <div>
              <img className="repo-image" src={repo.image} alt={repo.name} />
            </div>
          )}

          <div className="repo-title">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>

          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>

          <ProjectLanguages logos={repo.languages} />
        </div>
      </Fade>
    </div>
  );
}
