// Step 1: Import React
import React, { useState } from "react";
import { MemoizedVideoPlayer } from "../component/video-player";
import VideoOverlay from "../component/video-overlay";

// Step 2: Define your component
const IndexPage = () => {


const [startTime, setStartTime] = useState(1630430724714);
const [controls, setControls] = useState(true);
const [ended, setEnded] = useState(false);
const [duration, setDuration] = useState(null);
const [playing, setPlaying] = useState(true);


let date = new Date();
let currentTime = date.getTime();
let timePlayed = (currentTime - startTime) % 1000;

const endVideo = () => {
  if (controls === false && ended === true) {
    if (playing === false) {
      return;
    } else {
      setPlaying(false);
    }
  } else {
    setControls(false);
    setEnded(true);
    setPlaying(false);
  }
};

const videoDuration = (num) => {
  setDuration(num);
};

if (timePlayed > duration) {
  endVideo();
}

const restartLive = () => {
  let newDate = new Date();
  let newStartTime = newDate.getTime();
  setStartTime(newStartTime);
  setEnded(false);
  setPlaying(true);
  setControls(true);
};

  return (
    <main>
      <title>Live Streaming event</title>
      <h1>Welcome to my Gatsby site Streaming event</h1>
      <p>I'm making a streaming event with Gatsby</p>

      <div className="live-event-container">
        {/* Our VideoPlayer component */}
        <MemoizedVideoPlayer
          ended={ended}
          timePlayed={timePlayed}
          controls={controls}
          endVideo={endVideo}
          videoDuration={videoDuration}
        />
        {ended ? <VideoOverlay /> : null}
      </div>
      {/* Our Restart button */}
      <button className="reset-button" onClick={restartLive}>
        Restart Streaming event
      </button>
    </main>
  );
};

// Step 3: Export your component
export default IndexPage;
