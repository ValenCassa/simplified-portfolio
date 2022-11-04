import { styled } from "config/stitches.config";
import markdownToTxt from "markdown-to-txt";
import Link from "next/link";
import { Post } from "types/Post";
import { Project } from "types/Project";
import Box, { MotionBox } from "./Box";

type Props =
  | {
      type: "post";
      data: Post[];
    }
  | {
      type: "project";
      data: Project[];
    };

const TitleText = styled("h3", {
  fontSize: "15px",
  color: "$primaryTextColor",
  fontWeight: "600",
  '[data-theme="dark"] &': {
    color: "$darkPrimaryTextColor",
  },
  margin: 0,
  marginTop: "0.5em",
});

const DateText = styled("p", {
  position: "relative",
  display: "inline-block",
  fontSize: "13px",
  color: "$secondaryTextColor",
  fontWeight: "500",
  margin: "0",
  "&::before": {
    borderRadius: "5px",
    content: "",
    display: "inline-block",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "$gray400",
    scale: "1.1",
    zIndex: -1,
    transition: "all 0.3s ease",
  },
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
    "&::before": {
      backgroundColor: "$darkGray400",
    },
  },
});

const Description = styled("p", {
  fontSize: "14px",
  color: "$secondaryTextColor",
  fontWeight: "400",
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
  },
  marginTop: "0.3em",
});

export const TitleSection = ({
  id,
  date,
  title,
}: {
  id: number | undefined;
  date: string;
  title: string;
}) => {
  return (
    <MotionBox layoutId={`${id}-title`}>
      <DateText>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </DateText>
      <TitleText>{title}</TitleText>
    </MotionBox>
  );
};

const PageTable = ({ data, type }: Props) => {
  return (
    <Box css={{ display: "grid", gap: "0.5em" }}>
      {data.map((item) => (
        <Link href={`/${type}s/${item.id}`}>
          <Box
            key={item.id}
            css={{
              position: "relative",
              marginBottom: "1em",
              borderRadius: "10px",
              "&:hover": {
                "&::before": {
                  backgroundColor: "$hoverItem",
                },
              },
              '[data-theme="dark"] &': {
                "&:hover": {
                  "&::before": {
                    backgroundColor: "$darkHoverItem",
                  },
                },
              },
              "&::before": {
                transition: "background-color 0.2s ease-in-out",
                content: "",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0em",
                left: 0,
                transform: "scaleY(1.3) scaleX(1.05)",
                zIndex: -1,
                borderRadius: "10px",
              },
            }}
          >
            <TitleSection id={item.id} date={item.date} title={item.title} />
            <Box>
              <Description>
                {markdownToTxt(item.content).substring(0, 100)}...
              </Description>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default PageTable;
