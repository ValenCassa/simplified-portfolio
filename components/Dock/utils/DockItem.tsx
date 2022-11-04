import { useSpring, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useDock } from "../../../hooks/useDock";
import { useMouse } from "../../../hooks/useMouse";
import { motion } from "framer-motion";
import { styled } from "../../../config/stitches.config";
import { dockHeight } from "./Dock";

const StyledItem = styled("div", {
  backgroundColor: "$dockItem",
  borderRadius: "15px",
  cursor: "pointer",
  '[data-theme="dark"] &': {
    backgroundColor: "$darkDockItem",
  },
});

const StyledDivider = styled("div", {
  position: "relative",
  width: "1px",
  height: "20px",
  top: "0",
  left: "0",
  transform: "translateY(-50%)",
  background: "$dockDivider",
  margin: "0 0.3em",
  '[data-theme="dark"] &': {
    background: "$darkDockDivider",
  },
});

const MotionItem = motion(StyledItem);

const DockItem = ({
  children,
  divider,
}: {
  children: ReactNode;
  divider?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMouse();
  const dock = useDock();
  const [elCenterX, setElCenterX] = useState<number | null>(null);

  const dimension = useTransform(mouse.position.x, (mouseX) => {
    return (
      dockHeight +
      36 *
        Math.cos(
          (((mouseX - (elCenterX as number)) / (dock.width as number)) *
            Math.PI) /
            2
        ) **
          12
    );
  });

  const spring = useSpring(dockHeight, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  useEffect(() => {
    return dimension.onChange((val) => {
      if (dock.hovered) {
        spring.set(val);
      } else {
        spring.set(dockHeight);
      }
    });
  }, [spring, dimension, dock.hovered]);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    setElCenterX((rect?.x as number) + (rect?.width as number) / 2);
  }, []);

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    const fn = () =>
      setElCenterX((rect?.x as number) + (rect?.width as number) / 2);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  });

  return (
    <>
      <MotionItem
        ref={ref}
        style={{
          width: spring as unknown as number,
          height: spring as unknown as number,
        }}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </MotionItem>
      {divider && (
        <div>
          <StyledDivider />
        </div>
      )}
    </>
  );
};

export default DockItem;
