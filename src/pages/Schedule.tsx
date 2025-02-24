
import { useAuth } from "@/hooks/useAuth";
import { useSchedule } from "@/hooks/useSchedule";
import { useAttendance } from "@/hooks/useAttendance";
import { DaySchedule } from "@/components/schedule/DaySchedule";

const Schedule = () => {
  const { user } = useAuth();
  const { weeklySchedule, isLoading } = useSchedule();
  const { userAttendance, handleRegistration, handleAttendance } = useAttendance(user);

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
