import _ from "lodash";
import { Post } from "types/Post";
import SectionContainer from "./SectionContainer";
import SectionTable from "./SectionTable";

const PostsSection = ({ posts }: { posts: Post[] }) => {
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  const slicedPosts = _.slice(sortedPosts, 0, 3);
  return (
    <SectionContainer name="posts" css={{ marginTop: "2em" }}>
      <SectionTable name="Latest Posts" type="post" data={slicedPosts} />
    </SectionContainer>
  );
};

export default PostsSection;
