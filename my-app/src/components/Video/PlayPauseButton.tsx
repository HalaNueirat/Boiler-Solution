import React from "react";
import type { IPlayPauseButtonProps } from "../../types/video.types";


const PlayPauseButton: React.FC<IPlayPauseButtonProps> = ({
  isPlaying,
  onToggle,
}) => {
  return (
    <button
      className={isPlaying ? "pause-button" : "play-button"}
      onClick={onToggle}
    >
      <i
        className={`fas fa-${isPlaying ? "pause" : "play"} ${
          isPlaying ? "pause" : "play"
        }-icon`}
      ></i>
    </button>
  );
};

export default PlayPauseButton;
