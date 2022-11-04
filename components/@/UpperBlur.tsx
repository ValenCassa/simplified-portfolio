import { styled } from "config/stitches.config";

const UpperBlur = styled("div", {
  position: "fixed",
  width: "100%",
  height: "8%",
  top: 0,
  left: 0,
  background:
    "linear-gradient(180deg, #FCFCFC 0%, rgba(252, 252, 252, 0.01) 121.43%)",
  pointerEvents: "none",
  zIndex: 5,
  transition: "all 0.2s ease-in-out !important",
  '[data-theme="dark"] &': {
    filter: "invert(91%)",
  },
});

export default UpperBlur;
