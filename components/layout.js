import Head from "next/head";
import styles from "./layout.module.css";
// import utilStyles from '../styles/utils.module.css'
import Link from "next/link";
import navStyles from "./navbar.module.css";

export const siteTitle = "RetroGram";

function handleClick(e) {
    e.preventDefault();
    const mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle(`${navStyles.active}`);
    if (mainNav.classList.contains(`${navStyles.active}`)) {
        e.target.innerHTML = `&times;`;
    }
    else {
        e.target.innerHTML = `&#9776;`;
    }
}

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Share your year in review" />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={navStyles.header}>
                <nav className={navStyles.navbar}>
                    <span
                        className={navStyles.navbarToggle}
                        id="js-navbar-toggle"
                        onClick={handleClick}>
                        &#9776;
                    </span>

                    <div className="left-nav">
                        <Link href="/">
                            <a className={navStyles.name}>
                                <img
                                    src="/images/R-logo.svg"
                                    alt="R-logo"
                                    className={navStyles.logo}
                                />
                            </a>
                        </Link>
                    </div>

                    <div className={navStyles.rightNav}>
                        <ul className={navStyles.mainNavbar} id="js-menu">
                            <li className={navStyles.mainNavlist}>
                                <a
                                    href="https://retroo.xyz"
                                    target="_blank"
                                    className={navStyles.navLinks}
                                    rel="noopener">
                                    2019
                                </a>
                            </li>

                            <li className={navStyles.mainNavlist}>
                                <Link href="/stories">
                                    <a className={navStyles.navLinks}>Stories</a>
                                </Link>
                            </li>

                            <li className={navStyles.mainNavlist}>
                                <Link href="/add-story">
                                    <a className={navStyles.storiesLink}>
                                        Add Your Story &nbsp;+
                                    </a>
                                </Link>
                            </li>

                            <li className={navStyles.mainNavlist}>
                                {/* <Link href="/add-story"> */}
                                <a className={navStyles.shareLink}>
                                    Share Yours&emsp; +
                                </a>
                                {/* </Link> */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
