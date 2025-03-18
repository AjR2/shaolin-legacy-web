
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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
    const fetchClasses = async () => {
      try {
        const { data, error } = await supabase
          .from('classes')
          .select('*')
          .order('day');

        if (error) throw error;

        // Group classes by day
        const groupedClasses: { [key: string]: Class[] } = {};
        data?.forEach((classItem: Class) => {
          if (!groupedClasses[classItem.day]) {
            groupedClasses[classItem.day] = [];
          }
          groupedClasses[classItem.day].push(classItem);
        });

        setSchedule(groupedClasses);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching classes:', err);
        toast({
          title: "Error",
          description: "Failed to load schedule. Please try again later.",
          variant: "destructive",
        });
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchClasses();
  }, [toast]);

  return { schedule, loading, error };
}
