import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
type Props = {
  allPostsData: [{ id: string; date: string; title: string }];
};

const Home: NextPage<Props> = (props) => {
  const { allPostsData } = props;
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>
        Read{" "}
        <Link href="/posts/FirstPost">
          <a>this page!</a>
        </Link>
      </h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
            <br />
            <Link href={`/posts/${id}`}>見る</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
