
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Tutorial Videos</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorialVideos.map((video, index) => (
          <Card key={index} className="flex flex-col border-temple-200">
            <div className="aspect-video w-full bg-temple-100">
              <iframe
                src={video.videoUrl}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <CardHeader className="bg-temple-50">
              <CardTitle className="text-xl text-temple-900">{video.title}</CardTitle>
              <CardDescription className="text-temple-600">{video.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 mt-auto bg-temple-50">
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
  );
};

export default Videos;
