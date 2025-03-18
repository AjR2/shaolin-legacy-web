import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Users, Target, Medal, School, Brush, Cloud, Gift, Video } from "lucide-react";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>("all");

  const videoCategories = [
    { id: "all", name: "All Videos", icon: BookOpen },
    { id: "instructional", name: "Instructional", icon: BookOpen },
    { id: "kungfu", name: "Kung Fu", icon: Target },
    { id: "student", name: "Students", icon: Users },
  ];

  const photoCategories = [
    { id: "all", name: "All Photos", icon: BookOpen },
    { id: "yongxin", name: "Master Shi Yongxin", icon: Medal },
    { id: "yanruan", name: "Shi Yanruan", icon: Medal },
    { id: "students", name: "Students", icon: Users },
    { id: "classes", name: "Classes", icon: School },
    { id: "meditation", name: "Meditation", icon: Cloud },
    { id: "buddhasbirthday", name: "Buddha's Birthday", icon: Gift },
    { id: "school", name: "School", icon: Brush },
    { id: "performance", name: "Performance", icon: Video },
  ];

  const getEmbedUrl = (url: string) => {
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

  const tutorialVideos = [
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

  const photos = [
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
  ];

  const filteredVideos = activeCategory === "all" 
    ? tutorialVideos 
    : tutorialVideos.filter(video => video.category === activeCategory);

  const filteredPhotos = activePhotoCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === activePhotoCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Media Gallery</h1>
      
      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="videos">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-4">Video Categories</h3>
                  <ul className="space-y-2">
                    {videoCategories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center w-full p-2 rounded-md text-sm ${
                            activeCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted-foreground/10"
                          }`}
                        >
                          <category.icon className="h-4 w-4 mr-2" />
                          <span>{category.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredVideos.map((video, index) => (
                    <Card key={index} className="flex flex-col">
                      <div className="aspect-video w-full bg-temple-100">
                        <iframe
                          src={getEmbedUrl(video.videoUrl)}
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{video.title}</CardTitle>
                        <CardDescription>{video.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 mt-auto">
                        <div className="flex justify-between text-sm text-temple-600">
                          <span>Instructor: {video.instructor}</span>
                          <span>Duration: {video.duration}</span>
                        </div>
                        <div className="inline-block px-2 py-1 bg-temple-100 text-temple-800 text-sm rounded">
                          {video.level}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="photos">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-lg font-medium mb-4">Photo Categories</h3>
                  <ul className="space-y-2">
                    {photoCategories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setActivePhotoCategory(category.id)}
                          className={`flex items-center w-full p-2 rounded-md text-sm ${
                            activePhotoCategory === category.id
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted-foreground/10"
                          }`}
                        >
                          <category.icon className="h-4 w-4 mr-2" />
                          <span>{category.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPhotos.map((photo, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={photo.imageUrl}
                          alt={photo.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{photo.title}</CardTitle>
                        <CardDescription>{photo.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Captured: {photo.date}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Videos;
