import { BookOpen, Users, Target, Medal, School, Brush, Cloud, Gift, Video, Crown } from "lucide-react";

export interface VideoCategory {
  id: string;
  name: string;
  icon: any;
}

export interface Video {
  title: string;
  description: string;
  videoUrl: string;
  instructor: string;
  level: string;
  duration: string;
  category: string;
}

export interface PhotoCategory {
  id: string;
  name: string;
  icon: any;
}

export interface Photo {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

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

export const tutorialVideos: Video[] = [
  {
    title: "Five Motions",
    description: "Learn the fundamental stances of Shaolin Kung Fu",
    videoUrl: "https://www.youtube.com/embed/yhlWmvwa40w",
    instructor: "Shi Yanruan",
    level: "Beginner",
    duration: "1 minute 34 seconds",
    category: "instructional",
  },
  {
    title: "Lian Huan Fist",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://www.youtube.com/watch?v=JPmH-rgOwLE&t=21s",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "2 minutes 15 seconds",
    category: "instructional",
  },
  {
    title: "Tong Bi Fist",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/Z17wEXfX3RE",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "3 minutes 17 seconds",
    category: "instructional",
  },
  {
    title: "Xiao Hong Fist",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/WaWZ1TWA-ds",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "5 minutes 36 seconds",
    category: "instructional",
  },
  {
    title: "Yin Shou Staff",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/L43Inkt-oDQ",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "3 minutes 51 seconds",
    category: "instructional",
  },
  {
    title: "Tong Bi Sword",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/44seTxBNHno",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "4 minutes 21 seconds",
    category: "instructional",
  },
  {
    title: "5 Animals",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/st7KwJK5JyM",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "3 minutes 12 seconds",
    category: "instructional",
  },
  {
    title: "Tong Bi Sword(Student)",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/GWSCE8ZCsjo",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "1 minute 36 seconds",
    category: "student",
  },
  {
    title: "Pao Quan(Student)",
    description: "Understanding the basics of Shaolin forms practice",
    videoUrl: "https://youtu.be/SewEg590jss",
    instructor: "Shi Yanruan",
    level: "Intermediate",
    duration: "1 minute 34 seconds",
    category: "student",
  },
];

export const photos: Photo[] = [
  {
    title: "Temple Training",
    description: "Students practicing in the temple courtyard",
    imageUrl: "/ShaolinCommunity.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Master Demonstration",
    description: "Sifu demonstrating advanced techniques",
    imageUrl: "/SifuWoodStance.png",
    date: "2023",
    category: "yanruan",
  },
  {
    title: "Competition Team",
    description: "Our students at the national championship",
    imageUrl: "/asherComp.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Temple Celebration",
    description: "Annual Buddha's Birthday ceremony",
    imageUrl: "/ShiYanruan.png",
    date: "2023",
    category: "buddhasbirthday",
  },
  {
    title: "Abbot Visit",
    description: "Venerable Abbot Shi Yongxin's visit to our school",
    imageUrl: "/ShiYongxin.png",
    date: "2022",
    category: "yongxin",
  },
  {
    title: "Morning Practice",
    description: "Students in meditation session",
    imageUrl: "/ShiDonnie.png",
    date: "2023",
    category: "meditation",
  },
  {
    title: "Student Form Practice",
    description: "Young student demonstrating a Kung Fu stance",
    imageUrl: "/lovable-uploads/b87ac633-e1bf-4cf8-835e-185e0fa419d1.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Flexibility Training",
    description: "Student demonstrating flexibility and form",
    imageUrl: "/lovable-uploads/02759927-cd75-4d8e-9337-ec35df41754d.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Horse Stance Practice",
    description: "Adult student performing a traditional stance",
    imageUrl: "/lovable-uploads/5190f129-dfec-4dbd-88c9-c04adf94f262.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Weapon Training - Staff",
    description: "Young student practicing with the staff",
    imageUrl: "/lovable-uploads/69ab5e12-46d7-4c76-ac70-b02266757c3d.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Gong Fu Philosophy",
    description: "Traditional calligraphy and illustration of martial artists",
    imageUrl: "/lovable-uploads/273dbb6e-beed-48bc-adfe-b417b921113b.png",
    date: "2023",
    category: "kungfu",
  },
  {
    title: "Staff Form Practice",
    description: "Young student demonstrating staff technique",
    imageUrl: "/lovable-uploads/56774036-7988-4f96-8d60-aa2d81758b6b.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Weapon Form - Spear",
    description: "Student practicing traditional spear form",
    imageUrl: "/lovable-uploads/63040569-2f38-4b93-ad78-b64f95dea7de.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Staff Technique",
    description: "Student practicing advanced staff technique",
    imageUrl: "/lovable-uploads/d461d033-2832-4437-b337-a875163df974.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Broad Sword Training",
    description: "Adult student practicing with the broad sword",
    imageUrl: "/lovable-uploads/a155d4f0-58d5-413f-9467-f743510b27f3.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Kung Fu Stance",
    description: "Student demonstrating traditional stance with belt",
    imageUrl: "/lovable-uploads/14e3dba4-8a90-46fa-8af7-788407570cdd.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Defending Form",
    description: "Young student practicing defensive techniques",
    imageUrl: "/lovable-uploads/d584962f-8cc5-4223-8e3f-84375c8159d9.png",
    date: "2023",
    category: "students",
  },
  {
    title: "Historical Training Form",
    description: "Ancient Shaolin master demonstrating a training technique on roof",
    imageUrl: "/lovable-uploads/2d276b0c-0b55-4999-a1a3-39849ae3558a.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Temple Elder",
    description: "Shaolin monk in traditional robes with walking staff",
    imageUrl: "/lovable-uploads/6458b8be-f87e-4181-bb35-a707fae36f11.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Master Meditation",
    description: "Elder Shaolin master in deep focus during stone breaking practice",
    imageUrl: "/lovable-uploads/f7803e32-915a-43a2-8d3c-ac6d6098d80f.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Combat Training",
    description: "Two masters demonstrating Shaolin combat techniques",
    imageUrl: "/lovable-uploads/44af3d9d-0364-44a6-83cf-32bda2225b1d.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Sword Practice",
    description: "Master demonstrating traditional sword form",
    imageUrl: "/lovable-uploads/00cd9e9e-ad0e-4cc5-ad5e-76c1885f146f.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Temple Gathering",
    description: "Shaolin master with temple disciples and visitors",
    imageUrl: "/lovable-uploads/a7b9deae-3349-4da6-87ce-3d9135a2d900.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Seated Master",
    description: "Elder Shaolin master in traditional robes on temple grounds",
    imageUrl: "/lovable-uploads/7ac5b06c-0d66-4f7a-bc94-2fc0a1e3dc5c.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Kung Fu Stance",
    description: "Master demonstrating traditional Shaolin stance",
    imageUrl: "/lovable-uploads/6f4ce858-bd20-48d1-9a4d-44bdecfa1665.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Balance Training",
    description: "Master performing advanced balance technique",
    imageUrl: "/lovable-uploads/09c1a5c7-27f4-4c91-b913-07911185c2f5.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Temple Courtyard",
    description: "Young monk practicing traditional form",
    imageUrl: "/lovable-uploads/1c8e4764-7384-4d57-ac76-632a74a87702.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Temple Practice",
    description: "Master in formal pose demonstrating hand technique",
    imageUrl: "/lovable-uploads/62aeef18-b162-47a9-af83-e1c01d2dccba.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Mountain Training",
    description: "Elder master in traditional garb with sword",
    imageUrl: "/lovable-uploads/73e29cbd-0d08-47eb-b4d3-b800516c114f.png",
    date: "Historical",
    category: "master",
  },
  {
    title: "Training Practice",
    description: "Students practicing basic forms with instructor",
    imageUrl: "/lovable-uploads/01f40094-dfba-4d40-b49e-764688933edc.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Instructor Demonstration",
    description: "Sifu demonstrating techniques to students",
    imageUrl: "/lovable-uploads/e22ac8d9-5caf-4327-8eb6-f4d11344aef1.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Class Photo",
    description: "Group photo of students with Sifu",
    imageUrl: "/lovable-uploads/5521ac0c-b304-4b1b-b9b2-2afb62ce5a42.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Flexibility Training",
    description: "Students practicing flexibility at the barre",
    imageUrl: "/lovable-uploads/ae1640b3-9a88-491a-b04b-8e57ca312b25.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Form Practice",
    description: "Group practicing synchronized forms",
    imageUrl: "/lovable-uploads/917cf51b-dcad-492e-87d1-7e7721eb2475.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Class in Motion",
    description: "Students and teacher during active training",
    imageUrl: "/lovable-uploads/c48b2037-c1a7-4f31-80e7-de54b52f7fed.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Children's Class",
    description: "Young students practicing with instructor",
    imageUrl: "/lovable-uploads/c35415eb-d689-4637-9213-b59aae885153.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Group Training",
    description: "Class in formation during training session",
    imageUrl: "/lovable-uploads/c1e84fad-57db-46c7-8c2c-8ce6796f0888.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Formal Bow",
    description: "Students showing respect with traditional bow",
    imageUrl: "/lovable-uploads/85450459-fd31-495f-8c85-7a1bc82c7bd9.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Leg Stretching",
    description: "Advanced flexibility training at the barre",
    imageUrl: "/lovable-uploads/54a24efd-6357-4928-8f20-69a848929af7.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Staff Training",
    description: "Students practicing with staffs in unison",
    imageUrl: "/lovable-uploads/861ad9da-72f0-40e9-a7d8-3f9d7d40d9eb.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Martial Demonstration",
    description: "Sifu demonstrating techniques for observers",
    imageUrl: "/lovable-uploads/e532f955-2ba1-4f36-8b66-0d7d368a78f5.png",
    date: "2023",
    category: "classes",
  },
  {
    title: "Young Sword Performer",
    description: "Young student demonstrating sword form at cultural performance",
    imageUrl: "/lovable-uploads/80003e3d-f53e-4146-8a60-5625c0bc4774.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Staff Demonstration Team",
    description: "Group of practitioners performing staff forms during Lunar New Year celebration",
    imageUrl: "/lovable-uploads/d1971118-d739-4272-86b4-e8c9d7f45d1b.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Kung Fu Combat Scene",
    description: "Demonstration of martial arts techniques during cultural event",
    imageUrl: "/lovable-uploads/b2a092eb-88e4-406d-9089-c4a21d56f9b8.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Group Performance with Children",
    description: "Students of all ages in a group martial arts demonstration",
    imageUrl: "/lovable-uploads/7d7a4c24-bf4f-42ef-9a82-2f9898a17923.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Young Female Practitioner",
    description: "Young female student demonstrating martial arts form",
    imageUrl: "/lovable-uploads/bc2857ba-b73e-4866-bf91-fdb9daaf2dfe.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Master Staff Technique",
    description: "Advanced staff technique demonstration by senior practitioners",
    imageUrl: "/lovable-uploads/3ef3ec20-cd0d-4ab6-a906-253d2c8cd657.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Young Form Demonstrator",
    description: "Young student performing traditional stance at cultural center",
    imageUrl: "/lovable-uploads/aa3ba06d-3e84-47b1-9648-c74b08af779b.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Formation Training",
    description: "Group of practitioners in synchronized stance demonstration",
    imageUrl: "/lovable-uploads/7d77ca0b-6db8-41d4-8e35-a231ceccd23c.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Young Performer Stance",
    description: "Child demonstrating low stance during cultural performance",
    imageUrl: "/lovable-uploads/f20816ec-d85b-47f8-8208-9ca9464393e6.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Group Performance",
    description: "Students performing in unison at community cultural event",
    imageUrl: "/lovable-uploads/1db69471-b6c1-4302-95f4-4e8dae6f2163.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Children's Performance Group",
    description: "Young students demonstrating martial arts moves in formation",
    imageUrl: "/lovable-uploads/f5e659b3-0cee-4037-958f-5f14e9f2cdae.png",
    date: "2023",
    category: "performance",
  },
  {
    title: "Staff Performance",
    description: "Advanced staff techniques demonstrated during cultural celebration",
    imageUrl: "/lovable-uploads/6c20d93e-75b4-4663-a39b-a97b0f643c00.png",
    date: "2023",
    category: "performance",
  },
];

export const getEmbedUrl = (url: string) => {
  if (!url) return "";
  
  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1]?.split("&")[0].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  
  if (url.includes("youtube.com/watch")) {
    const id = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  
  return url;
};
