import React, { createContext, ReactNode, useMemo } from "react";
import { MotionValue, useVelocity } from "framer-motion";
import { useMousePosition } from "../../../hooks/useMouse";

export type Mouse = {
  position: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  velocity: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};

export const MouseContext = createContext<Mouse | null>(null);

export const MouseProvider = ({ children }: { children: ReactNode }) => {
  const { x, y } = useMousePosition();
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const mouse = useMemo(
    () => ({
      position: {
        x,
        y,
      },
      velocity: {
        x: velocityX,
        y: velocityY,
      },
    }),
    [x, y, velocityX, velocityY]
  );

  return (
    <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>
  );
};
