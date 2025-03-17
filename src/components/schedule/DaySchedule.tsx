
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Class } from "@/types/schedule";
import { ClassCard } from "./ClassCard";

interface DayScheduleProps {
  day: string;
  classes: Class[];
}

export const DaySchedule = ({
  day,
  classes,
}: DayScheduleProps) => {
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
          />
        ))}
      </CardContent>
    </Card>
  );
};
