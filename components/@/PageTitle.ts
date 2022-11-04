import { styled } from "config/stitches.config";

const PageTitle = styled("h2", {
  fontSize: "18px",
  fontWeight: "600",
  color: "$primaryTextColor",
  '[data-theme="dark"] &': {
    color: "$primaryTextColorDark",
  },
});

export default PageTitle;
