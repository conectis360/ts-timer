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

//é comum trabalhar com type Action

type Action = {
  type: "ADD_TIMER" | "START_TIMERS" | "STOP_TIMERS";
};

function timersReducer(state: TimerState, action: Action): TimerState {
  //react vai executar essa ação, ele vai te entregar o estado e a ação, é teu trabalho realizar algo com eles
  
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  // responsável por manejar e permitir que usem o contexto

  //reducer é uma função que é executada automáticamente pelo react quando uma nova ação é executada
  const [timerState, dispatch] = useReducer(timersReducer, initialState);

  const context: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER" });
    },
    startTimer() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContextProvider.Provider value={context}>
      {children}
    </TimersContextProvider.Provider>
  );
}
