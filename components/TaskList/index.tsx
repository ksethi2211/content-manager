import { memo } from 'react';
import classNames from 'classnames';

import { Task } from 'types';

type TaskContentProps = {
  task: Task;
  isOffset: boolean;
};

const TaskContent = ({ task, isOffset }: TaskContentProps) => (
  <div
    className={classNames('column', 'is-5', {
      'is-offset-1': isOffset,
    })}
  >
    <div className="content is-medium">
      <h2 className="subtitle is-5 has-text-grey">{task.createdAt}</h2>
      <h1 className="title has-text-black is-3">{task.title}</h1>
      <p className="has-text-dark">{task.description}</p>
    </div>
  </div>
);

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {tasks.map((task, index) => (
                <TaskContent
                  key={task.id}
                  task={task}
                  isOffset={index % 2 === 1}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default memo(TaskList);
