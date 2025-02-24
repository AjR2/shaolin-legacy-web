
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Class } from "@/types/schedule";

export const useSchedule = () => {
  const { toast } = useToast();
  const [weeklySchedule, setWeeklySchedule] = useState<{ [key: string]: Class[] }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const { data: classes, error } = await supabase
          .from('classes')
          .select('*');

        if (error) throw error;

        const grouped = (classes || []).reduce((acc: { [key: string]: Class[] }, curr: Class) => {
          if (!acc[curr.day]) acc[curr.day] = [];
          acc[curr.day].push(curr);
          return acc;
        }, {});

        setWeeklySchedule(grouped);
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, [toast]);

  return { weeklySchedule, isLoading };
};
