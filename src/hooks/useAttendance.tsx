
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Attendance } from "@/types/schedule";

export const useAttendance = (user: any) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userAttendance, setUserAttendance] = useState<Attendance[]>([]);

  useEffect(() => {
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
      }
    };

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

  return { userAttendance, handleRegistration, handleAttendance };
};
