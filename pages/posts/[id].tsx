import SingleWriting from "components/WritingsPage/SingleWritings";
import { GetStaticProps } from "next";
import { getAllPosts, getOnePost } from "services";
import { Post } from "types/Post";

const Writing = ({ writing }: { writing: Post }) => {
  return <SingleWriting writing={writing} />;
};
export const getStaticPaths = async () => {
  try {
    const posts = await getAllPosts();
    return {
      paths: posts.map((project: Post) => ({
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
    const writing = await getOnePost(params?.id as string);
    return {
      props: { writing },
      revalidate: 1,
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        pathname: "/posts",
      },
    };
  }
};

export default Writing;
