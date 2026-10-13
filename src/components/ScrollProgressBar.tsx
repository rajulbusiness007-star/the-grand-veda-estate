import React, { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  height?: number; // Height in pixels, default is 3
  color?: string; // Default #C6A15B
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  height = 3,
  color = '#C6A15B',
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none bg-black/10"
      style={{ height: `${height}px` }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full transition-[width] duration-75 ease-out will-change-[width]"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}80, 0 0 4px ${color}`,
        }}
      />
    </div>
  );
};
