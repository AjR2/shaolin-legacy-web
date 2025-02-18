
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Class, Attendance } from "@/types/schedule";
import { ClassCard } from "./ClassCard";

interface DayScheduleProps {
  day: string;
  classes: Class[];
  userAttendance: Attendance[];
  onRegister: (classId: string) => void;
  onAttendance: (classId: string) => void;
}

export const DaySchedule = ({
  day,
  classes,
  userAttendance,
  onRegister,
  onAttendance,
}: DayScheduleProps) => {
  const isRegistered = (classId: string) => {
    return userAttendance.some(a => a.class_id === classId);
  };

  const getAttendanceRecord = (classId: string) => {
    return userAttendance.find(a => a.class_id === classId);
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="bg-temple-50">
        <CardTitle className="text-xl text-temple-900">{day}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 pt-6">
        {classes.map((classItem) => (
          <ClassCard
            key={classItem.id}
            classItem={classItem}
            attendance={getAttendanceRecord(classItem.id)}
            isRegistered={isRegistered(classItem.id)}
            onRegister={onRegister}
            onAttendance={onAttendance}
          />
        ))}
      </CardContent>
    </Card>
  );
};
