import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
  return (
    <>
      <Head>
        <title>Lazy Magic Games</title>
        <meta name="description" content="Lazy Magic Games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div id="content">
        <header>
          <div onClick={() => setIsShown(!isShown)} id="hamburger">
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

        <main  onClick={closeNav}>
          <nav
            className={isShown ? 'active' : undefined}
            id="main-navigation"
          >
            <ul className="nav-links">
              <Link onClick={closeNav} className="nav-link" href="/">
                Home
              </Link>
              <Link onClick={closeNav} className="nav-link" href="/">
                Where To Buy
              </Link>
              <Link onClick={closeNav} className="nav-link" href="/events">
                Events
              </Link>
              <Link onClick={closeNav} className="nav-link" href="/">
                Contact Us
              </Link>
            </ul>
          </nav>
          {children}
        </main>

        <footer>
          <p>Copyright &copy; 2023 by Lazy Magic Games</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
