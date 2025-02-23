import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Videos = () => {
  const tutorialVideos = [
    {
      title: "Five Motions",
      description: "Learn the fundamental stances of Shaolin Kung Fu",
      videoUrl: "https://www.youtube.com/embed/yhlWmvwa40w",
      instructor: "Shi Yanruan",
      level: "Beginner",
      duration: "1 minute 34 seconds",
    },
    {
      title: "Introduction to Forms",
      description: "Understanding the basics of Shaolin forms practice",
      videoUrl: "https://www.youtube.com/embed/yhlWmvwa40w",
      instructor: "Sifu Li Ming",
      level: "Beginner",
      duration: "20 minutes",
    },
    {
      title: "Advanced Form: Five Animals",
      description: "Detailed breakdown of the Five Animals form",
      videoUrl: "https://www.youtube.com/embed/yhlWmvwa40w",
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

  const theoryContent = [
    {
      title: "Chan Buddhism",
      content: "Chan Buddhism is a school of Mahayana Buddhism that originated in China during the Tang dynasty. The Chan School was strongly influenced by Taoist philosophy, particularly Neo-Taoist thought, and developed as a distinct school of Chinese Buddhism.",
    },
    {
      title: "Qi Cultivation",
      content: "Qi cultivation is the practice of developing and nurturing one's vital energy through various methods including meditation, breathing exercises, and specific movement patterns. In Shaolin practice, qi cultivation is fundamental to developing both internal and external strength.",
    },
    {
      title: "Five Elements Theory",
      content: "The Five Elements Theory (Wu Xing) is a fundamental concept in Chinese philosophy and medicine that explains the relationship between different phenomena in nature. In Shaolin Kung Fu, it influences both combat strategy and health practices.",
    },
    {
      title: "Three Treasures",
      content: "The Three Treasures (San Bao) - Jing (essence), Qi (energy), and Shen (spirit) - are considered the fundamental energies of life in Chinese medicine and Shaolin practice. Cultivating and balancing these three aspects is essential for health and martial development.",
    },
    {
      title: "Yin and Yang",
      content: "The concept of Yin and Yang represents the duality and interconnectedness of opposing forces. In Shaolin practice, this principle guides both movement and strategy, teaching practitioners to blend hard and soft techniques effectively.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Media Gallery</h1>
      
      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="theory">Theory</TabsTrigger>
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

        <TabsContent value="theory">
          <Card>
            <CardHeader>
              <CardTitle>Shaolin Theory</CardTitle>
              <CardDescription>Understanding the philosophical foundations of Shaolin practice</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {theoryContent.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Videos;
