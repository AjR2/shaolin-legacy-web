
import { useState, useEffect } from "react";
import { scheduleData } from "@/data/scheduleData";
import { Class } from "@/types/schedule";

export function useSchedule() {
  const [schedule, setSchedule] = useState<{ [key: string]: Class[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate loading for a smoother UI experience
    const timer = setTimeout(() => {
      try {
        setSchedule(scheduleData);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { schedule, loading, error };
}
