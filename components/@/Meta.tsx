import Head from "next/head";

interface Props {
  title: string;
  description: string;
  image: string;
}

const Meta = ({ title, description, image }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta name="image" content={image} />

      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
