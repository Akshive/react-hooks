import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        console.info(
          <img src={`/static/speakers/bw/Speaker-${speakerId}.jpg`} />
        );
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImage={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImage={`/static/speakers/Speaker-${speakerId}.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
