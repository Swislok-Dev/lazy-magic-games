import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MyImage from './MyImage';

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lazy Magic Games</title>
        <meta name="description" content="Lazy Magic Games website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="main">
        <header>
          <h1 id="main-heading">Experience Lazy Magic Games!</h1>
        </header>
        <nav id="main-navigation">
          <div className="sidebar">
            <MyImage
              src="/LazyMagicLogocropped.png"
              width={100}
              height={100}
              alt="Magic Hat"
            />
            <ul>
              <Link href="/">Home</Link>
              <Link href="/">Where To Buy</Link>
              <Link href="/events">Events</Link>
              <Link href="/">Contact Us</Link>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer>
          <p>Copyright &copy; 2023 by Lazy Magic Games</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
