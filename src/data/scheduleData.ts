
import { Class } from "@/types/schedule";

export const scheduleData: { [key: string]: Class[] } = {
  "Monday": [
    {
      id: "1",
      name: "Beginner Kung Fu",
      time: "6:00pm - 7:30pm",
      day: "Monday",
      instructor: "Shifu Chen",
      level: "Beginner"
    },
    {
      id: "2",
      name: "Advanced Forms",
      time: "7:30pm - 9:00pm",
      day: "Monday",
      instructor: "Shifu Wang",
      level: "Advanced"
    }
  ],
  "Tuesday": [
    {
      id: "3",
      name: "Tai Chi",
      time: "6:00pm - 7:00pm",
      day: "Tuesday",
      instructor: "Shifu Li",
      level: "All Levels"
    },
    {
      id: "4",
      name: "Weapons Training",
      time: "7:15pm - 8:45pm",
      day: "Tuesday",
      instructor: "Shifu Zhang",
      level: "Intermediate"
    }
  ],
  "Wednesday": [
    {
      id: "5",
      name: "Beginner Kung Fu",
      time: "6:00pm - 7:30pm",
      day: "Wednesday",
      instructor: "Shifu Chen",
      level: "Beginner"
    },
    {
      id: "6",
      name: "Meditation & Qigong",
      time: "7:45pm - 8:45pm",
      day: "Wednesday",
      instructor: "Shifu Wu",
      level: "All Levels"
    }
  ],
  "Thursday": [
    {
      id: "7",
      name: "Sanda (Kickboxing)",
      time: "6:00pm - 7:15pm",
      day: "Thursday",
      instructor: "Shifu Liu",
      level: "Intermediate"
    },
    {
      id: "8",
      name: "Advanced Forms",
      time: "7:30pm - 9:00pm",
      day: "Thursday",
      instructor: "Shifu Wang",
      level: "Advanced"
    }
  ],
  "Friday": [
    {
      id: "9",
      name: "Open Training",
      time: "6:00pm - 8:00pm",
      day: "Friday",
      instructor: "Various Instructors",
      level: "All Levels"
    }
  ],
  "Saturday": [
    {
      id: "10",
      name: "Kids Kung Fu",
      time: "10:00am - 11:00am",
      day: "Saturday",
      instructor: "Shifu Chen",
      level: "Kids (6-12)"
    },
    {
      id: "11",
      name: "All Levels Kung Fu",
      time: "11:15am - 12:45pm",
      day: "Saturday",
      instructor: "Shifu Wang",
      level: "All Levels"
    }
  ]
};
