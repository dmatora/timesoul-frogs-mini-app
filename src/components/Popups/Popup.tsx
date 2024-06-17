import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';
import { useFrogs } from '../../contexts/FrogsContext';

const duration = 350;

const PopupOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 2;
  height: 100%;
  background: ${({ open }) => (open ? '#000c' : 'transparent')};
  transition: background ${duration}ms ease-in-out;

  @media (min-width: 1080px) {
    width: 1080px;
    left: 50%;
    margin: 0 auto 0 -540px;
  }

  @media (max-width: 1079px) {
    width: 100%;
  }
`;

const PopupContainer = styled.div<{ open: boolean; height?: number }>`
  color: black;
  font-family: Geologica, sans-serif;
  & button {
    font-family: Geologica, sans-serif;
    color: black;
  }

  position: absolute;
  z-index: 2;
  background: #efedf2;
  border-radius: 95px 95px 0 0;
  bottom: ${({ open, height }) => (open ? '0' : `calc(-${height || 1248}px * var(--scale))`)};
  transition: bottom ${duration}ms ease-in-out;

  width: 890px;
  padding: 95px 95px 50px;
  @media (min-width: 1080px) {
  }

  @media (max-width: 1079px) {
    transform-origin: 0 100%;
    transform: scale(var(--scale));
  }
`;

const CloseButton = styled.button`
  width: 832px;
  height: 170px;
  margin: 44px auto 0;

  background-color: #98e703;
  border: none;
  border-radius: 62px;
  box-shadow: 5px 7px 0 0 #262626;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #262626;
  font-size: 45px;
  font-weight: 600;

  &:active {
    position: relative;
    box-shadow: none;
    top: 5px;
    left: 7px;
  }
`;

const Popup = ({ children, close, height }: { children: React.ReactNode; close?: string; height?: number }) => {
  const [open, setOpen] = useState(false);
  const { clearEvent } = useFrogs();

  const handleClose = () => {
    setOpen(false);
    setTimeout(clearEvent, duration);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <PopupOverlay open={open}>
      <PopupContainer open={open} height={height}>
        <CloseIcon onClick={handleClose} />
        {children}
        <CloseButton onClick={handleClose}>{close || 'Закрыть'}</CloseButton>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default Popup;
