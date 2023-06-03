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
      <section>
        <div className="text-overlay">
          <h2>It&apos;s here!!</h2>
          <p>
            The big day may have come and gone, but here is the link if you
            missed it.
          </p>
          <Link
            href="https://www.thegamecrafter.com/games/project-titan:-strategy-card-game"
            target="_blank"
            className="btn"
          >
            Get a copy
          </Link>
        </div>
        <Image
          src="/images/PT_notext.png"
          height={500}
          width={500}
          alt="Project Titan pre-order banner"
          className="image"
        />
      </section>
      <section>
        <p className="text-overlay bg-black-dark uppercase">more to come!</p>
      </section>
      <section>
        <Image
          src="/images/PT_defectors_edition_cropped_and_logo.png"
          width={500}
          height={500}
          alt="Project Titan Defectors Edition Banner"
          className="full-image"
        />
        <div className=" bottom">
          <h2 className="uppercase">Unite</h2>
          <Image 
          src="/images/Downward_Sword_Icon.png"

          width={200}
          height={200}
          alt="Project Titan iconography"
          
          />
          <h2 className="uppercase">Explore</h2>
          <Image 
          src="/images/Downward_Sword_Icon.png"

          width={200}
          height={200}
          alt="Project Titan iconography"
          
          />
          <h2 className="uppercase">Dominate</h2>
        </div>
      </section>
      <section>
        <article className="about-lmg-container bg-black-dark">
          <div className="about-lmg">
            <h2 className="uppercase">All kinds of games</h2>
            <p>
              Lazy Magic Games is dedicated to bringing a uniqure and fun
              experience to every game we product! Our later piece of work is
              non-other than <strong>Project Titan: Strategy Card Game.</strong>{' '}
              Though PTSCG is a card game dedicated to combat, we at LMG have a
              litany of games being worked on for the consumer. All of which are
              unique and provide a new experience with each playthrough.
            </p>
          </div>
          <div className="about-lmg">
            <h2 className="uppercase">Bringing the game to you</h2>
            <p>
              As creators we find ourselves wanting to help the customer, in any
              way we can, to understand rules, artwork, or why we do what we do.
              That being said we provide many video instructions on all of our
              games. As well as open lines of communication to discuss, amongst
              the community, what issues they have or rules in question.
            </p>
          </div>
          <div className="about-lmg">
            <h2 className="uppercase">About Me</h2>
            <p>
              I grew up playing games with my father who was ultimately the
              reason why I started to develop games on my own. My father was a
              man of great imagination and whimsicalness. It was he who
              instilled in me the foundation I use in all our games. That being,
              &quot;Chase everything <strong>you</strong> are passionate about
              because no one else will.&quot;
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}
