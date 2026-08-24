import { useEffect, useState } from "react"
import { useTimerStore } from "../stores/useTimerStore";

export default function TimerDown(className = "") {

   const [seconds, setSeconds] = useState(180);
   const { isActive, toggleActive } = useTimerStore();

   useEffect(() => {
      let interval = null;

      if (isActive && seconds > 0) {
         interval = setInterval(() => {
            setSeconds((s) => s - 1);
         }, 1000);
      } else if (seconds === 0) {
         toggleActive(false);
      }
      return () => clearInterval(interval)

   }, [seconds, isActive, toggleActive]);

   const TimerFormat = (limitTime) => {
      const minutes = Math.floor(limitTime / 60);
      const second = limitTime % 60;
      return `${minutes < 10 ? '0' : ''}${minutes} : ${second < 10 ? '0' : ''}${second}`
   }

   return (
      <div className="flex justify-center items-center">
         <strong className="text-xs">{TimerFormat(seconds)}</strong>
      </div>
   )
}
