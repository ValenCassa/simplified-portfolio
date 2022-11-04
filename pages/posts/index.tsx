import WritingsPage from "components/WritingsPage";
import { GetStaticProps } from "next";
import { getPosts } from "services/posts";
import { Post } from "types/Post";

const Writings = ({ posts }: { posts: Post[] }) => {
  return <WritingsPage posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await getPosts();
    const sortedPosts = posts.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    );
    return {
      props: {
        posts: sortedPosts,
      },
    };
  } catch (e) {
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Writings;
