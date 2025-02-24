
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Class, Attendance } from "@/types/schedule";
import { DaySchedule } from "@/components/schedule/DaySchedule";

const Schedule = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [weeklySchedule, setWeeklySchedule] = useState<{ [key: string]: Class[] }>({});
  const [userAttendance, setUserAttendance] = useState<Attendance[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setUser(session.user);
    };
    checkUser();
  }, [navigate]);

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
      }
    };

    const fetchUserAttendance = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('attendance')
          .select('*')
          .eq('user_id', user.id);

        if (error) throw error;
        setUserAttendance(data || []);
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
    fetchUserAttendance();
  }, [user, toast]);

  const handleRegistration = async (classId: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }

    try {
      const isRegistered = userAttendance.some(a => a.class_id === classId);

      if (isRegistered) {
        // Unregister
        const { error } = await supabase
          .from('attendance')
          .delete()
          .eq('user_id', user.id)
          .eq('class_id', classId);

        if (error) throw error;

        setUserAttendance(prev => prev.filter(a => a.class_id !== classId));
        toast({
          title: "Success",
          description: "Successfully unregistered from class",
        });
      } else {
        // Register
        const { data, error } = await supabase
          .from('attendance')
          .insert([{ 
            user_id: user.id, 
            class_id: classId, 
            attended: false,
            status: 'confirmed'
          }])
          .select();

        if (error) throw error;

        setUserAttendance(prev => [...prev, data[0]]);
        toast({
          title: "Success",
          description: "Successfully registered for class",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleAttendance = async (classId: string) => {
    if (!user) return;

    const attendance = userAttendance.find(a => a.class_id === classId);
    if (!attendance) return;

    try {
      const today = new Date().toISOString().split('T')[0];
      
      // Update the attendance record
      const { error } = await supabase
        .from('attendance')
        .update({ 
          attended: !attendance.attended,
          attended_date: !attendance.attended ? today : null
        })
        .eq('id', attendance.id)
        .select();

      if (error) throw error;

      setUserAttendance(prev =>
        prev.map(a =>
          a.id === attendance.id 
            ? { 
                ...a, 
                attended: !a.attended,
                attended_date: !a.attended ? today : null
              } 
            : a
        )
      );

      toast({
        title: "Success",
        description: `Marked class as ${!attendance.attended ? 'attended' : 'not attended'}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p>Loading schedule...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Class Schedule</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(weeklySchedule).map(([day, classes]) => (
          <DaySchedule
            key={day}
            day={day}
            classes={classes}
            userAttendance={userAttendance}
            onRegister={handleRegistration}
            onAttendance={handleAttendance}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
