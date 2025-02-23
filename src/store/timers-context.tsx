import { createContext, useReducer, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimerState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  //custom hooks, uma função que é reconhecida pelo react como um hook
  const timerContext = useContext(TimersContext);

  if (timerContext === null) {
    throw new Error("Erro!");
  }

  return timerContext;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  // responsável por manejar e permitir que usem o contexto
  useReducer(reducer, initialState);

  const context: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimer() {},
    stopTimers() {},
  };
  return (
    <TimersContextProvider.Provider value={context}>
      {children}
    </TimersContextProvider.Provider>
  );
}
