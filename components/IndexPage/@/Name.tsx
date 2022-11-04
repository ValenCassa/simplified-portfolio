import { styled } from "config/stitches.config";

const Name = styled("h1", {
  fontSize: "17px",
  fontWeight: "600",
  color: "$primaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkPrimaryTextColor",
  },
});

export default Name;
