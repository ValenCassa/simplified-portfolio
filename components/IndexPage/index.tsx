import { MotionContainer } from "components/Layout/Container";
import { Post } from "types/Post";
import { Project } from "types/Project";
import ProjectsSection from "./@/ProjectsSection";
import IntroSection from "./@/IntroSection";
import SectionProvider from "./@/SectionProvider";
import PostsSection from "./@/PostsSection";
import NowSection from "./@/ContentTable";
import Meta from "components/@/Meta";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const IndexPage = ({
  data,
}: {
  data: { posts: Post[]; projects: Project[] };
}) => {
  return (
    <>
      <Meta
        title="Homepage | Valentin Cassarino"
        description="Go have a look at my portfolio!"
        image={"https://i.imgur.com/88AmjpD.png"}
      />
      <SectionProvider>
        <MotionContainer
          variants={variants}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <IntroSection key={"intro"} />
          <ProjectsSection key={"projects"} projects={data.projects} />
          <PostsSection key={"posts"} posts={data.posts} />
          <NowSection />
        </MotionContainer>
      </SectionProvider>
    </>
  );
};

export default IndexPage;
