import IndexPage from "components/IndexPage";
import { GetStaticProps } from "next";
import { getPosts } from "services/posts";
import { getProjects } from "services/projects";
import { Post } from "types/Post";
import { Project } from "types/Project";

interface Props {
  data: {
    posts: Post[];
    projects: Project[];
  };
}

const Home = ({ data }: Props) => {
  return <IndexPage data={data} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPosts();
    const projects = await getProjects();

    return {
      props: {
        data: {
          posts,
          projects,
        },
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        data: {
          posts: [],
          projects: [],
        },
      },
      revalidate: 60,
    };
  }
};

export default Home;
