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

function handleClick(e) {
  e.preventDefault();
  const storiesList = document.getElementById("js-list");
  storiesList.classList.add("openStories");
  e.target.style.display = "none";
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
        <ul className={utilStyles.list} id="js-list">
          {allPostsData.map(({ id, image, title, name }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <div className={utilStyles.storyContainer}> 
              <img src={image} alt="Author Image" className={utilStyles.storyImage}/>
                <div className={utilStyles.storyInfo}>
                <a className={utilStyles.storyTitle}>{title}</a>
                <p className={utilStyles.storyAuthor}>{name}</p>
              </div>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.buttonContainer}>
        <button className={utilStyles.viewStories} onClick={handleClick}>
            VIEW MORE STORIES
        </button>
      </section>
    </Layout>
  );
}
