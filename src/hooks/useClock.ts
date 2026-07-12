import { useState, useEffect } from "react";

export const useClock = () => {
  const [now, setNow] = useState(Date.now());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatClock = () => {
    const t = new Date(now);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`;
  };

  return { formatClock };
};
