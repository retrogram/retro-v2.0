import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import storiesStyles from './stories.module.css'
import { Twitter } from '@styled-icons/remix-fill/Twitter'
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
                <h1 className={storiesStyles.heading}>2020 Year in Review</h1>
                <div className={storiesStyles.feature}>
                    <p className={storiesStyles.featured}>FEATURED STORIES</p>
                    <hr className={storiesStyles.line} />
                </div>
            </section>
            <section>
                <ul className={`${storiesStyles.section} ${storiesStyles.list}`}>
                    {allPostsData.map(({ id, image, title, name }) => (
                        <li key={id} className={storiesStyles.individual}>
                            <Link href={`/posts/${id}`}>
                                <div className="container">
                                    <div className={storiesStyles.gradient}>
                                        <img src={image} className={storiesStyles.storiesImage} />
                                    </div>
                                    <div className={storiesStyles.author}>
                                        <a className={storiesStyles.title}>{title}</a>
                                        <p className={storiesStyles.authorName}>
                                            <Twitter size={20} style={{ color: '#00acee' }} />{' '}{name}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}