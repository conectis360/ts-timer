import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

export default function Header() {
  const timerContext = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={
          timerContext.isRunning
            ? timerContext.stopTimers
            : timerContext.startTimer
        }
      >
        {timerContext.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
