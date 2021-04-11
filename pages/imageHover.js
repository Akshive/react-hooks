import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const imageHover = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImage="/static/speakers/bw/Speaker-187.jpg"
        secondaryImage="/static/speakers/Speaker-187.jpg"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImage="/static/speakers/bw/Speaker-1124.jpg"
        secondaryImage="/static/speakers/Speaker-1124.jpg"
      />
    </div>
  );
};

export default imageHover;
