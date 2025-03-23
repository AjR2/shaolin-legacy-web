import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const announcements = [
  {
    title: "New Beginner Class Starting",
    date: "February 25 2025",
    content:
      "Join us for our new beginner class starting next month. Perfect for those new to Kung Fu.",
  },
  {
    title: "Closed for the Holidays",
    date: "12/18/2024",
    content:
      "Shaolin Temple Rockville will be closed from 12/21/24-1/2/25. See Sifu to make up a class",
  },
];

const carouselImages = [
  {
    url: "SifuWoodStance.png",
    alt: "Sifu practicing kung fu in the woods",
    caption: "Weapons and Woods",
  },
  {
    url: "ShiDonnie.png",
    alt: "Sifu and Donnie Yen squaring off to the camera",
    caption: "Sifu and Donnie yen",
  },
  {
    url: "ShaolinCommunity.png",
    alt: "Shaolin Performance in the community",
    caption: "Shaolin in the community",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Hero Carousel */}
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <p className="text-lg">{image.caption}</p>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Announcements */}
      <section className="grid md:grid-cols-2 gap-6">
        {announcements.map((announcement, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
              <CardDescription>{announcement.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Featured Instructors */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Sifu Shi Yanruan</CardTitle>
            <CardDescription>Head Instructor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/ShiYanruan.png"
                alt="Sifu Shi Yanruan"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <p className="text-muted-foreground">
            Master Shi Yanruan, a 34th generation warrior monk of Shaolin Temple, trained under Hu Zhengsheng at a rigorous kung fu academy near Dengfeng as a child before being accepted into Shaolin Temple by Abbot Yongxin. Under the Abbot’s guidance, he honed his martial arts skills and later established the Shaolin Temple Kung Fu Cultural Center in Rockville, Maryland—the state’s only center led by a Shaolin Temple instructor. Renowned for his global performances alongside Abbot Yongxin, Shi Yanruan has taught students worldwide and now offers an extensive program at the center, including traditional Shaolin fist forms (e.g., Five Steps Fist, Drunken Fist), weapons training (e.g., Shaolin Spear, Drunken Sword), paired practices (e.g., Liuhe Staff), sparring (e.g., Kick Boxing, Grappling), and Soft Qigong (e.g., Yi Jin Jing, meditation).
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Shi Yongxin</CardTitle>
            <CardDescription>Senior Instructor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/ShiYongxin.png"
                alt="Sifu shiyongxin"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <p className="text-muted-foreground">
            Born Liu Yingcheng in 1965 in Yingshang, Anhui Province, Master Yong Xin was ordained in 1981 under Abbot Xingzheng and became the 30th generation Abbot of Songshan Shaolin Temple in August 1999. He holds prominent roles as vice president of the China Buddhism Association, president of the Henan Province Buddhism Association, and a representative of the 9th and 10th National People’s Congress of China. In 2002, he led the registration of Shaolin Kungfu with UNESCO to preserve its 1,500-year legacy, and in 2003, he opened the Shaolin Orphan Center for the “Thousand-orphan and Light-opening” project. Abbot Yong Xin has significantly advanced Shaolin Temple’s development and globally promoted its rich culture.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Send us a message and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
