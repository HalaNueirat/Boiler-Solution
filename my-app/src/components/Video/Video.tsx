import React, {useRef, useState} from "react";
import "./Video.css";
import type {IVideoProps} from "./Video.types";
import Section from "../common/Section";
import PlayPauseButton from "./PlayPauseButton";

const Video: React.FC<IVideoProps> = ({title, body, videoSrc}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleTogglePlay = () => {
    if (!ref.current) return;
    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <Section className="video">
      <div className="info-box">
        <span className="brand">
          prom&#275;tha<sup className="tm">&trade;</sup>
        </span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="video-container">
        <video id="video" width="850" height="400" ref={ref}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <PlayPauseButton isPlaying={isPlaying} onToggle={handleTogglePlay} />
      </div>
    </Section>
  );
};

export default Video;
