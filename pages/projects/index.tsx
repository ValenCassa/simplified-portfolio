import ProjectsPage from "components/ProjectsPage";
import { GetStaticProps } from "next";
import { getProjects } from "services/projects";
import { Project } from "types/Project";

const Projects = ({ projects }: { projects: Project[] }) => {
  return <ProjectsPage projects={projects} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const projects = await getProjects();
    const sortedProjects = projects.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
    return {
      props: {
        projects: sortedProjects,
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        projects: [],
      },
      revalidate: 60,
    };
  }
};

export default Projects;
