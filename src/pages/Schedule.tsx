
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Schedule = () => {
  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        {
          time: "6:00 AM - 7:30 AM",
          name: "Morning Qigong",
          level: "All Levels",
          instructor: "Master Chen Wei",
        },
        {
          time: "4:00 PM - 5:30 PM",
          name: "Kids Kung Fu",
          level: "Beginner",
          instructor: "Sifu Sarah Wong",
        },
        {
          time: "6:00 PM - 7:30 PM",
          name: "Adult Forms",
          level: "Intermediate",
          instructor: "Sifu Li Ming",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          time: "7:00 AM - 8:30 AM",
          name: "Traditional Forms",
          level: "Advanced",
          instructor: "Master Chen Wei",
        },
        {
          time: "5:00 PM - 6:30 PM",
          name: "Basic Techniques",
          level: "Beginner",
          instructor: "Sifu Li Ming",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "6:00 AM - 7:30 AM",
          name: "Morning Meditation",
          level: "All Levels",
          instructor: "Master Chen Wei",
        },
        {
          time: "4:00 PM - 5:30 PM",
          name: "Youth Combat Skills",
          level: "Intermediate",
          instructor: "Sifu Sarah Wong",
        },
        {
          time: "6:00 PM - 7:30 PM",
          name: "Advanced Forms",
          level: "Advanced",
          instructor: "Master Chen Wei",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          time: "7:00 AM - 8:30 AM",
          name: "Weapons Training",
          level: "Advanced",
          instructor: "Sifu Li Ming",
        },
        {
          time: "5:00 PM - 6:30 PM",
          name: "Beginner Forms",
          level: "Beginner",
          instructor: "Sifu Sarah Wong",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          time: "6:00 AM - 7:30 AM",
          name: "Morning Qigong",
          level: "All Levels",
          instructor: "Master Chen Wei",
        },
        {
          time: "4:00 PM - 5:30 PM",
          name: "Kids Kung Fu",
          level: "Beginner",
          instructor: "Sifu Sarah Wong",
        },
        {
          time: "6:00 PM - 7:30 PM",
          name: "Open Training",
          level: "All Levels",
          instructor: "All Instructors",
        },
      ],
    },
    {
      day: "Saturday",
      classes: [
        {
          time: "9:00 AM - 10:30 AM",
          name: "Family Class",
          level: "All Levels",
          instructor: "Sifu Sarah Wong",
        },
        {
          time: "11:00 AM - 12:30 PM",
          name: "Traditional Forms",
          level: "Intermediate",
          instructor: "Master Chen Wei",
        },
      ],
    },
    {
      day: "Sunday",
      classes: [
        {
          time: "10:00 AM - 11:30 AM",
          name: "Meditation & Philosophy",
          level: "All Levels",
          instructor: "Master Chen Wei",
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Class Schedule</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {weeklySchedule.map((day) => (
          <Card key={day.day} className="flex flex-col border-temple-200">
            <CardHeader className="bg-temple-100/50">
              <CardTitle className="text-xl text-temple-900">{day.day}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 pt-6 bg-temple-50">
              {day.classes.map((classItem, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-temple-200 hover:bg-temple-50 transition-colors"
                >
                  <h3 className="font-semibold text-temple-900">{classItem.name}</h3>
                  <p className="text-sm text-temple-600 mt-1">{classItem.time}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-temple-600">
                      {classItem.instructor}
                    </span>
                    <span className="inline-block px-2 py-1 bg-temple-100 text-temple-800 text-xs rounded">
                      {classItem.level}
                    </span>
                  </div>
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
