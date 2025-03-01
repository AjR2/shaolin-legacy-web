
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
    </div>
  );
};
