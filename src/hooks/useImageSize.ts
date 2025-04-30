import { useState, useEffect } from "react";

interface ImageSize {
  width: number;
  height: number;
  isLoading: boolean;
  calculateDimensions: (
    maxWidth: number,
    maxHeight: number
  ) => { width: number; height: number };
}

export default function useImageSize(src: string): ImageSize {
  const [size, setSize] = useState<ImageSize>({
    width: 0,
    height: 0,
    isLoading: true,
    calculateDimensions: () => ({ width: 0, height: 0 }),
  });

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      const calculateDimensions = (maxWidth: number, maxHeight: number) => {
        let finalWidth = img.width;
        let finalHeight = img.height;

        // Vérifier d'abord si la hauteur dépasse la hauteur maximale
        if (finalHeight > maxHeight) {
          const ratio = maxHeight / finalHeight;
          finalHeight = maxHeight;
          finalWidth = finalWidth * ratio;
        }

        // Vérifier ensuite si la largeur ajustée dépasse la largeur maximale
        if (finalWidth > maxWidth) {
          const ratio = maxWidth / finalWidth;
          finalWidth = maxWidth;
          finalHeight = finalHeight * ratio;
        }

        return {
          width: Math.round(finalWidth),
          height: Math.round(finalHeight),
        };
      };

      setSize({
        width: img.width,
        height: img.height,
        isLoading: false,
        calculateDimensions,
      });
    };

    img.onerror = () => {
      setSize({
        width: 0,
        height: 0,
        isLoading: false,
        calculateDimensions: () => ({ width: 0, height: 0 }),
      });
    };
  }, [src]);

  return size;
}
