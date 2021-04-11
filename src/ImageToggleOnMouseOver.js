import React, { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImage, secondaryImage }) => {
  const handleMouseOver = () => (imageRef.current.src = secondaryImage);
  const handleMouseOut = () => (imageRef.current.src = primaryImage);

  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      src={primaryImage}
      ref={imageRef}
      alt="image"
    />
  );
};

export default ImageToggleOnMouseOver;
