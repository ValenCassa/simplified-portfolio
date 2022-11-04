import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { styled } from "../../../config/stitches.config";

export interface Item {
  icon: ReactNode;
  label: string;
  href: string;
}

export const Tooltip = styled("div", {
  position: "absolute",
  top: "-3em",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "0.4em 0.7em",
  borderRadius: "0.5em",
  background: "$dockItem",
  border: "$dockBorder",
  color: "$primaryTextcolor",
  fontSize: "12px",
  whiteSpace: "nowrap",
  pointerEvents: "none",
  willChange: "opacity",
  transition: "opacity 0.4s ease",
  userSelect: "none",
  variants: {
    visible: {
      true: {
        opacity: "1",
      },
      false: {
        opacity: "0",
      },
    },
  },
  '[data-theme="dark"] &': {
    background: "$darkDockItem",
    border: "$darkDockBorder",
    color: "$darkPrimaryTextColor",
  },
});

const ActiveDot = styled("div", {
  position: "absolute",
  bottom: "-0.35em",
  left: "50%",
  transform: "translateX(-50%)",
  width: "3px",
  height: "3px",
  borderRadius: "100%",
  background: "#A1A1A1",
});

export const StyledItem = styled("div", {
  display: "grid",
  placeContent: "center",
  transition: "background 0.6s ease",

  "& svg": {
    width: "100%",
    height: "100%",
    transform: "scale(0.55)",
    color: "$dockIcon",
  },
  '[data-theme="dark"] &': {
    "& svg": {
      color: "$darkDockIcon",
    },
  },
});

const MotionActiveDot = motion(ActiveDot);

const Item = ({ icon, label, href }: Item) => {
  const [hover, setHover] = useState<boolean>(false);
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <Link
      href={href}
      style={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <Tooltip visible={hover}>{label}</Tooltip>
      <StyledItem>{icon}</StyledItem>
      <AnimatePresence initial mode="wait">
        {active && (
          <MotionActiveDot
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </Link>
  );
};

export default Item;
