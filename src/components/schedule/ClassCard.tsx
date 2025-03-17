
import { Button } from "@/components/ui/button";
import { Class } from "@/types/schedule";
import { useAuth } from "@/hooks/useAuth";
import { useAttendance } from "@/hooks/useAttendance";

interface ClassCardProps {
  classItem: Class;
}

export const ClassCard = ({
  classItem,
}: ClassCardProps) => {
  const { user } = useAuth();
  const { userAttendance, handleRegistration, handleAttendance } = useAttendance(user);
  
  const isRegistered = userAttendance.some(a => a.class_id === classItem.id);
  const hasAttended = userAttendance.find(a => a.class_id === classItem.id)?.attended || false;

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
      
      <div className="mt-4 space-y-2">
        <Button 
          variant={isRegistered ? "destructive" : "default"}
          size="sm"
          className="w-full"
          onClick={() => handleRegistration(classItem.id)}
        >
          {isRegistered ? "Cancel Registration" : "Register for Class"}
        </Button>
        
        {isRegistered && (
          <Button
            variant={hasAttended ? "outline" : "secondary"}
            size="sm"
            className="w-full"
            onClick={() => handleAttendance(classItem.id)}
          >
            {hasAttended ? "Mark as Not Attended" : "Mark as Attended"}
          </Button>
        )}
      </div>
    </div>
  );
};
