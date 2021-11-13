import React from "react";

export const ImgGrid = ({ data }) => {
  return (
    <div className="gif-grid">
      {data.map((gif) => (
        <div className="gif-item" key={gif}>
          <img src={gif} alt={gif} />
        </div>
      ))}
    </div>
  );
};

export default ImgGrid;
