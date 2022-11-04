import { styled } from "config/stitches.config";

const Layout = styled("div", {
  position: "relative",
  width: "100%",
  margin: "0 auto",
  padding: "0 1em",
  "@sm": {
    maxWidth: "678px",
    padding: "5em 0",
  },
});

export default Layout;
