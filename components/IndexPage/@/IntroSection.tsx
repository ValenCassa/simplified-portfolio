import { styled } from "config/stitches.config";
import Name from "./Name";
import SectionContainer from "./SectionContainer";

const Description = styled("p", {
  fontSize: "15px",
  fontWeight: "400",
  color: "$primaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkPrimaryTextColor",
  },
  lineHeight: "25.7px",
});

const CoolText = styled("span", {
  fontFamily: '"Newsreader", serif',
  fontWeight: "500",
});

const IntroSection = () => {
  return (
    <SectionContainer name="Intro">
      <Name>Valentin Cassarino</Name>
      <Description>
        I'm a <CoolText>Front End Developer</CoolText> based in Argentina with a
        passion for designing and coding stuff. Love crafting interfaces and
        building polished web experiences.
      </Description>
    </SectionContainer>
  );
};

export default IntroSection;
