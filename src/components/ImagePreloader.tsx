import { useEffect } from 'react';

const ImagePreloader = ({ images }: { images: string[] }) => {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return null;
};

export default ImagePreloader;
