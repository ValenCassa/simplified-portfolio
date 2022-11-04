import Box from "components/@/Box";
import { styled } from "config/stitches.config";
import Link from "next/link";
import { Post } from "types/Post";
import { Project } from "types/Project";
import markdownToText from "markdown-to-txt";
import SectionTitle from "./SectionTitle";

type SectionTableProps =
  | {
      name: string;
      type: "post";
      data: Post[];
    }
  | {
      name: string;
      type: "project";
      data: Project[];
    };

const ItemTitle = styled("h3", {
  fontSize: "15px",
  fontWeight: "500",
  color: "$primaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkPrimaryTextColor",
  },
  marginBottom: "0.5em",
  marginTop: "0.5em",
  "@md": {
    marginTop: "1em",
  },
});

const ItemDate = styled("p", {
  fontSize: "15px",
  fontWeight: "400",
  color: "$secondaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
  },
  marginBottom: "0",
  "@md": {
    marginBottom: "1em",
  },
});

const ItemDescription = styled("p", {
  fontSize: "15px",
  fontWeight: "400",
  color: "$secondaryTextColor",
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
  },
  margin: 0,
  padding: 0,
  lineHeight: "140%",
});

const SectionButton = styled("button", {
  fontSize: "13px",
  fontWeight: "400",
  backgroundColor: "$hoverItem",
  border: "none",
  borderRadius: "5px",
  width: "100%",
  padding: "0.6em",
  textAlign: "center",
  cursor: "pointer",
  marginTop: "1.5em",
  transition: "background-color 0.2s ease-in-out",
  color: "$primaryTextColor",
  "&:hover": {
    backgroundColor: "$gray400",
  },
  '[data-theme="dark"] &': {
    backgroundColor: "$darkHoverItem",
    color: "$darkPrimaryTextColor",
    "&:hover": {
      backgroundColor: "$darkGray400",
    },
  },
});

const ItemImage = styled("div", {
  width: "100%",
  height: "140px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "5px",
  marginTop: "0.3em",
});

const SectionTable = ({ name, data, type }: SectionTableProps) => {
  return (
    <div>
      <SectionTitle>{name}</SectionTitle>
      <Box
        css={{
          position: "relative",
          display: "grid",
          gap: "1em",
          "@md": {
            gap: type === "post" ? "0.8em" : "0.3em",
          },
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            css={{
              position: "relative",
              display: "flex",
              flexDirection: "column",

              "@md": {
                gap: "3em",
                flexDirection: "row",
                justifyContent: "space-between",
              },
            }}
          >
            <Box
              css={{
                flexShrink: 0,
                "@md": {
                  minWidth: "160px",
                },
              }}
            >
              <ItemDate>
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </ItemDate>
            </Box>
            <Link href={`/${type}s/${item.id}`}>
              <Box
                css={{
                  position: "relative",
                  display: "grid",

                  "&:hover": {
                    "&::before": {
                      backgroundColor: "$hoverItem",
                    },
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    transition: "background-color 0.3s ease-in-out",
                    transform: "scaleX(1.05) scaleY(1.1)",
                    borderRadius: "6px",
                    zIndex: -1,
                    marginTop: "0.3em",
                  },
                  '[data-theme="dark"] &': {
                    "&:hover": {
                      "&::before": {
                        backgroundColor: "$darkHoverItem",
                      },
                    },
                  },
                }}
              >
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>
                  {markdownToText(item.content).substring(0, 120)}...
                </ItemDescription>
                {type === "post" && (
                  <ItemImage
                    css={{ backgroundImage: `url(${item.imageURL})` }}
                  />
                )}
              </Box>
            </Link>
          </Box>
        ))}
        <Link href={`/${type}s`}>
          <SectionButton>See all {type}s</SectionButton>
        </Link>
      </Box>
    </div>
  );
};

export default SectionTable;
