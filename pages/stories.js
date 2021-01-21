import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import storiesStyles from './stories.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>2020 Year in Review</h1>
                <p>FEATURED STORIES</p>
            </section>
            <section>
                <ul className={`${storiesStyles.section} ${storiesStyles.list}`}>
                    {allPostsData.map(({ id, image, title, name }) => (
                        <li key={id}>
                            <img src={image} className={storiesStyles.storiesImage} />
                            <div className="author">
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <p>{name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}