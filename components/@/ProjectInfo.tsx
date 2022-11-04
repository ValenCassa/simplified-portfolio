import { styled } from "config/stitches.config";
import Link from "next/link";
import { Project } from "types/Project";
import Box from "./Box";

const DataTitle = styled("div", {
  width: "100%",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  color: "$primaryTextColor",
  background: "$hoverItem",
  padding: "5px 0",
  '[data-theme="dark"] &': {
    background: "$darkHoverItem",
    color: "$darkPrimaryTextColor",
  },
});

const DataDescription = styled("p", {
  fontSize: "13px",
  color: "$secondaryTextColor",
  margin: "0",
  padding: "0.5em",
  textAlign: "center",
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
  },
});

const StyledLink = styled(Link, {
  textDecoration: "underline",
  "&:hover": {
    color: "$primaryTextColor",
  },
  '[data-theme="dark"] &': {
    "&:hover": {
      color: "$darkPrimaryTextColor",
    },
  },
});

const ProjectInfo = ({ project }: { project: Project }) => {
  return (
    <Box css={{ display: "grid", gap: "0.5em", marginTop: "1em" }}>
      <Box>
        <DataTitle>Stack</DataTitle>
        <DataDescription>{project.stack.join(", ")}</DataDescription>
      </Box>
      <Box>
        <DataTitle>Platform</DataTitle>
        <DataDescription>{project.platform.join(", ")}</DataDescription>
      </Box>
      {project.repository && (
        <Box>
          <DataTitle>Repository</DataTitle>
          <DataDescription>
            <StyledLink href={project.repository} target="_blank">
              {project.repository}
            </StyledLink>
          </DataDescription>
        </Box>
      )}
      {project.website && (
        <Box>
          <DataTitle>Website</DataTitle>
          <DataDescription>
            <StyledLink href={project.website} target="_blank">
              {project.website}
            </StyledLink>
          </DataDescription>
        </Box>
      )}
    </Box>
  );
};

export default ProjectInfo;
