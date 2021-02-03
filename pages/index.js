import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import homeStyles from './index.module.css'

export default function Hi() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="preload"
          href="/fonts/TTNormsPro/TT Norms Pro Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/TTNormsPro/TT Norms Pro Medium.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className={homeStyles.homepage}>
        <h1 className={homeStyles.title}>THE YEAR IT ALL HAPPENED</h1>
        <picture>
          <source media="(min-width: 768px)" srcset="/images/2020.svg" />
          <img
            className={homeStyles.yearLogo}
            src="/images/2020-mobile.svg"
            alt="2020 logo"
          />
        </picture>
        <p className={homeStyles.caption}>
          Read the best collection of people’s 2020 Year in Review stories.
        </p>
        <div className={homeStyles.cta}>
          <Link href="/stories">
            <a>EXPLORE STORIES</a>
          </Link>
          <Link href="/add-story">
            <a>SHARE YOURS &ensp; +</a>
          </Link>
        </div>
        <a href="https://www.producthunt.com/posts/retrogram?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-retrogram" target="_blank" style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=283258&theme=dark" alt="RetroGram - The best collection of people’s 2020 Year in Review stories. | Product Hunt" style={{ width: "250px", height: "54px", display: "inline-block" }} /></a>
      </div>
    </Layout>
  );
}
