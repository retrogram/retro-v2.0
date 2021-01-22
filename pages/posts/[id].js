import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import storyDetail from './storydetail.module.css'
import { useState } from 'react';
import Example from '../../components/modal';
import { Modal } from 'react-bootstrap';

import { getAllPostIds, getPostData } from '../../lib/posts'
import Social from '../../components/social-share'
import { Twitter } from '@styled-icons/remix-fill/Twitter'
import { Share } from '@styled-icons/remix-fill/Share'

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
            <article className={storyDetail.article}>
                <img src={postData.image} className={storyDetail.authorImage} />
                <div className={storyDetail.articleContainer}>
                    <h1 className={storyDetail.storyHeading}>{postData.title}</h1>
                    <div className={storyDetail.storyArticle}>
                        <a href={postData.twitter} className={storyDetail.authorName}>
                            <Twitter size={20} style={{ color: '#00acee', marginRight: '10px' }} />{' '}{postData.name}
                        </a>
                        <div className="share">
                            <button onClick={onShare} className={storyDetail.share}>
                                Share Story <Share size={20} fontWeight={100} />
                            </button>
                            <Example show={show}>
                                <Modal.Header onClick={handleClose} closeButton />
                                <h3>Share via</h3>
                                <Social url={`https://retrogram.co/${postData.id}`} />
                            </Example>
                        </div>
                    </div>
                    <hr style={{ backgroundColor: '#666666', height: '1px', border: 'none' }} />
                    <div className={storyDetail.story} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    <a href={postData.story_link} className={storyDetail.more}>READ MORE</a>
                    <div className={styles.backToHome}>
                        <Link href="/stories">
                            <a>← Back to stories</a>
                        </Link>
                    </div>
                </div>
            </article>
        </Layout>
    )
}