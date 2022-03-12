import type { NextPage } from 'next';
import { Layout, TaskHighlight, Newsletter, TaskList } from 'components';

const Home: NextPage = () => {
  return (
    <Layout>
      <TaskHighlight />
      <Newsletter />
      <TaskList />
    </Layout>
  );
};

export default Home;
