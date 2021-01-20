import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.heading}>2020 Year in Review</h1>
        <p className={utilStyles.title}>FEATURED STORIES</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, image, title, name }) => (
            <li className={utilStyles.listItem} key={id}>
              <img src={image} />
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.storyTitle}>{title}</a>
              </Link>
              <p className={utilStyles.storyAuthor}>{name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.buttonContainer}>
        <button className={utilStyles.viewStories}>
          <Link href="/">
            <a>VIEW MORE STORIES</a>
          </Link>
        </button>
      </section>
    </Layout>
  );
}
