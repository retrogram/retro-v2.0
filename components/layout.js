import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import navStyles from "./navbar.module.css";

export const siteTitle = "RetroGram";

function handleClick(e) {
    e.preventDefault();
    const mainNav = document.getElementById("js-menu");
    mainNav.classList.toggle(`${navStyles.active}`);
    if (mainNav.classList.contains(`${navStyles.active}`)) {
        e.target.innerHTML = `x`;
    }
    else {
        e.target.innerHTML = `&#9776;`;
    }
}

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/images/Retrogram-logo.svg" sizes="192x192" />
                <meta name="description" content="Want to learn from others? Read their year in review to learn from their wins and loses" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="RetroGram" />
                <meta property="og:site_name" content="RetroGram" />
                <meta property="og:url" content="https://retrogram.co" />
                {/* <meta property="og:image" content="https://i.postimg.cc/cCnDjhp6/2020BG.png" /> */}
                <meta property="og:image" content="https://i.postimg.cc/9MZKCsCy/2020BG.png" />
                <meta property="og:image:width" content="550" />
                <meta property="og:image:height" content="350" />
                <meta name="og:description" content="Want to learn from others? Read their year in review to learn from their wins and loses" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@RetroGramHQ" />
                <meta name="twitter:title" content="RetroGram" />
                <meta name="twitter:description" content="Want to learn from others? Read their year in review to learn from their wins and loses" />
                {/* <meta name="twitter:image" content="https://i.postimg.cc/cCnDjhp6/2020BG.png" /> */}
                <meta name="twitter:image" content="https://i.postimg.cc/9MZKCsCy/2020BG.png" />
                <meta name="twitter:image:alt" content="RetroGram logo"></meta>
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
                        <Link href='/'>
                            <a>
                                <img className={navStyles.name} src='/images/Retrogram-logo.svg' alt='retrogram logo' />
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
                                <Link href="/add-story">
                                    <a className={navStyles.shareLink}>
                                        Share Yours&emsp; +
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
}