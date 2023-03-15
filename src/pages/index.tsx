import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section id="page-hero">
        <div id="page-hero-text">
          <h2>Join our gaming community</h2>
          <p>
            Live streams, discussions, co-operative, competitive board, and
            tabletop games. What are you waiting for?
          </p>
          <Link
            href="https://discord.com/invite/6kaKFBYtBZ"
            target="_blank"
            className="btn"
          >
            Discord Link
          </Link>
        </div>
        <Image
          src="/images/card_decks_01.png"
          height={500}
          width={500}
          alt="Card Decks"
          id="page-hero-image"
          className="full-image"
        />
      </section>
    </Layout>
  );
}
