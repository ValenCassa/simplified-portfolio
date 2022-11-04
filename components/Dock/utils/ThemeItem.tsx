"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { StyledItem, Tooltip } from "./Item";
import SunIcon from "public/svg/SunIcon.svg";
import MoonIcon from "public/svg/MoonIcon.svg";

const ThemeItem = () => {
  const [hover, setHover] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="button"
      style={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Tooltip visible={hover}>Switch Mode</Tooltip>
      <StyledItem>
        {theme ? theme === "light" ? <MoonIcon /> : <SunIcon /> : null}
      </StyledItem>
    </div>
  );
};

export default ThemeItem;
