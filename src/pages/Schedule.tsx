
import { useSchedule } from "@/hooks/useSchedule";
import { DaySchedule } from "@/components/schedule/DaySchedule";
import { Skeleton } from "@/components/ui/skeleton";

const dayOrder = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const Schedule = () => {
  const { schedule, loading, error } = useSchedule();

  if (loading) {
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

  const sortedDays = Object.keys(schedule).sort((a, b) => {
    return dayOrder.indexOf(a) - dayOrder.indexOf(b);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Class Schedule</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedDays.map(day => (
          <DaySchedule
            key={day}
            day={day}
            classes={schedule[day]}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
