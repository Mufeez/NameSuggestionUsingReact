import React from "react";

const resultContainer = ({ suggestedNames }) => {
  const suggestedNamesList = suggestedNames.map((suggestedName) => {
    return <p>{suggestedName}</p>;
  });
  return (
    <div className="results-container">
      <p>{suggestedNamesList}</p>
    </div>
  );
};

export default resultContainer;
