import { useEffect, useState } from 'react';

interface DataStreamProps {
  className?: string;
  intensity?: number;
}

interface StreamLine {
  id: number;
  x: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function DataStream({ className = "", intensity = 20 }: DataStreamProps) {
  const [streams, setStreams] = useState<StreamLine[]>([]);

  useEffect(() => {
    const generateStreams = () => {
      const newStreams: StreamLine[] = [];
      for (let i = 0; i < intensity; i++) {
        newStreams.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 2 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.7,
        });
      }
      setStreams(newStreams);
    };

    generateStreams();
    const interval = setInterval(generateStreams, 8000);
    
    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-neon to-transparent animate-data-stream"
          style={{
            left: `${stream.x}%`,
            animationDelay: `${stream.delay}s`,
            animationDuration: `${stream.duration}s`,
            opacity: stream.opacity,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      {/* Additional cyberpunk elements */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-pink rounded-full animate-pulse opacity-60" />
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-neon rounded-full animate-ping opacity-40" />
      <div className="absolute top-1/2 left-2/3 w-0.5 h-0.5 bg-neon-pink rounded-full animate-pulse opacity-80" />
      
      {/* Scanning lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent animate-scan opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent animate-scan opacity-20" 
           style={{ animationDelay: '1s' }} />
    </div>
  );
}
