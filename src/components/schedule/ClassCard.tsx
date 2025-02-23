
import { Button } from "@/components/ui/button";
import { Class, Attendance } from "@/types/schedule";

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
          <Button
            className="w-full"
            variant={attendance.attended ? "secondary" : "outline"}
            onClick={() => onAttendance(classItem.id)}
          >
            {attendance.attended ? "✓ Attended" : "Mark as Attended"}
          </Button>
        )}
      </div>
    </div>
  );
};
