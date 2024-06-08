export const handleResize = () =>
  document.documentElement.style.setProperty('--scale', (document.documentElement.clientWidth / 1080).toString());
