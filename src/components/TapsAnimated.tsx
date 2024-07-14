import React, { useRef, useState } from 'react';
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
    opacity: 1;
    animation: fadeOut 1s linear forwards;
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
      top: -150vh;
    }
  }
`;

const TapsAnimated = ({ children }: { children: React.ReactNode }) => {
  const { earnPerTap, energy } = useFrogs();
  const earnButtonRef = useRef<HTMLDivElement>(null);
  const [tapAnimationData, setTapAnimationData] = useState<TapAnimationItem[]>([]);
  const scale = Number(getComputedStyle(document.documentElement).getPropertyValue('--scale'));
  const [ix, setIx] = useState(0);

  // console.log("RENDER TAPS: ", ix);
  // console.log({ tapAnimationData });

  const tap = async (event: React.PointerEvent<HTMLDivElement>) => {
    if (energy >= earnPerTap) {
      createTapAnimation(event);
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

    const i = ix % 10; // max 10 elements
    const arr = [...tapAnimationData];
    arr[i] = { x, y, center, date: Date.now() };
    setIx(i + 1);
    setTapAnimationData(arr);
  };

  const randomOffset = () => {
    const offset = Math.random() * 20 - 10;
    return Math.round(offset);
  };

  return (
    <Container>
      <div onPointerUp={tap} ref={earnButtonRef} style={{ border: 'none', background: 'transparent' }}>
        {children}
      </div>
      <div className="tap-animation-container">
        {tapAnimationData.map((item) => (
          <div
            key={item.date}
            className="tap-animation"
            style={{
              fontSize: 75,
              top: `${item.y}px`,
              left: `${item.x}px`,
            }}
          >
            +{earnPerTap}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TapsAnimated;
