import React from "react";

interface ImageProps {
  image: string;
  title?: string;
  description?: string;
}

const ImageCard = ({ image, title, description }: ImageProps) => {
  return (
    <div className="position-relative rounded-4">
      <img className="rounded-4" height={"370px"} src={image} alt="" />
      <div
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(195, 195, 195, 0.791)",
        }}
        className="position-absolute text-white bottom-0 mb-3 mx-3 start-0 end-0 text-center rounded-4"
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
