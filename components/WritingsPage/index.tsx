import PageTable from "components/@/PageTable";
import PageTitle from "components/@/PageTitle";
import { MotionContainer } from "components/Layout/Container";
import { Post } from "types/Post";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const WritingsPage = ({ posts }: { posts: Post[] }) => {
  return (
    <MotionContainer
      variants={variants}
      initial="initial"
      animate="animate"
      exit={"initial"}
      transition={{ duration: 0.3 }}
    >
      <PageTitle>Writings</PageTitle>
      <PageTable data={posts} type="post" />
    </MotionContainer>
  );
};

export default WritingsPage;
