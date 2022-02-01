import Head from "next/head";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps(props: any) {
  const { params } = props;
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: any) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <p>
        {postData.id}
        <br />
        {postData.title}
        <br />
        {postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </p>
      <Link href="/">
        <a>　←　home page</a>
      </Link>
    </>
  );
}
