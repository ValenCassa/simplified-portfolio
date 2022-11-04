import { useState, useRef, useEffect, ReactNode } from "react";
import HStack from "./HStack";
import { DockContext } from "./DockContext";

export const dockHeight: number = 38;

const Dock = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    setWidth(ref.current?.clientWidth);
  }, []);

  return (
    <DockContext.Provider value={{ hovered, width }}>
      <HStack
        ref={ref}
        css={{
          position: "fixed",
          bottom: "1em",
          left: "50%",
          transform: "translateX(-50%)",
          alignItems: "flex-end",
          borderRadius: "20px",
          padding: "0.4em 0.6em",
          willChange: "contents",
          boxSizing: "content-box",
          gap: "0.7em",
          height: `${dockHeight}px`,
          background: "$dockBackground",
          border: "$dockBorder",
          display: "none",
          filter:
            "drop-shadow(0px 14px 8px rgba(0, 0, 0, 0.01)) drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.02)) drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.02)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.02))",
          '[data-theme="dark"] &': {
            background: "$darkDockBackground",
            border: "$darkDockBorder",
          },
          zIndex: 100,
          "@sm": {
            display: "flex",
          },
        }}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseOut={() => {
          setHovered(false);
        }}
      >
        {children}
      </HStack>
    </DockContext.Provider>
  );
};

export default Dock;
