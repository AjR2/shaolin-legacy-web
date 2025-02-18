
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { format } from "date-fns";

interface AttendanceRecord {
  id: string;
  user: {
    email: string;
  };
  class: {
    name: string;
    day: string;
    time: string;
  };
  attended: boolean;
  attended_date: string | null;
}

const AdminAttendance = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAdmin, setIsAdmin] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }

      const { data: adminData } = await supabase
        .from('admin_users')
        .select('id')
        .eq('user_id', session.user.id)
        .single();

      if (!adminData) {
        toast({
          title: "Access Denied",
          description: "You don't have permission to view this page.",
          variant: "destructive",
        });
        navigate('/');
        return;
      }

      setIsAdmin(true);
    };

    checkAdminStatus();
  }, [navigate, toast]);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      if (!isAdmin) return;

      try {
        const { data, error } = await supabase
          .from('attendance')
          .select(`
            id,
            attended,
            attended_date,
            user:user_id (
              email
            ),
            class:class_id (
              name,
              day,
              time
            )
          `)
          .order('attended_date', { ascending: false });

        if (error) throw error;

        setAttendanceRecords(data || []);
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

    fetchAttendanceRecords();
  }, [isAdmin, toast]);

  if (!isAdmin || isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Attendance Records</h1>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Day</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Attended</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{record.user.email}</TableCell>
                <TableCell>{record.class.name}</TableCell>
                <TableCell>{record.class.day}</TableCell>
                <TableCell>{record.class.time}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    record.attended ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {record.attended ? 'Attended' : 'Registered'}
                  </span>
                </TableCell>
                <TableCell>
                  {record.attended_date 
                    ? format(new Date(record.attended_date), 'MMM d, yyyy')
                    : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminAttendance;
