import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialYoutube } from 'react-icons/ti';
import Navbar from './navigation/Navbar';

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
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
          <Navbar isVisible={isVisible} closeNav={closeNav} />

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
            <Link
              href="https://discord.com/channels/685553702744227848/946079450892759100"
              target="_blank"
            >
              <FaDiscord />
            </Link>
          </div>
          <p className="uppercase">
            Copyright &copy; 2023 by Lazy Magic Games - All rights
            reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
