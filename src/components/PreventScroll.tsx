import React, { useEffect, useRef } from 'react';

const PreventScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    const options: AddEventListenerOptions = { passive: false };

    container.addEventListener('touchmove', preventScroll, options);

    return () => {
      container.removeEventListener('touchmove', preventScroll, options);
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default PreventScroll;
