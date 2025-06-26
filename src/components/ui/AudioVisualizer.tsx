// components/AudioVisualizer.tsx

import React, { useRef, useEffect } from "react";

interface AudioVisualizerProps {
 isPlaying: boolean;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isPlaying }) => {
 const canvasRef = useRef<HTMLCanvasElement | null>(null);
 const audioContextRef = useRef<AudioContext | null>(null);
 const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
 const analyserRef = useRef<AnalyserNode | null>(null);
 const previousFrequencyData = useRef<Uint8Array | null>(null);
 const audioBufferRef = useRef<AudioBuffer | null>(null);
 const requestAnimationFrameId = useRef<number>(0);
 const playbackTimeRef = useRef<number>(0); // Track current playback time
 const startTimestampRef = useRef<number | null>(null); // When playback started

 useEffect(() => {
  // Initialize audio context
  audioContextRef.current = new (window.AudioContext || window.AudioContext)();

  // Start the draw function immediately
  draw();

  // Fetch and decode audio file
  fetch("/audio/monalisa.mp3")
   .then((response) => response.arrayBuffer())
   .then((arrayBuffer) => {
    audioContextRef.current?.decodeAudioData(arrayBuffer, (audioBuffer) => {
     audioBufferRef.current = audioBuffer;
     setupAudioNodes(audioBuffer);
    });
   });

  // Cleanup function
  return () => {
   cancelAnimationFrame(requestAnimationFrameId.current);
  };
 }, []);

 useEffect(() => {
  if (!audioContextRef.current || !audioBufferRef.current) return;

  if (isPlaying) {
   const source = audioContextRef.current.createBufferSource();
   source.buffer = audioBufferRef.current;
   source.connect(analyserRef.current!);
   analyserRef.current?.connect(audioContextRef.current.destination);
   source.start(0, playbackTimeRef.current);
   startTimestampRef.current =
    audioContextRef.current.currentTime - playbackTimeRef.current;
   source.onended = () => {
    // Only reset if we reached the end of the audio
    if (
     audioContextRef.current &&
     playbackTimeRef.current +
      (audioContextRef.current.currentTime - startTimestampRef.current!) >=
      audioBufferRef.current!.duration - 0.05 // allow small margin
    ) {
     playbackTimeRef.current = 0;
     startTimestampRef.current = null;
    }
   };
   sourceNodeRef.current = source;
  } else {
   if (sourceNodeRef.current) {
    if (startTimestampRef.current !== null && audioContextRef.current) {
     playbackTimeRef.current =
      audioContextRef.current.currentTime - startTimestampRef.current;
    }
    sourceNodeRef.current.stop();
    sourceNodeRef.current = null;
    startTimestampRef.current = null;
   }
  }
 }, [isPlaying]);

 const setupAudioNodes = (audioBuffer: AudioBuffer) => {
  if (!audioContextRef.current || !canvasRef.current) return;

  const analyser = audioContextRef.current.createAnalyser();
  analyser.fftSize = 128;
  analyserRef.current = analyser;

  // Start visualization
  draw();
 };

 const draw = () => {
  if (!canvasRef.current || !analyserRef.current) return;

  const canvas = canvasRef.current;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const analyser = analyserRef.current;
  const frequencyBufferLength = analyser.frequencyBinCount;
  const frequencyData = new Uint8Array(frequencyBufferLength);

  const canvasContext = canvas.getContext("2d");
  if (!canvasContext) return;

  const barWidth = canvas.width / frequencyBufferLength;

  const renderFrame = () => {
   requestAnimationFrameId.current = requestAnimationFrame(renderFrame);
   canvasContext.clearRect(0, 0, canvas.width, canvas.height);

   analyser.getByteFrequencyData(frequencyData);

   const scaleFactor = 0.12;
   const centerX = canvas.width / 2;
   const halfLength = Math.floor(frequencyBufferLength / 2);

   for (let i = 0; i < halfLength; i++) {
    const barHeight = frequencyData[i] * scaleFactor;
    canvasContext.fillStyle = `#00${Math.floor(frequencyData[i])
     .toString(16)
     .padStart(2, "0")}00`;

    // Left side
    canvasContext.fillRect(
     centerX - i * barWidth - barWidth,
     canvas.height - barHeight,
     barWidth - 1,
     barHeight
    );

    // Right side
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
  <div className="flex flex-col items-center gap-1">
   <div
    style={{ transform: "none", height: "100px" }}
    className="flex items-center justify-center"
   >
    <canvas
     ref={canvasRef}
     style={{
      width: "100%",
      height: "100px",
      display: "block",
      bottom: 0,
     }}
    />
   </div>
   {isPlaying && (
    <div className="text-gray-500 text-xs font-medium">
     Now Playing: Mona Lisa
    </div>
   )}
  </div>
 );
};

export default AudioVisualizer;
