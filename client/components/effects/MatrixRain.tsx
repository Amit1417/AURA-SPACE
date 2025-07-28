import { useEffect, useRef } from 'react';

const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);

    const draw = () => {
      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(8, 12, 16, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ffff';
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = CHARS.charAt(Math.floor(Math.random() * CHARS.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add glow effect
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 10;
        ctx.fillText(text, x, y);
        ctx.shadowBlur = 0;

        // Random reset
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
}
