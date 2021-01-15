import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import homeStyles from './index.module.css'

export default function Hi() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="homepage">
        <h1 className="title">
          THE YEAR IT ALL HAPPENED
        </h1>
        <img src="/images/desktop-hero.jpg" alt="" />
        <p>Read the best collection of people’s 2020 Year in Review stories.</p>
        <div className={homeStyles.cta}>
          <Link href="/stories">
            <a>EXPLORE STORIES</a>
          </Link>
          <Link href="/add-story">
            <a>SHARE YOURS +</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}