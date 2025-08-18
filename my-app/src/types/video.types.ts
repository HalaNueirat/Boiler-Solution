export interface IVideoProps {
  title: string;
  body: string;
  videoSrc: string;
}

export interface IPlayPauseButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}
