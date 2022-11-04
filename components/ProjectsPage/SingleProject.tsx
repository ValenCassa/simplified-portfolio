import Markdown from "components/@/MarkdownContent";
import Meta from "components/@/Meta";
import { TitleSection } from "components/@/PageTable";
import ProjectInfo from "components/@/ProjectInfo";
import { MotionContainer } from "components/Layout/Container";
import markdownToTxt from "markdown-to-txt";
import { Project } from "types/Project";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <>
      <Meta
        title={`${project.title} | Valentin Cassarino`}
        description={markdownToTxt(project.content)}
        image={project.imageURL}
      />
      <MotionContainer
        variants={variants}
        initial="initial"
        animate="animate"
        exit={"initial"}
        transition={{ duration: 0.1 }}
      >
        <TitleSection
          id={project.id}
          title={project.title}
          date={project.date}
        />
        <ProjectInfo project={project} />
        <Markdown value={project.content} />
      </MotionContainer>
    </>
  );
};

export default SingleProject;
