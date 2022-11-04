import { styled } from "config/stitches.config";
import { motion } from "framer-motion";

const Container = styled("div", {
  position: "relative",
  marginTop: "4em",
});

export const MotionContainer = motion(Container);

export default Container;
