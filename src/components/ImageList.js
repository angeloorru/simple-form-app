import "../style/ImageList.css";
import React from "react";
import ImageCardRender from "./ImageCardRender";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCardRender key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
