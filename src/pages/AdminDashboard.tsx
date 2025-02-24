
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useAttendanceData } from "@/hooks/useAttendanceData";
import { AttendanceTable } from "@/components/admin/AttendanceTable";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminCheckLoading } = useIsAdmin(user?.id);
  const { attendanceData, loading: dataLoading } = useAttendanceData(isAdmin, adminCheckLoading, user?.id);
  const { toast } = useToast();

  useEffect(() => {
    console.log('AdminDashboard: Current state:', {
      user: user?.id,
      isAdmin,
      authLoading,
      adminCheckLoading,
    });

    let isMounted = true;

    if (!authLoading && !adminCheckLoading) {
      if (!user) {
        console.log('AdminDashboard: Redirecting - Not authenticated');
        navigate('/auth');
        return;
      }
      
      setTimeout(() => {
        if (!isMounted) return;
        
        if (!isAdmin) {
          console.log('AdminDashboard: No admin access. User:', user.id);
          toast({
            title: "Access Denied",
            description: "You don't have admin privileges",
            variant: "destructive",
          });
          navigate('/');
          return;
        }
      }, 200);
    }

    return () => {
      isMounted = false;
    };
  }, [isAdmin, adminCheckLoading, user, navigate, toast, authLoading]);

  if (dataLoading || adminCheckLoading || authLoading) {
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
      <AttendanceTable attendanceData={attendanceData} />
    </div>
  );
};

export default AdminDashboard;
