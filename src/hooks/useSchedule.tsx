
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Class } from "@/types/schedule";

export function useSchedule() {
  const [schedule, setSchedule] = useState<{ [key: string]: Class[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("classes")
          .select("*");

        if (error) throw error;

        // Group classes by day
        const groupedByDay = (data as Class[]).reduce((acc: { [key: string]: Class[] }, curr: Class) => {
          // Initialize the array for this day if it doesn't exist
          if (!acc[curr.day]) {
            acc[curr.day] = [];
          }
          // Add the current class to the array for this day
          acc[curr.day].push(curr);
          return acc;
        }, {});

        setSchedule(groupedByDay);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchScheduleData();
  }, []);

  return { schedule, loading, error };
}
