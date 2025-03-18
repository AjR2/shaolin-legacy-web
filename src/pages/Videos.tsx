
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { BookOpen, Users, Target } from "lucide-react";

const Videos = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const videoCategories = [
    { id: "all", name: "All Videos", icon: BookOpen },
    { id: "instructional", name: "Instructional", icon: BookOpen },
    { id: "kungfu", name: "Kung Fu", icon: Target },
    { id: "students", name: "Students", icon: Users },
  ];

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
      category: "kungfu",
    },
    {
      title: "Yin Shou Staff",
      description: "Detailed breakdown of the Yin Shou staff form",
      videoUrl: "https://www.youtube.com/watch?v=L43Inkt-oDQ&t=21s",
      instructor: "Shi Yanruan",
      level: "Beginner",
      duration: "3 minutes 51 seconds",
      category: "students",
    },
  ];

  const photos = [
    {
      title: "Temple Training",
      description: "Students practicing in the temple courtyard",
      imageUrl: "/ShaolinCommunity.png",
      date: "2023",
    },
    {
      title: "Master Demonstration",
      description: "Sifu demonstrating advanced techniques",
      imageUrl: "/SifuWoodStance.png",
      date: "2023",
    },
    {
      title: "Competition Team",
      description: "Our students at the national championship",
      imageUrl: "/asherComp.png",
      date: "2023",
    },
  ];

  const filteredVideos = activeCategory === "all" 
    ? tutorialVideos 
    : tutorialVideos.filter(video => video.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Media Gallery</h1>
      
      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="videos">
          <div className="flex gap-6">
            <SidebarProvider>
              <Sidebar variant="floating" className="w-56">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Video Categories</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {videoCategories.map((category) => (
                          <SidebarMenuItem key={category.id}>
                            <SidebarMenuButton 
                              onClick={() => setActiveCategory(category.id)}
                              isActive={activeCategory === category.id}
                            >
                              <category.icon className="h-4 w-4" />
                              <span>{category.name}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
          
              <div className="flex-1">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.map((video, index) => (
                    <Card key={index} className="flex flex-col">
                      <div className="aspect-video w-full bg-temple-100">
                        <iframe
                          src={video.videoUrl}
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
            </SidebarProvider>
          </div>
        </TabsContent>

        <TabsContent value="photos">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Videos;
