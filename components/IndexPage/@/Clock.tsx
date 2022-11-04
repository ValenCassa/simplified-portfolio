import { styled } from "config/stitches.config";
import { useEffect, useState } from "react";
import { countryCodeEmoji } from "country-code-emoji";
import { useClock } from "hooks/useClock";
import { useGeoLocation } from "hooks/useGeolocation";
import { AnimatePresence, motion } from "framer-motion";
import SectionContainer from "./SectionContainer";

const ClockContainer = styled("div", {
  position: "absolute",
  width: "100%",
  fontFamily: '"Menlo", sans-serif',
  textAlign: "center",
  display: "none",
  marginTop: "4em",
  "@md": {
    display: "block",
  },
  zIndex: 2,
});

const ClockText = styled("p", {
  fontSize: "12px",
  fontFamily: '"Menlo", sans-serif',
  color: "$secondaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
  },
});

const ClockInsideText = styled("span", {
  filter: "grayscale(1)",
  transition: "all 0.2s ease-in-out",
  willChange: "filter",
  cursor: "pointer",
  variants: {
    flag: {
      true: {
        "&:hover": {
          filter: "grayscale(0)",
          color: "$primaryTextColor",
          '[data-theme="dark"] &': {
            color: "$darkPrimaryTextColor",
          },
        },
      },
    },
  },
});

const BulletSeparator = styled("span", {
  display: "inline-block",
  width: "0.2em",
  height: "0.2em",
  borderRadius: "50%",
  backgroundColor: "$secondaryTextColor",
  margin: "0 0.5em",
  verticalAlign: "middle",
  '[data-theme="dark"] &': {
    backgroundColor: "$darkPrimaryTextColor",
  },
});

const MotionClockText = motion(ClockText);

const ClockComponent = () => {
  const time = useClock();
  const { location } = useGeoLocation();

  return (
    <ClockContainer>
      <AnimatePresence initial>
        {Boolean(time) && Boolean(location) ? (
          <MotionClockText initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {time}
            <BulletSeparator />
            <ClockInsideText flag>
              {countryCodeEmoji("AR")} Junín, Buenos Aires
            </ClockInsideText>
            <BulletSeparator />
            Last visit from{" "}
            <ClockInsideText flag>
              {countryCodeEmoji(location.country_code)} {location.city},{" "}
              {location.region}
            </ClockInsideText>
          </MotionClockText>
        ) : null}
      </AnimatePresence>
    </ClockContainer>
  );
};

export default ClockComponent;
