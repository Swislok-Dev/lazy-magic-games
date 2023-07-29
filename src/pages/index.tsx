import Layout from '../components/Layout';
import WhatWeHaveDone from '../components/WhatWeHaveDone';
import LifeGoals from '../components/paragraphs/LifeGoals';

export default function Home() {
  return (
    <Layout>
      <section>
        <WhatWeHaveDone />
      </section>

      <LifeGoals />
    </Layout>
  );
}
