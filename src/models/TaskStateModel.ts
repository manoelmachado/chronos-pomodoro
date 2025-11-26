import type { TaskModel } from "./TaskModel"

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentTask: number; // 1 a 8 com base nos ciclos do pomodoro
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}