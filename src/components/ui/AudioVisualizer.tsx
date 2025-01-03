import { useState, useEffect, useRef } from "react";

export const AudioVisualizer: React.FC = () => {
 const canvasRef = useRef<HTMLCanvasElement | null>(null);
 const audioContextRef = useRef<AudioContext | null>(null);
 const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
 const [isPlaying, setIsPlaying] = useState(false);
 const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(
  null
 );

 const audioSrc = "/audio/monalisa.mp3"; // The audio file path

 const visualize = (audioBuffer: AudioBuffer) => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  const audioContext = audioContextRef.current;
  if (!audioContext) return;

  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 512;

  const frequencyBufferLength = analyser.frequencyBinCount;
  const frequencyData = new Uint8Array(frequencyBufferLength);

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  setAudioSource(source);

  const canvasContext = canvas.getContext("2d");
  if (!canvasContext) return;

  const barWidth = canvas.width / frequencyBufferLength;

  const draw = () => {
   requestAnimationFrame(draw);

   // Clear the canvas
   canvasContext.clearRect(0, 0, canvas.width, canvas.height);

   // Get frequency data
   analyser.getByteFrequencyData(frequencyData);

   const heightScale = 0.25; // Adjust for visual appearance

   // Draw frequency bars
   for (let i = 0; i < frequencyBufferLength; i++) {
    const barHeight = frequencyData[i] * heightScale;
    canvasContext.fillStyle = `rgba(${frequencyData[i]}, 118, 138, 0.8)`;
    canvasContext.fillRect(
     i * barWidth,
     canvas.height - barHeight,
     barWidth - 1,
     barHeight
    );
   }
  };

  draw();
 };

 const handlePlay = () => {
  if (audioContextRef.current && audioBuffer) {
   const audioContext = audioContextRef.current;

   if (isPlaying) {
    audioSource?.stop();
    setIsPlaying(false);
   } else {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
    setAudioSource(source);
    setIsPlaying(true);
   }
  }
 };

 useEffect(() => {
  const audioContext = new (window.AudioContext ||
   (window as any).webkitAudioContext)();
  audioContextRef.current = audioContext;

  const fetchAudio = async () => {
   const response = await fetch(audioSrc);
   const arrayBuffer = await response.arrayBuffer();
   audioContext.decodeAudioData(arrayBuffer, (decodedAudioBuffer) => {
    setAudioBuffer(decodedAudioBuffer);
    visualize(decodedAudioBuffer);
   });
  };

  fetchAudio();
 }, [audioSrc]);

 return (
  <div>
   <button
    onClick={handlePlay}
    disabled={!audioBuffer}
    style={{
     width: "60px",
     height: "60px",
     borderRadius: "50%",
     backgroundColor: isPlaying ? "green" : "#4caf50", // Green color for play button
     border: "none",
     color: "white",
     fontSize: "24px",
     boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)",
     cursor: "pointer",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     transition: "all 0.3s ease",
    }}
   >
    {isPlaying ? "❚❚" : "▶️"}
   </button>
   <canvas
    id="canvas"
    ref={canvasRef}
    style={{ width: "100%", height: "200px", backgroundColor: "transparent" }}
   ></canvas>
  </div>
 );
};
