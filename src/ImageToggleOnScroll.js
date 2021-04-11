import { useEffect, useState, useRef } from "react";

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom < window.innerHeight;
  };

  const scrollHandler = () => {
    setInView(isInView);
  };

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <img
      src={inView ? secondaryImage : primaryImage}
      alt="speaker image"
      ref={imageRef}
    />
  );
};

export default ImageToggleOnScroll;
