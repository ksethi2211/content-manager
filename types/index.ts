export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'completed';
  link?: string;
  image?: string;
  priority?: number;
  timeToFinish?: number;
};
