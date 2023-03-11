import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <section id="home-page">
        <article>
          <div id="page-hero-text">
            <h2>Join our gaming community</h2>
            <p>
              Live streams, discussions, co-operative, competitive board, and
              tabletop games. What are you waiting for?
            </p>
            
              <a href="https://discord.com/invite/6kaKFBYtBZ" target="_blank"><button>Discord Link</button></a>
            
          </div>
          <Image
            src="/images/card_decks_01.png"
            height={300}
            width={300}
            alt="Card Decks"
            id="page-hero"
            className="full-image"
          />
        </article>
      </section>
    </Layout>
  );
}
