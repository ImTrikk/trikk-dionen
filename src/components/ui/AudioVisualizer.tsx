// components/AudioVisualizer.tsx

import React, { useRef, useEffect, useState } from "react";

declare global {
 interface Window {
  webkitAudioContext: AudioContext;
 }
}

const AudioVisualizer: React.FC = () => {
 const [isPlaying, setIsPlaying] = useState(false);
 const canvasRef = useRef<HTMLCanvasElement | null>(null);
 const audioContextRef = useRef<AudioContext | null>(null);
 const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
 const analyserRef = useRef<AnalyserNode | null>(null);

 const audioSrc = "/audio/monalisa.mp3";

 useEffect(() => {
  // Initialize audio context
  audioContextRef.current = new (window.AudioContext ||
   window.webkitAudioContext)();

  // Fetch and decode audio file
  fetch(audioSrc)
   .then((response) => response.arrayBuffer())
   .then((arrayBuffer) => {
    audioContextRef.current?.decodeAudioData(arrayBuffer, (audioBuffer) => {
     setupAudioNodes(audioBuffer);
    });
   });
 }, []);

 const setupAudioNodes = (audioBuffer: AudioBuffer) => {
  if (!audioContextRef.current || !canvasRef.current) return;

  const analyser = audioContextRef.current.createAnalyser();
  analyser.fftSize = 128;
  analyserRef.current = analyser;

  const source = audioContextRef.current.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(analyser);
  analyser.connect(audioContextRef.current.destination);
  sourceNodeRef.current = source;

  // Start visualization
  draw();
 };

 const togglePlayPause = () => {
  if (!audioContextRef.current || !sourceNodeRef.current) return;

  if (!isPlaying) {
   // Create new source node when playing
   const source = audioContextRef.current.createBufferSource();
   source.buffer = sourceNodeRef.current.buffer;
   source.connect(analyserRef.current!);
   source.start();
   sourceNodeRef.current = source;
  } else {
   sourceNodeRef.current.stop();
  }
  setIsPlaying(!isPlaying);
 };

 const draw = () => {
  if (!canvasRef.current || !analyserRef.current) return;

  const canvas = canvasRef.current;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  // Use the existing analyser instead of creating a new one
  const analyser = analyserRef.current;
  const frequencyBufferLength = analyser.frequencyBinCount;
  const frequencyData = new Uint8Array(frequencyBufferLength);

  const canvasContext = canvas.getContext("2d");
  if (!canvasContext) return;

  const barWidth = canvas.width / frequencyBufferLength;

  const renderFrame = () => {
   requestAnimationFrame(renderFrame);
   canvasContext.clearRect(0, 0, canvas.width, canvas.height);

   analyser.getByteFrequencyData(frequencyData);

   const scaleFactor = 0.1;
   const centerX = canvas.width / 2; // Get the horizontal center point

   // Only process half of the frequency data to create mirror effect
   const halfLength = Math.floor(frequencyBufferLength / 2);

   for (let i = 0; i < halfLength; i++) {
    const barHeight = frequencyData[i] * scaleFactor;
    canvasContext.fillStyle = `#00${frequencyData[i]
     .toString(16)
     .padStart(2, "0")}00`;

    // Left side (going left from center)
    canvasContext.fillRect(
     centerX - i * barWidth - barWidth,
     canvas.height - barHeight,
     barWidth - 1,
     barHeight
    );

    // Right side (going right from center)
    canvasContext.fillRect(
     centerX + i * barWidth,
     canvas.height - barHeight,
     barWidth - 1,
     barHeight
    );
   }
  };

  renderFrame();
 };

 return (
  <div className="">
   <button
    onClick={togglePlayPause}
    className="h-10 w-10 rounded-full bg-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)] flex items-center justify-center cursor-pointer z-50"
   >
    {isPlaying ? "⏸️" : "▶️"}
   </button>
   <div style={{ transform: "none", width: "100%", height: "100%" }}>
    <canvas
     ref={canvasRef}
     style={{
      width: "30%",
      height: "100px%",
      display: "block",
      bottom: 0,
     }}
    />
   </div>
  </div>
 );
};

export default AudioVisualizer;
