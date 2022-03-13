import React, { memo } from 'react';
import { Task } from 'types';

type Props = {
  tasks: Task[];
};

const TaskHighlight = ({ tasks }: Props) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          {tasks?.map(task => (
            <React.Fragment key={task.id}>
              <section className="section">
                <div className="columns">
                  <div className="column is-8 is-offset-2">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">{task.createdAt}</h2>
                      <h1 className="title">{task.title}</h1>
                      <p>{task.description}</p>
                    </div>
                  </div>
                </div>
              </section>
              <div className="is-divider" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(TaskHighlight);
