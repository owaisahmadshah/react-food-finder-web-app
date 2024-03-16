import React from "react";
import { useState } from "react";

const DisplayItemDetails = ({ header, explainer }) => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <div className="flex">
        <p className="text-lg font-bold">{header}</p>{" "}
        <p
          onClick={() => handleClick()}
          className="cursor-pointer text-2xl mx-2 "
        >
          {showData ? "-" : "+"}
        </p>
      </div>
      {showData && <div>{explainer}</div>}
    </div>
  );
};

export default DisplayItemDetails;
