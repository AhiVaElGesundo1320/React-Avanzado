import React, { useEffect, useRef, useState } from "react";
const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);
  useEffect(() => {
    isPlaying ? ref.current.play() : ref.current.pause();
  });

  return <video ref={ref} src={src} loop playsInline />
};




const EffectoSecundario = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "play" : "pause"}
      </button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default EffectoSecundario;
