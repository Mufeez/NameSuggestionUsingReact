import React from "react";
import "./ResultsContainer.css";
import Name from "./Namecard/Namecard";

const resultContainer = ({ suggestedNames }) => {
  const suggestedNamesList = suggestedNames.map((suggestedName) => {
    return <Name key={suggestedName} suggestedName={suggestedName} />;
  });
  return <div className="results-container">{suggestedNamesList}</div>;
};

export default resultContainer;
