import type { NextPage, GetServerSideProps } from 'next';
import { Layout, TaskHighlight, Newsletter, TaskList } from 'components';
import { Task } from 'types';

type Props = {
  tasks: Task[];
};

const Home: NextPage<Props> = ({ tasks }) => {
  return (
    <Layout>
      <TaskHighlight tasks={tasks.slice(0, 2)} />
      <Newsletter />
      <TaskList tasks={tasks.slice(2)} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:2900/api/tasks');
  const tasks = await response.json();
  return {
    props: {
      tasks,
    },
  };
};

export default Home;
