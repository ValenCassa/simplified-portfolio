import { CSSProperties } from "@stitches/react";
import { styled } from "config/stitches.config";
import { motion } from "framer-motion";
import { useActiveSection } from "hooks/useActiveSection";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  name: string;
  css?: CSSProperties;
}

const Container = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "visible",
});

const MotionContainer = motion(Container);

const BlurredContainer = styled("div", {
  position: "absolute",
  left: "-30%",
  width: "160%",
  height: "100%",
  backdropFilter: "blur(2px)",
  zIndex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  display: "none",
  pointerEvents: "none",
  '[data-theme="dark"] &': {
    backgroundColor: "rgba(28, 28, 28, 0.1)",
  },
  "@lg": {
    display: "block",
  },
  variants: {
    active: {
      true: {
        opacity: 1,
      },
    },
  },
});

const ContentContainer = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
});

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const SectionContainer = ({ children, name, css }: SectionContainerProps) => {
  const { section, setSection } = useActiveSection();
  const active = section !== name && section !== null;

  return (
    <MotionContainer
      onMouseOver={() => setSection(name)}
      onMouseLeave={() => setSection(null)}
      css={{ ...css }}
      variants={variants}
    >
      <BlurredContainer active={active} />
      <ContentContainer>{children}</ContentContainer>
    </MotionContainer>
  );
};

export default SectionContainer;
