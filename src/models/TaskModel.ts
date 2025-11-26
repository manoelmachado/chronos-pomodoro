import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number; // usaremos new Date(startDate)
  completeDate: number | null; // colocaremos apenas quando o timer chegar ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModel['config']
};
