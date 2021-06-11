import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import lamar from "./assets/lamar.png";
// import tracks from "./tracks";
import "./audioPlayerStyle.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      handleTrackChange(tracks.length - 1);
    } else {
      handleTrackChange(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      handleTrackChange(trackIndex + 1);
    } else {
      handleTrackChange(0);
    }
  };

  // Handles cleanup and setup when changing tracks
  const handleTrackChange = (newIndex) => {
    setTrackIndex(newIndex);

    audioRef.current.pause();

    audioRef.current = new Audio(tracks[newIndex].audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    audioRef.current.play();
    setIsPlaying(true);
    startTimer();
  };

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handlePlayPause = (isPlaying) => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="player-container">
      <div className="audio-player">
        <img src={lamar} alt="cat" className="lamar"></img>
        <div className="track-info">
          <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
          />
          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={handlePlayPause}
          />
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            onTouchEnd={onScrubEnd}
            style={{ background: trackStyling }}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
