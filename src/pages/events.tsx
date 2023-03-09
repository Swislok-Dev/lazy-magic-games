import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

function EventsPage() {
  return (
    <Layout>
      <section>
        <Image
          src="https://bloximages.newyork1.vip.townnews.com/thecheyennepost.com/content/tncms/assets/v3/editorial/6/d5/6d5e2338-a62b-11ec-b13c-9bcc2763f01e/623390fd4c04c.image.png?resize=750%2C418"
          alt="Cheyanne Gaming Convention"
          width={560}
          height={315}
          className="cheyanne"
          object-fit="contain"
        />
      </section>
      <section>
        <iframe
          width="560"
          height="615"
          src="https://www.youtube.com/embed/ZCthl8BGZ9k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </Layout>
  );
}

export default EventsPage;
