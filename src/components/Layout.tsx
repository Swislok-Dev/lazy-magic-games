import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti';

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [isShown, setIsShown] = React.useState(false);

  const closeNav = () => {
    if (isShown) {
      setIsShown(false);
    }
  };

  const isVisible = isShown ? 'active' : 'inactive';

  return (
    <>
      <Head>
        <title>Lazy Magic Games</title>
        <meta name="description" content="Lazy Magic Games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div id="content">
        <header>
          <div
            onClick={() => setIsShown(!isShown)}
            id="hamburger"
            className={isVisible}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <picture id="header-logo">
            <img
              src="/images/LazyMagicLogo.png"
              loading={'eager'}
              alt="Magic Hat"
            />
          </picture>
          <span></span>
        </header>

        <main onClick={closeNav}>
            <nav className={isVisible} id="main-navigation">
              {/* <div id="navigation" className={isShown ? 'active' : undefined}> */}
              <ul className="nav-links">
                <Link onClick={closeNav} className="nav-link" href="/">
                  Home
                </Link>
                <Link
                  onClick={closeNav}
                  className="nav-link"
                  href="/coming-soon"
                >
                  Project Titan
                </Link>
                <Link onClick={closeNav} className="nav-link" href="/events">
                  Events
                </Link>
                <Link onClick={closeNav} className="nav-link" href="/">
                  Contact Us
                </Link>
              </ul>
              {/* </div> */}
            </nav>
          <div className="main-content">{children}</div>
        </main>

        <footer>
          <div className="social-links">
            <Link
              href="https://www.facebook.com/lazymagicgames"
              target="_blank"
            >
              <TiSocialFacebook />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCSE-ffS3zxn1DvsLzfJvsqA"
              target="_blank"
            >
              <TiSocialYoutube />
            </Link>
          </div>
          <p className="uppercase">
            Copyright &copy; 2023 by Lazy Magic Games - All rights reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
