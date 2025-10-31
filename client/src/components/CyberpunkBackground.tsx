import React, { useEffect, useRef, useState, useCallback } from 'react';

// 1. Definir a interface para a posição do mouse
interface MousePos {
  x: number;
  y: number;
}

// 2. Definir a interface para as partículas
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function CyberpunkBackground() {
  // 3. Tipar corretamente o useRef para o elemento canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 4. Tipar o useState para a posição do mouse
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

  // Variável para armazenar o ID da animação
  // Deve ser tipada como number (retorno de requestAnimationFrame) ou undefined
  let animationId: number | undefined;
  
  // 5. Tipar o handler do evento mousemove
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    // Verificação de segurança e tipagem do contexto
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Partículas
    const particles: Particle[] = [];
    let time = 0;

    // Criar partículas
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: ['#00ff88', '#00ffff', '#ff00ff', '#ff0080'][Math.floor(Math.random() * 4)]
      });
    }

    const drawGrid = () => {
      ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 + Math.sin(time * 0.002) * 0.05})`;
      ctx.lineWidth = 1;

      const gridSpacing = 60;

      // Linhas verticais
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        const waveOffset = Math.sin(time * 0.003 + x * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(x + waveOffset, 0);
        ctx.lineTo(x + waveOffset, canvas.height);
        ctx.stroke();
      }

      // Linhas horizontais
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        const waveOffset = Math.sin(time * 0.003 + y * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(0, y + waveOffset);
        ctx.lineTo(canvas.width, y + waveOffset);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        // Movimento
        p.x += p.vx;
        p.y += p.vy;

        // Bounce nas bordas
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Manter dentro da tela
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Desenhar
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity + Math.sin(time * 0.01) * 0.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    const drawGradientOverlay = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(0, 255, 136, ${0.02 + Math.sin(time * 0.001) * 0.01})`);
      gradient.addColorStop(0.5, `rgba(0, 255, 255, ${0.01})`);
      gradient.addColorStop(1, `rgba(255, 0, 128, ${0.02 + Math.sin(time * 0.001) * 0.01})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawMouseGlow = () => {
      if (mousePos.x === 0 && mousePos.y === 0) return;

      const gradient = ctx.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 300);
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height); // Usa fillRect em todo o canvas para o glow
    };

    const animate = () => {
      // Fundo escuro
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawParticles();
      drawGradientOverlay();
      drawMouseGlow();

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Tipar o handler do evento resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // 7. Verificação para cancelAnimationFrame
      if (animationId !== undefined) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [handleMouseMove, mousePos]); // Adicionado handleMouseMove e mousePos às dependências

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
}