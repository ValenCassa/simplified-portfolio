import Box, { MotionBox } from "components/@/Box";
import { styled } from "config/stitches.config";
import { ReactNode, useState } from "react";
import HomeIcon from "public/svg/HomeIcon.svg";
import WritingsIcon from "public/svg/WritingsIcon.svg";
import ProjectsIcon from "public/svg/ProjectsIcon.svg";
import Link from "next/link";
import { useTheme } from "next-themes";
import SunIcon from "public/svg/SunIcon.svg";
import MoonIcon from "public/svg/MoonIcon.svg";
import { useOnScroll } from "hooks/useOnScroll";
import { AnimatePresence, motion } from "framer-motion";

const MenuContainer = motion(
  styled("div", {
    position: "fixed",
    width: "90%",
    maxHeight: "50px",
    bottom: "1em",
    background: "$dockBackground",
    border: "$dockBorder",
    zIndex: 6,
    borderRadius: "0.5em",
    filter:
      "drop-shadow(0px 14px 8px rgba(0, 0, 0, 0.01)) drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.02)) drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.02)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.02))",
    transition: "background 0.2s ease-in-out !important",

    '[data-theme="dark"] &': {
      background: "$darkDockBackground",
      border: "$darkDockBorder",
    },
    display: "grid",
    placeContent: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    "@sm": {
      display: "none",
    },
  })
);

const MenuItem = ({ icon, href }: { icon: ReactNode; href: string }) => {
  const { theme } = useTheme();
  return (
    <Link href={href} style={{ all: "unset" }}>
      <MotionBox
        css={{
          position: "relative",
          display: "grid",
          padding: "0.5em",
          placeContent: "center",
          userSelect: "none",
          "& svg": {
            position: "relative",
            width: "25px",
            height: "25px",
            color: "$dockIcon",
          },
        }}
        whileTap={{ backgroundColor: theme === "dark" ? "#373737" : "#E1E1E1" }}
      >
        {icon}
      </MotionBox>
    </Link>
  );
};

const ThemeItem = () => {
  const { theme, setTheme } = useTheme();
  return (
    <MotionBox
      role={"button"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      css={{
        position: "relative",
        display: "grid",
        padding: "0.5em",
        placeContent: "center",
        userSelect: "none",
        "& svg": {
          position: "relative",
          width: "25px",
          height: "25px",
          color: "$dockIcon",
        },
      }}
      whileTap={{ backgroundColor: theme === "dark" ? "#373737" : "#E1E1E1" }}
    >
      {theme ? theme === "light" ? <MoonIcon /> : <SunIcon /> : null}
    </MotionBox>
  );
};

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const MobileMenu = () => {
  const { show } = useOnScroll();
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AnimatePresence initial mode="wait">
        {show && (
          <MenuContainer
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="mobile-menu"
            transition={{ duration: 0.4 }}
          >
            <MenuItem icon={<HomeIcon />} href="/" />
            <MenuItem icon={<WritingsIcon />} href="/posts" />
            <MenuItem icon={<ProjectsIcon />} href="/projects" />
            <ThemeItem />
          </MenuContainer>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default MobileMenu;
