import { styled } from "config/stitches.config";

const SectionTitle = styled("h2", {
  fontSize: "15px",
  fontWeight: "400",
  display: "inline-block",
  color: "$primaryTextColor",
  borderBottom: "2px solid $secondaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkPrimaryTextColor",
    borderBottom: "1px solid $darkSecondaryTextColor",
  },
});

export default SectionTitle;
