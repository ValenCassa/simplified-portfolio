import { styled } from "config/stitches.config";
import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";

const CodeBlock = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, "")}
        style={atomDark}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Container = styled("div", {
  color: "$secondaryTextColor",
  "& h2, & h3, & h4, & h5, & h6": {
    margin: "0.5em 0 !important",
  },
  "& h2": {
    lineHeight: "1.5em",
    borderBottom: "2px black solid",
  },
  "& h3": {
    display: "inline-block",
    margin: 0,
    borderBottom: "2px black solid",
  },
  "& p": {
    fontSize: "15.64px",
    letterSpacing: "0.025em",
    lineHeight: "1.8em",
    whiteSpace: "normal",
    fontWeight: "normal",
  },
  "& mark": {
    fontSize: "14px",
    textAlign: "center",
    padding: "0.1em 0.3em",
    backgroundColor: "#eccabe",
    borderRadius: "3px",
    fontWeight: " 500",
  },
  "& pre div": {
    backgroundColor: "$hoverItem !important",
    fontSize: "13px !important",
    borderRadius: "3px !important",
    filter: "grayscale(1) !important",
  },
  "& pre div::-webkit-scrollbar-thumb": {
    backgroundColor: "grey !important",
  },
  "& code": {
    color: "gray !important",
    filter: "invert(1) !important",
  },
  "& blockquote": {
    textAlign: "left",
    display: "inline-block",
    borderRadius: "4px",
    borderLeft: "6px solid #e33939",
    padding: "0.8em 2em 0.8em 0.8em",
    margin: 0,
    backgroundColor: "white",
    color: "black",
    fontFamily: "Creato Display",
    fontWeight: "bold",
    "& p": {
      margin: 0,
    },
  },
  "& img": {
    maxWidth: "100%",
    margin: "1em 0",
    height: "auto",
  },
  '[data-theme="dark"] &': {
    color: "$darkSecondaryTextColor",
    "& pre div": {
      backgroundColor: "$darkHoverItem !important",
    },
    "& code": {
      filter: "invert(0) !important",
    },
  },
});

const Markdown = ({ value }: { value: string }) => {
  return (
    <Container>
      <ReactMarkdown
        // eslint-disable-next-line react/no-children-prop
        children={value}
        components={CodeBlock}
        skipHtml={false}
        rehypePlugins={[rehypeRaw]}
      />
    </Container>
  );
};

export default Markdown;
