import { createContext } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimers: () => void;
};

const TimerContext = createContext<TimersContextValue | null>(null);
