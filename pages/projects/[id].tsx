import SingleProject from "components/ProjectsPage/SingleProject";
import { GetStaticProps } from "next";
import { getAllProjects, getOneProject } from "services";
import { Project } from "types/Project";

const Project = ({ project }: { project: Project }) => {
  return <SingleProject project={project} />;
};
export const getStaticPaths = async () => {
  try {
    const projects = await getAllProjects();
    return {
      paths: projects.map((project: Project) => ({
        params: {
          id: project.id,
        },
      })),
      fallback: "blocking",
    };
  } catch (err) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const project = await getOneProject(params?.id as string);
    return {
      props: { project },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        pathname: "/projects",
      },
    };
  }
};

export default Project;
