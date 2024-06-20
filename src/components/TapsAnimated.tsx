import React, { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
  const buttonAnimation = useAnimation();
  const scale = Number(getComputedStyle(document.documentElement).getPropertyValue('--scale'));

  const tap = async (event: React.PointerEvent<HTMLDivElement>) => {
    if (energy >= earnPerTap) {
      createTapAnimation(event);
      // await animateTap(event);
    }
  };

  const createTapAnimation = (event: { clientX: number; clientY: number }) => {
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
    }, 2000);
  };

  const animateTap = async (event: React.PointerEvent<HTMLDivElement>) => {
    if (earnButtonRef.current) {
      const rect = earnButtonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const deltaX = event.clientX - x;
      const deltaY = (y - event.clientY) * 0.1;
      const rotateY = deltaX * 0.1;
      const rotateX = deltaY;

      await buttonAnimation.start({
        translateZ: -5,
        rotateX,
        rotateY,
        transition: { duration: 0.15 },
      });

      await buttonAnimation.start({
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.15 },
      });
    }
  };

  const randomOffset = () => {
    const offset = Math.random() * 20 - 10;
    return Math.round(offset);
  };

  return (
    <Container>
      <motion.div
        onPointerUp={tap}
        ref={earnButtonRef}
        animate={buttonAnimation}
        style={{ border: 'none', background: 'transparent' }}
      >
        {children}
      </motion.div>
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
