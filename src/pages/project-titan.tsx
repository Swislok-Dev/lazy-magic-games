import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

function ProjectTitanPage() {
  return (
    <Layout>
      <section>
        <Image
          src="/images/Project_Titan_Assets/PTBannerArt.png"
          height={1200}
          width={1200}
          alt="PT Banner Art"
          className="image"
        />
      </section>
      <section>
        <div className="text-overlay">
          <h2>It&apos;s here!!</h2>
          <p>
            The big day may have come and gone, but here is the link
            if you missed it.
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
          src="/images/Project_Titan_Assets/spaceship.jpeg"
          height={500}
          width={500}
          alt="Project Titan pre-order banner"
          className="image image-dark"
        />
      </section>

      <section>
        <Image
          src="/images/PT_defectors_edition_cropped_and_logo.png"
          width={1200}
          height={1200}
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
    </Layout>
  );
}

export default ProjectTitanPage;
