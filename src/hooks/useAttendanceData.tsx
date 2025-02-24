
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { AttendanceData, AttendanceRecord } from "@/types/admin";

export const useAttendanceData = (isAdmin: boolean, adminCheckLoading: boolean, userId: string | undefined) => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;

    const fetchAttendanceData = async () => {
      if (!isAdmin || adminCheckLoading || !userId || !isMounted) {
        console.log('useAttendanceData: Skipping fetch, conditions not met:', {
          isAdmin,
          adminCheckLoading,
          hasUser: !!userId,
          isMounted
        });
        return;
      }

      try {
        console.log('useAttendanceData: Fetching attendance data...');
        const { data: attendanceRecords, error } = await supabase
          .from('attendance')
          .select(`
            user_id,
            status,
            attended,
            attended_date,
            user_email:auth.users!attendance_user_id_fkey(email),
            classes (
              name,
              day,
              time
            )
          `) as { data: AttendanceRecord[] | null, error: Error | null };

        if (error) throw error;
        if (!attendanceRecords || !isMounted) return;

        const formattedData: AttendanceData[] = attendanceRecords.map(item => ({
          user_id: item.user_id,
          user_email: item.user_email || 'Unknown',
          class_name: item.classes.name,
          day: item.classes.day,
          time: item.classes.time,
          attended: item.attended,
          attended_date: item.attended_date,
          status: item.status,
        }));

        console.log('useAttendanceData: Data fetched successfully:', formattedData.length);

        if (isMounted) {
          setAttendanceData(formattedData);
          setLoading(false);
        }
      } catch (error: any) {
        console.error('Failed to fetch attendance data:', error);
        if (isMounted) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          setLoading(false);
        }
      }
    };

    if (isAdmin && userId && !adminCheckLoading) {
      fetchAttendanceData();
    }

    return () => {
      isMounted = false;
    };
  }, [isAdmin, adminCheckLoading, userId, toast]);

  return { attendanceData, loading };
};
