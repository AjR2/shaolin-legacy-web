
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { AttendanceData, AttendanceRecord } from "@/types/admin";
import { User } from "@supabase/supabase-js";

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
            id,
            user_id,
            status,
            attended,
            attended_date,
            classes!inner (
              name,
              day,
              time
            )
          `)
          .returns<AttendanceRecord[]>();

        if (error) throw error;
        if (!attendanceRecords || !isMounted) return;

        // Fetch user emails in a separate query
        const { data: usersData, error: usersError } = await supabase.auth.admin.listUsers();
        if (usersError) throw usersError;

        // Create a properly typed array of tuples
        const userEmailEntries: [string, string][] = usersData.users.map((user: User) => [
          user.id,
          user.email ?? 'Unknown'
        ]);

        // Create the Map from the properly typed array
        const userEmailMap = new Map<string, string>(userEmailEntries);

        const formattedData: AttendanceData[] = attendanceRecords.map(item => {
          const userEmail = userEmailMap.get(item.user_id) ?? 'Unknown';
          
          return {
            user_id: item.user_id,
            user_email: userEmail,
            class_name: item.classes.name,
            day: item.classes.day,
            time: item.classes.time,
            attended: item.attended,
            attended_date: item.attended_date,
            status: item.status,
          };
        });

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
            description: error.message || "Failed to fetch attendance data",
            variant: "destructive",
          });
          setLoading(false);
        }
      }
    };

    setLoading(true);
    if (isAdmin && userId && !adminCheckLoading) {
      fetchAttendanceData();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [isAdmin, adminCheckLoading, userId, toast]);

  return { attendanceData, loading };
};
