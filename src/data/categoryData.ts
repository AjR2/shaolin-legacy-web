
import { BookOpen, Users, Target, Medal, School, Brush, Cloud, Gift, Video, Crown } from "lucide-react";
import { VideoCategory, PhotoCategory } from "./mediaTypes";

export const videoCategories: VideoCategory[] = [
  { id: "all", name: "All Videos", icon: BookOpen },
  { id: "instructional", name: "Instructional", icon: BookOpen },
  { id: "kungfu", name: "Kung Fu", icon: Target },
  { id: "student", name: "Students", icon: Users },
];

export const photoCategories: PhotoCategory[] = [
  { id: "all", name: "All Photos", icon: BookOpen },
  { id: "yongxin", name: "Master Shi Yongxin", icon: Medal },
  { id: "yanruan", name: "Shi Yanruan", icon: Medal },
  { id: "master", name: "Historical Masters", icon: Crown },
  { id: "students", name: "Students", icon: Users },
  { id: "classes", name: "Classes", icon: School },
  { id: "meditation", name: "Meditation", icon: Cloud },
  { id: "buddhasbirthday", name: "Buddha's Birthday", icon: Gift },
  { id: "performance", name: "Performance", icon: Video },
];
