import { useState, useRef, useEffect } from "react";

interface VideoCardProps {
  aspectRatio?: string;
  src: string;
  backgroundImage?: string;
}

export default function CommonVideoPlayer({
  aspectRatio,
  src,
  backgroundImage,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    }
  }, [isPlaying]);

  return (
    <div
      className="position-relative w-100 rounded-4 overflow-hidden"
      style={{ aspectRatio: aspectRatio }}
    >
      {!isPlaying ? (
        <div
          className="w-100 h-100"
          role="button"
          onClick={() => setIsPlaying(true)}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
        >
          {/* Custom Play Button */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <button
              type="button"
              className="btn btn-light btn-lg rounded-circle shadow"
              style={{
                width: "70px",
                height: "70px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-play-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-.833.037-.833-.527V4.138c0-.564.293-.84.833-.527l6.363 3.692c.54.313.54.82 0 1.034z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls
          className="w-100 h-100"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
