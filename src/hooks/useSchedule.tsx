
import { useState, useEffect } from "react";
import { scheduleData } from "@/data/scheduleData";
import { Class } from "@/types/schedule";
import { useToast } from "@/hooks/use-toast";

// Define day order for sorting
const dayOrder = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export function useSchedule() {
  const [schedule, setSchedule] = useState<{ [key: string]: Class[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    try {
      // Use the static schedule data instead of fetching from Supabase
      setSchedule(scheduleData);
      setLoading(false);
    } catch (err) {
      console.error('Error loading schedule data:', err);
      toast({
        title: "Error",
        description: "Failed to load schedule. Please try again later.",
        variant: "destructive",
      });
      setError(err as Error);
      setLoading(false);
    }
  }, [toast]);

  return { schedule, loading, error };
}
