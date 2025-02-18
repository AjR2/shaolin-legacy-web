
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Class {
  id: string;
  name: string;
  time: string;
  day: string;
  level: string;
  instructor: string;
}

interface Attendance {
  id: string;
  class_id: string;
}

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

        // Group classes by day
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

  const isRegistered = (classId: string) => {
    return userAttendance.some(a => a.class_id === classId);
  };

  const handleRegistration = async (classId: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }

    try {
      if (isRegistered(classId)) {
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
          .insert([{ user_id: user.id, class_id: classId }])
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
          <Card key={day} className="flex flex-col">
            <CardHeader className="bg-temple-50">
              <CardTitle className="text-xl text-temple-900">{day}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 pt-6">
              {classes.map((classItem) => (
                <div
                  key={classItem.id}
                  className="p-4 bg-white rounded-lg border border-temple-100"
                >
                  <h3 className="font-semibold text-temple-900">{classItem.name}</h3>
                  <p className="text-sm text-temple-600 mt-1">{classItem.time}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-temple-600">
                      {classItem.instructor}
                    </span>
                    <span className="inline-block px-2 py-1 bg-temple-50 text-temple-800 text-xs rounded">
                      {classItem.level}
                    </span>
                  </div>
                  <Button
                    className="w-full mt-3"
                    variant={isRegistered(classItem.id) ? "destructive" : "default"}
                    onClick={() => handleRegistration(classItem.id)}
                  >
                    {isRegistered(classItem.id) ? "Cancel Registration" : "Register"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
