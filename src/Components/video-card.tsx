import React from "react";
import CommonVideoPlayer from "./common/common-video-player";

interface VideoCardProps {
  src: string;
  backgroundImage?: string;
  aspectRatio?: string;
}

const VideoCard = ({ src, aspectRatio, backgroundImage }: VideoCardProps) => {
  return (
    <div
      style={{ height: "415px", maxWidth: "233px", backgroundColor: "#8FB7DF" }}
      className="d-flex justify-content-center border border-3 p-3 rounded-4"
    >
      <CommonVideoPlayer
        src={src}
        aspectRatio={aspectRatio}
        backgroundImage={backgroundImage}
      />
    </div>
  );
};

export default VideoCard;
