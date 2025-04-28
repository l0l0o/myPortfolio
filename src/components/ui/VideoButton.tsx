import Image from "next/image";
import React from "react";

const VideoButton = ({
  isPlaying,
  onClick,
}: {
  isPlaying?: boolean;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className="size-8 p-2 relative cursor-pointer">
      <div className="w-full h-full relative">
        <Image src={`/icons/${isPlaying ? "pause" : "play"}.svg`} alt="" fill />
      </div>
    </div>
  );
};

export default VideoButton;
