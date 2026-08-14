import React, { useCallback, useState } from "react";

const TIME = 3 * 60 * 1000;

export default function useCronometer() {
  const [countdownDate] = useState(() => Date.now() + TIME);

  const renderer = useCallback(({ minutes, seconds, completed }) => {
   if (completed) {
     return React.createElement("strong", null, "00:00");
   }

   const mm = String(minutes).padStart(2, "0");
   const ss = String(seconds).padStart(2, "0");

   return React.createElement("strong", { "aria-live": "polite" }, `${mm}:${ss}`);
  }, []);

  return { countdownDate, renderer };
}
