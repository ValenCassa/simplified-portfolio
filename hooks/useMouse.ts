import { useMotionValue } from "framer-motion";
import { Context, useContext, useEffect, useMemo } from "react";
import { Mouse, MouseContext } from "../components/Dock/utils/MouseProvider";

export const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  });

  return useMemo(
    () => ({
      x,
      y,
    }),
    [x, y]
  );
};

export const useMouse = () => {
  return useContext<Mouse>(MouseContext as Context<Mouse>);
};
