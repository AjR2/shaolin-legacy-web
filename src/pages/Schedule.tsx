
import { useSchedule } from "@/hooks/useSchedule";
import { DaySchedule } from "@/components/schedule/DaySchedule";
import { useAuth } from "@/hooks/useAuth";
import { Skeleton } from "@/components/ui/skeleton";

const Schedule = () => {
  const { schedule, loading, error } = useSchedule();
  const { user, loading: authLoading } = useAuth();

  if (loading || authLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-temple-900 mb-8">Class Schedule</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-12 w-full bg-temple-50" />
              <div className="space-y-4">
                {[...Array(2)].map((_, idx) => (
                  <Skeleton key={idx} className="h-32 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-temple-900 mb-8">Class Schedule</h1>
        <div className="p-4 bg-red-50 text-red-500 rounded-md">
          An error occurred while loading the schedule. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Class Schedule</h1>
      
      {!user && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-700">
          Sign in to register for classes and track your attendance.
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Object.entries(schedule).map(([day, classes]) => (
          <DaySchedule
            key={day}
            day={day}
            classes={classes}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
