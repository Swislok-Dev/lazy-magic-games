import Layout from '../components/Layout';
import WhatWeHaveDone from '../components/WhatWeHaveDone';
import LifeGoals from '../components/paragraphs/LifeGoals';

export default function Home() {
  return (
    <Layout>
      <section>
        {/* <p className="text-overlay bg-black-dark uppercase">more to come!</p> */}
        <WhatWeHaveDone />
      </section>

      <LifeGoals />
    </Layout>
  );
}
