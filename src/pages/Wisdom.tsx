
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BookOpen, GraduationCap, Brain, Library } from "lucide-react";

const Wisdom = () => {
  const wisdomSections = [
    {
      id: "philosophy",
      title: "Philosophy",
      icon: Brain,
      content: [
        {
          title: "Zen Philosophy",
          description: "The core principles of Zen in Shaolin practice",
          images: ["/fiveElements.png", "/ShiYongxin.png", "/fourPoints.png"],
          text: [
            "Zen Buddhism, also known as Chan in Chinese, lies at the heart of Shaolin philosophy. It emphasizes direct experience rather than theoretical knowledge, with meditation as the primary practice for understanding one's true nature.",
            "In Shaolin training, Zen philosophy manifests as the unity of mind and body, where physical actions become a form of moving meditation. The practitioner seeks to achieve a state of 'no-mind' (wuxin) where actions flow naturally without conscious effort.",
            "The famous saying 'The way of Zen is direct pointing to the human mind' embodies this approach, encouraging practitioners to look inward rather than seeking external validation or knowledge."
          ]
        },
        {
          title: "Buddhist Ethics",
          description: "The moral foundation of Shaolin practice",
          images: ["/ShiYongxin.png", "/practice.png", "/threeSections.png"],
          text: [
            "The Five Precepts form the ethical foundation of Buddhist practice: abstaining from killing, stealing, sexual misconduct, lying, and intoxication. These moral guidelines shape not only the monk's behavior but also inform the purpose and application of martial arts.",
            "Shaolin practitioners are taught to use their skills for protection and defense, never for aggression or personal gain. The concept of 'wu-de' (martial virtue) emphasizes respect, humility, patience, and self-control.",
            "As the Venerable Abbot Shi Yongxin teaches, 'True kung fu begins and ends with virtue. Without virtue, skill is merely technique without purpose.'"
          ]
        }
      ]
    },
    {
      id: "meditation",
      title: "Meditation",
      icon: BookOpen,
      content: [
        {
          title: "Seated Meditation",
          description: "Traditional techniques for cultivating awareness",
          images: ["/ShiDonnie.png", "/qiGong.png", "/threeSections.png"],
          text: [
            "Seated meditation (zazen) forms the foundation of Shaolin practice. Practitioners sit in lotus or half-lotus position, focusing on breath and maintaining awareness of the present moment.",
            "The practice begins with breath counting (shu-soku) to develop concentration, progressing to breath awareness (zu-shin) and eventually to shikantaza ('just sitting') where one remains alert and present without focusing on any particular object.",
            "Regular meditation practice develops concentration, emotional stability, and cultivates the 'warrior's mind' - calm and clear even in challenging situations."
          ]
        },
        {
          title: "Moving Meditation",
          description: "Integrating mindfulness into movement",
          images: ["/qiGong.png", "/fourPoints.png", "/practice.png"],
          text: [
            "Qigong and Tai Chi serve as bridges between seated meditation and dynamic kung fu practice. These 'moving meditations' cultivate awareness of subtle energy (qi) while strengthening the body.",
            "In advanced practice, all kung fu forms become meditative. The practitioner maintains complete awareness while executing techniques, entering a flow state where action becomes effortless and time seems to slow down.",
            "Master Shi Yanruan teaches that 'When mind and body are unified, even the most complex movements become simple. This is the true meaning of kung fu.'"
          ]
        }
      ]
    },
    {
      id: "wellness",
      title: "Wellness",
      icon: GraduationCap,
      content: [
        {
          title: "Traditional Chinese Medicine",
          description: "Ancient healing arts of the Shaolin Temple",
          images: ["/threeSections.png", "/ShiYanruan.png", "/practice.png"],
          text: [
            "Shaolin monks developed extensive knowledge of human anatomy and medicinal herbs, creating a comprehensive system of healing to address injuries from training and combat.",
            "The concept of meridians (energy channels) and acupoints informs both healing practices and martial applications. Knowledge of vital points can be used to restore health or, in combat situations, to neutralize an opponent.",
            "Traditional remedies include herbal formulas, qigong exercises for specific conditions, therapeutic massage (tui na), acupressure, and specialized breathing techniques to promote recovery and maintain health."
          ]
        },
        {
          title: "Dietary Practices",
          description: "Nutritional wisdom from Shaolin tradition",
          images: ["/practice.png", "/ShiDonnie.png", "/fiveElements.png"],
          text: [
            "Traditionally, Shaolin monks followed a vegetarian diet in accordance with Buddhist precepts, believing that this practice supports both physical health and spiritual development.",
            "Foods are classified according to their energetic properties (heating, cooling, neutral) and selected to balance the individual's constitution and address specific health conditions.",
            "Mindful eating is practiced, with attention paid to the origin, preparation, and consumption of food. Meals are taken as a form of meditation, with awareness of the nourishment being received."
          ]
        }
      ]
    },
    {
      id: "teachings",
      title: "Teachings",
      icon: Library,
      content: [
        {
          title: "Core Teachings",
          description: "Essential wisdom passed through generations",
          images: ["/fourPoints.png", "/ShiYanruan.png", "/threeSections.png"],
          text: [
            "The Four Noble Truths form the foundation of Buddhist teaching: the truth of suffering, the cause of suffering, the cessation of suffering, and the path leading to the cessation of suffering.",
            "In Shaolin practice, these truths are applied practically. Physical training may involve discomfort (truth of suffering), which stems from resistance and attachment (cause). By accepting and moving through discomfort with awareness, one transcends it (cessation) through dedicated practice (the path).",
            "As one progresses, the distinction between martial arts, meditation, and daily life dissolves. Every action becomes an opportunity for practice and awareness."
          ]
        },
        {
          title: "Modern Applications",
          description: "Ancient wisdom in contemporary life",
          images: ["/ShaolinCommunity.png", "/ShiDonnie.png", "/qiGong.png"],
          text: [
            "While rooted in tradition, Shaolin wisdom offers profound insights for navigating modern challenges. The mindfulness developed through meditation helps manage stress and digital overwhelm.",
            "The discipline of regular practice builds resilience and perseverance that transfer to professional and personal goals. The emphasis on community creates supportive relationships in an increasingly isolated world.",
            "As Master Shi Yanruan often reminds students, 'The true purpose of kung fu is not to conquer others, but to conquer oneself. This victory is relevant in any time, in any place.'"
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Shaolin Wisdom</h1>
      
      <Tabs defaultValue="philosophy" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          {wisdomSections.map((section) => (
            <TabsTrigger key={section.id} value={section.id}>
              <div className="flex items-center gap-2">
                <section.icon className="h-4 w-4" />
                <span>{section.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {wisdomSections.map((section) => (
          <TabsContent key={section.id} value={section.id}>
            <div className="space-y-8">
              {section.content.map((item, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 flex-shrink-0">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {item.images.map((image, imageIdx) => (
                              <CarouselItem key={imageIdx}>
                                <div className="p-1">
                                  <img
                                    src={image}
                                    alt={`${item.title} - Image ${imageIdx + 1}`}
                                    className="w-full rounded-md object-cover shadow-md h-64"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        {item.text.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Wisdom;
