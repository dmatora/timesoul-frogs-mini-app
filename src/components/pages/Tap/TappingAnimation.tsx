import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 150px;
  height: 113px;
  margin-left: 20px;
  & img {
    margin-top: 5px;
  }
`;

const TappingAnimation = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/img/tap1.png', '/img/tap2.png', '/img/tap3.png'];

  useEffect(() => {
    const sequence = [0, 1, 2, 1];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentImage(sequence[index]);
      index = (index + 1) % sequence.length;
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <img src={images[currentImage]} alt={`Tap ${currentImage + 1}`} />
    </Container>
  );
};

export default TappingAnimation;
