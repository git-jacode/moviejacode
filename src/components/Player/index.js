import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => (
  <ReactPlayer
    controls
    url="https://firebasestorage.googleapis.com/v0/b/movienowjacode.appspot.com/o/movies%2Fthe-big-bang-theory%2Fepisodeo1.mp4?alt=media&token=2b208816-3b78-40b4-ae3f-97841306b573"
    playing
  />
);

export default Player;
