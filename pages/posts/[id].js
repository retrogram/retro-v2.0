import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import { useState } from 'react';
import Example from '../../components/modal';
import { Modal } from 'react-bootstrap';

import { getAllPostIds, getPostData } from '../../lib/posts'
import Social from '../../components/social-share'

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

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const onShare = () => {
        handleClose();
        setShow(true)
    };

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <img src={postData.image} />
                <a href={postData.twitter}>{postData.name}</a>
                <button onClick={onShare}>Share</button>
                <Example show={show}>
                    <Modal.Header onClick={handleClose} closeButton />
                    <h3>Share via</h3>
                    <Social url={`https://retrogram.co/${postData.id}`} />
                </Example>
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