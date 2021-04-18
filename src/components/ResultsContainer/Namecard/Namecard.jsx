import React from "react";
import "./Namecard.css";

const namecheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const nameCard = ({ suggestedName }) => {
  return (
    <a
      className="name-card-link"
      href={`${namecheapUrl}${suggestedName}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="result-name-card">
        <p className="result-name">{suggestedName}</p>
      </div>
    </a>
  );
};

export default nameCard;
