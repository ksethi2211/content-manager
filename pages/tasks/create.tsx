import type { NextPage } from 'next';
import { ChangeEvent, useCallback, useState } from 'react';
import classNames from 'classnames';
import { Layout } from 'components';

import { TaskUserInput } from 'types';

import styles from 'styles/Create.module.css';

const defaultFormData: TaskUserInput = {
  title: '',
  description: '',
  link: '',
  priority: 2,
  timeToFinish: 60,
};

const Create: NextPage = () => {
  const [form, setForm] = useState<TaskUserInput>(defaultFormData);

  const onChange = useCallback(
    (field: keyof TaskUserInput, e: ChangeEvent) => {
      setForm({
        ...form,
        [field]: (e as ChangeEvent<HTMLInputElement>).target.value,
      });
    },
    [form, setForm],
  );

  const onReset = useCallback(() => setForm(defaultFormData), [setForm]);

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className={classNames('title', styles.title)}>Add New Task</h1>
            <form>
              <div className="field">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <div className="control">
                  <input
                    name="title"
                    className="input"
                    type="text"
                    value={form.title}
                    onChange={e => onChange('title', e)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="description" className="label">
                  Description
                </label>
                <div className="control">
                  <textarea
                    name="description"
                    className="textarea"
                    value={form.description}
                    onChange={e => onChange('description', e)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="link" className="label">
                  Link
                </label>
                <div className="control">
                  <input
                    name="link"
                    className="input"
                    type="text"
                    value={form.link}
                    onChange={e => onChange('link', e)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="priority" className="label">
                  Priority
                </label>
                <div className="control">
                  <div className="select">
                    <select
                      name="priority"
                      value={form.priority}
                      onChange={e => onChange('priority', e)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3 </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="timeToFinish" className="label">
                  Time to finish
                </label>
                <div className="control">
                  <input
                    name="timeToFinish"
                    className="input"
                    type="number"
                    value={form.timeToFinish}
                    onChange={e => onChange('timeToFinish', e)}
                  />
                </div>
                <p className="help">Time in minutes</p>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button type="button" className="button is-link">
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button
                    type="button"
                    className="button is-link is-light"
                    onClick={onReset}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
