import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <img src={postData.image} />
                <a href={postData.twitter}>{postData.name}</a>
                {/* <a href={`https://twitter.com/intent/tweet?text=Check%20out%20my%20year%20in%20review%20here%20https%3A//retroo.xyz/${postData.id}`}>Share Here</a> */}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <div className={styles.backToHome}>
                <Link href="/stories">
                    <a>← Back to stories</a>
                </Link>
            </div>
        </Layout>
    )
}