import React from 'react';
import LevelUp from './Events/LevelUp';
import { useFrogs } from '../../contexts/FrogsContext';

const Popups = () => {
  const { event } = useFrogs();
  if (!event) return;
  if (event.type === 'levelUp') return <LevelUp />;
};

export default Popups;
