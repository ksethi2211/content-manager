export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'completed';
  link: string;
  priority: number;
  timeToFinish: number;
};

export type TaskUserInput = {
  title: string;
  description: string;
  link?: string;
  priority: number;
  timeToFinish: number;
};
