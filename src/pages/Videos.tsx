
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Videos = () => {
  const tutorialVideos = [
    {
      title: "Basic Stances & Footwork",
      description: "Learn the fundamental stances of Shaolin Kung Fu",
      videoUrl: "https://www.youtube.com/embed/example1",
      instructor: "Master Chen Wei",
      level: "Beginner",
      duration: "15 minutes",
    },
    {
      title: "Introduction to Forms",
      description: "Understanding the basics of Shaolin forms practice",
      videoUrl: "https://www.youtube.com/embed/example2",
      instructor: "Sifu Li Ming",
      level: "Beginner",
      duration: "20 minutes",
    },
    {
      title: "Advanced Form: Five Animals",
      description: "Detailed breakdown of the Five Animals form",
      videoUrl: "https://www.youtube.com/embed/example3",
      instructor: "Master Chen Wei",
      level: "Advanced",
      duration: "30 minutes",
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Media Gallery</h1>
      
      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="videos">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialVideos.map((video, index) => (
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
