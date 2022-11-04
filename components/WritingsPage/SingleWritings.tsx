import Markdown from "components/@/MarkdownContent";
import Meta from "components/@/Meta";
import { TitleSection } from "components/@/PageTable";
import { MotionContainer } from "components/Layout/Container";
import { styled } from "config/stitches.config";
import markdownToTxt from "markdown-to-txt";
import { Post } from "types/Post";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Image = styled("div", {
  width: "100%",
  height: "150px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "5px",
  margin: "1rem 0",
});

const SingleWriting = ({ writing }: { writing: Post }) => {
  return (
    <>
      <Meta
        title={`${writing.title} | Valentin Cassarino`}
        description={markdownToTxt(writing.content)}
        image={writing.imageURL}
      />
      <MotionContainer
        variants={variants}
        initial="initial"
        animate="animate"
        exit={"initial"}
        transition={{ duration: 0.1 }}
      >
        <TitleSection
          id={writing.id}
          title={writing.title}
          date={writing.date}
        />
        <Image
          css={{
            backgroundImage: `url(${writing.imageURL})`,
          }}
        />
        <Markdown value={writing.content} />
      </MotionContainer>
    </>
  );
};

export default SingleWriting;
