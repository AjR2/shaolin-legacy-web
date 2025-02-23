
import { Button } from "@/components/ui/button";
import { Class, Attendance, ClassAttendance } from "@/types/schedule";
import { format } from "date-fns";

interface ClassCardProps {
  classItem: Class;
  attendance?: Attendance;
  isRegistered: boolean;
  onRegister: (classId: string) => void;
  onAttendance: (classId: string) => void;
}

export const ClassCard = ({
  classItem,
  attendance,
  isRegistered,
  onRegister,
  onAttendance,
}: ClassCardProps) => {
  const today = new Date().toISOString().split('T')[0];
  
  // Check if user has already attended today
  const hasAttendedToday = attendance?.attendance_dates?.includes(today);

  return (
    <div className="p-4 bg-white rounded-lg border border-temple-100">
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
      <div className="space-y-2 mt-3">
        <Button
          className="w-full"
          variant={isRegistered ? "destructive" : "default"}
          onClick={() => onRegister(classItem.id)}
        >
          {isRegistered ? "Cancel Registration" : "Register"}
        </Button>
        {attendance && (
          <>
            <Button
              className="w-full"
              variant={hasAttendedToday ? "secondary" : "outline"}
              onClick={() => onAttendance(classItem.id)}
            >
              {hasAttendedToday ? "✓ Attended Today" : "Mark as Attended"}
            </Button>
            {attendance.attendance_dates && attendance.attendance_dates.length > 0 && (
              <div className="text-sm text-temple-600 mt-2">
                <p className="font-semibold">Recent Attendance:</p>
                <div className="max-h-20 overflow-y-auto">
                  {attendance.attendance_dates
                    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
                    .map((date, index) => (
                      <div key={index} className="text-xs mt-1">
                        {format(new Date(date), 'MMM d, yyyy')}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
