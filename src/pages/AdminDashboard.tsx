
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AttendanceData {
  user_id: string;
  user_email: string;
  class_name: string;
  day: string;
  time: string;
  attended: boolean;
  attended_date: string | null;
  status: string;
}

interface AttendanceRecord {
  user_id: string;
  status: string;
  attended: boolean;
  attended_date: string | null;
  classes: {
    name: string;
    day: string;
    time: string;
  };
}

interface AdminUser {
  id: string;
  email: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminCheckLoading } = useIsAdmin(user?.id);
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;

    // Only redirect if we're not loading and the user is not authenticated or not admin
    if (!authLoading && !adminCheckLoading) {
      if (!user) {
        console.log('Redirecting: Not authenticated');
        navigate('/auth');
        return;
      }
      if (!isAdmin) {
        console.log('Redirecting: Not admin');
        navigate('/');
        return;
      }
    }

    const fetchAttendanceData = async () => {
      if (!isAdmin || adminCheckLoading || !user || !isMounted) return;

      try {
        const { data: attendanceRecords, error } = await supabase
          .from('attendance')
          .select(`
            user_id,
            status,
            attended,
            attended_date,
            classes (
              name,
              day,
              time
            )
          `) as { data: AttendanceRecord[] | null, error: Error | null };

        if (error) throw error;
        if (!attendanceRecords || !isMounted) return;

        // Get user emails
        const { data: { users }, error: userError } = await supabase.auth.admin.listUsers() as { 
          data: { users: AdminUser[] }, 
          error: Error | null 
        };
        
        if (userError) throw userError;
        if (!isMounted) return;

        const formattedData: AttendanceData[] = attendanceRecords.map(item => ({
          user_id: item.user_id,
          user_email: users.find(u => u.id === item.user_id)?.email || 'Unknown',
          class_name: item.classes.name,
          day: item.classes.day,
          time: item.classes.time,
          attended: item.attended,
          attended_date: item.attended_date,
          status: item.status,
        }));

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

    if (isAdmin && user && !authLoading) {
      fetchAttendanceData();
    }

    return () => {
      isMounted = false;
    };
  }, [isAdmin, adminCheckLoading, user, navigate, toast, authLoading]);

  // Show loading state while checking auth or admin status
  if (loading || adminCheckLoading || authLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin || !user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Email</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Day</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Attended</TableHead>
              <TableHead>Last Attendance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceData.map((record, index) => (
              <TableRow key={`${record.user_id}-${record.class_name}-${index}`}>
                <TableCell>{record.user_email}</TableCell>
                <TableCell>{record.class_name}</TableCell>
                <TableCell>{record.day}</TableCell>
                <TableCell>{record.time}</TableCell>
                <TableCell>{record.status}</TableCell>
                <TableCell>{record.attended ? "Yes" : "No"}</TableCell>
                <TableCell>
                  {record.attended_date 
                    ? new Date(record.attended_date).toLocaleDateString() 
                    : "Never"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminDashboard;
