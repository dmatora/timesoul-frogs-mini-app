import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useFrogs } from '../contexts/FrogsContext';
import styled from 'styled-components';

interface TapAnimationItem {
  x: number;
  y: number;
  center: number;
  date: number;
}

const Container = styled.div`
  margin: 0 auto;

  .tap-animation-container {
    position: relative;
    z-index: 50;
  }

  .tap-animation {
    font-size: 32px;
    font-weight: 700;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    height: 32px;
    justify-content: center;
    line-height: 1;
    pointer-events: none;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100px;
    z-index: 60;
  }
`;

const TapsAnimated = ({ children }: { children: React.ReactNode }) => {
  const { earnPerTap, energy } = useFrogs();
  const earnButtonRef = useRef<HTMLDivElement>(null);
  const [tapAnimationData, setTapAnimationData] = useState<TapAnimationItem[]>([]);
  const scale = Number(getComputedStyle(document.documentElement).getPropertyValue('--scale'));

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (energy < earnPerTap || tapAnimationData.filter((item) => Date.now() - item.date < 500).length > 5) return;

    let x = 0;
    let y = 0;
    let center = 0;

    if (earnButtonRef.current) {
      const rect = earnButtonRef.current.getBoundingClientRect();
      x = event.clientX / scale - rect.left / scale - 50 + randomOffset();
      y = event.clientY / scale - rect.bottom / scale - 25;
      center = rect.width / 2 - 25;
    }

    setTapAnimationData((prevData) => [...prevData, { x, y, center, date: Date.now() }]);

    setTimeout(() => {
      setTapAnimationData((prevData) => prevData.slice(1));
    }, 1000);
  };

  const randomOffset = () => {
    const offset = Math.random() * 20 - 10;
    return Math.round(offset);
  };

  return (
    <Container>
      <div onPointerUp={onPointerUp} ref={earnButtonRef} style={{ border: 'none', background: 'transparent' }}>
        {children}
      </div>
      <div className="tap-animation-container">
        {tapAnimationData.map((item) => (
          <motion.div
            key={item.date}
            className="tap-animation"
            style={{ fontSize: 75 }}
            initial={{ opacity: 1, y: item.y, x: item.x }}
            animate={{ opacity: 0, y: item.y - 140 / scale }}
            transition={{ type: 'spring', stiffness: 30 }}
          >
            +{earnPerTap}
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default TapsAnimated;
