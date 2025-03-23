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
import { BookOpen, GraduationCap, Brain, Library, Dumbbell, ListOrdered } from "lucide-react";

const Wisdom = () => {
  const wisdomSections = [
    {
      id: "baduanjin",
      title: "Ba Duan Jin",
      icon: Dumbbell,
      content: [
        {
          title: "The Eight Sections of Brocade",
          description: "A comprehensive overview of all eight movements",
          summaryCard: true,
          steps: [
            "Two Hands Hold up the Heavens",
            "Drawing the Bow to Shoot the Eagle",
            "Separate Heaven and Earth",
            "Wise Owl Gazes Backward",
            "Sway the Head and Swing the Tail",
            "Two Hands Hold the Feet to Strengthen the Kidneys and Waist",
            "Clench the Fists and Glare Fiercely",
            "Bouncing on the Toes"
          ]
        },
        {
          title: "Two Hands Hold up the Heavens",
          description: "Harmonizes the triple burner and regulates the spleen and stomach",
          image: "/practice.png",
          text: [
            "Stand with feet shoulder-width apart, arms relaxed at your sides, and knees slightly bent in a natural, comfortable posture.",
            "Inhale as you slowly raise your arms forward and upward, palms facing up, until hands meet above your head. Keep shoulders relaxed throughout the movement.",
            "As your hands meet, turn palms to face upward as if supporting the sky, gently stretching the whole body. Look straight ahead, not up at your hands.",
            "Exhale as you slowly lower your arms to the sides in a wide arc, returning to the starting position. Repeat 8 times."
          ]
        },
        {
          title: "Drawing the Bow to Shoot the Eagle",
          description: "Enhances the function of the lungs and expands the chest",
          image: "/ShiDonnie.png",
          text: [
            "Stand with feet wider than shoulder-width apart in a horse stance, knees bent and pointing outward.",
            "Cross arms in front of chest, then extend left arm to the left side as if drawing a bow, with left index finger pointing outward and thumb up.",
            "Right hand pulls back beside the right ear as if holding the bowstring, with right index and middle fingers extended. Turn head to look at the left extended hand.",
            "Return to center and repeat on the opposite side. Alternate sides for a total of 8 repetitions on each side."
          ]
        },
        {
          title: "Separate Heaven and Earth",
          description: "Regulates the spleen and stomach functions",
          image: "/qiGong.png",
          text: [
            "Begin in a shoulder-width stance with arms relaxed at your sides.",
            "Raise both palms to chest height, one hand facing up (heaven) and one facing down (earth).",
            "Slowly extend the arms, pushing one palm upward and one downward while inhaling, creating a gentle stretch through the torso.",
            "Return hands to chest height, switch palm directions, and repeat the movement. Perform 8 repetitions on each side."
          ]
        },
        {
          title: "Wise Owl Gazes Backward",
          description: "Strengthens the neck and eyes, releases tension in neck and shoulders",
          image: "/ShiYanruan.png",
          text: [
            "Stand with feet shoulder-width apart, arms hanging naturally at sides.",
            "Without moving the body, slowly turn the head to look over one shoulder, as far as is comfortable without straining.",
            "Return to center, then turn to look over the opposite shoulder. Keep shoulders relaxed and breathing even throughout.",
            "For an advanced version, synchronize the turning with your breath. Perform 8 repetitions on each side."
          ]
        },
        {
          title: "Sway the Head and Swing the Tail",
          description: "Relieves stress and strain in the waist area",
          image: "/fourPoints.png",
          text: [
            "Stand with feet wider than shoulder-width apart, hands on hips or thighs, knees slightly bent.",
            "Rotate the upper body to one side, then bend forward from the waist, allowing the opposite arm to swing toward the foot.",
            "Rise back up and rotate to the other side, repeating the movement. Keep the movement smooth and controlled.",
            "Throughout the exercise, imagine your body as a large bow being drawn. Perform 8 repetitions on each side."
          ]
        },
        {
          title: "Two Hands Hold the Feet to Strengthen the Kidneys and Waist",
          description: "Benefits the kidneys and strengthens the lower back",
          image: "/threeSections.png",
          text: [
            "Stand with feet shoulder-width apart, arms at sides, knees slightly bent.",
            "Inhale, then exhale as you bend forward from the waist, keeping back straight initially, then allowing it to round.",
            "Reach down to touch ankles or feet, depending on flexibility. Keep knees slightly bent to avoid strain.",
            "Inhale as you slowly roll back up to standing position, one vertebra at a time. Repeat 8 times, breathing naturally."
          ]
        },
        {
          title: "Clench the Fists and Glare Fiercely",
          description: "Increases general vitality and strengthens muscles",
          image: "/fiveElements.png",
          text: [
            "Begin in a horse stance with feet wider than shoulders and toes pointing slightly outward.",
            "Make loose fists at your sides, then slowly raise them to waist height while inhaling.",
            "Extend one arm forward with force while pulling the other back to the waist, turning the head to follow the forward punch. Make a fierce facial expression.",
            "Alternate sides with controlled, powerful movements. Complete 8 repetitions on each side."
          ]
        },
        {
          title: "Bouncing on the Toes",
          description: "Harmonizes all organ functions and expels illness",
          image: "/ShiYongxin.png",
          text: [
            "Stand naturally with feet shoulder-width apart, arms relaxed at sides.",
            "Rise up onto the balls of both feet, lifting heels off the ground, then lower heels back down gently.",
            "The movement should be gentle and springy, not forceful. Keep the body relaxed and maintain balance.",
            "Breathe naturally, coordinating breath with the up and down movements. Repeat 8 times or more."
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
      
      <Tabs defaultValue="baduanjin" className="space-y-6">
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
                    {item.summaryCard ? (
                      <div className="space-y-4">
                        <p className="text-muted-foreground">The Ba Duan Jin (Eight Pieces of Brocade) is a set of eight exercises that dates back to the 12th century. These gentle movements improve health, strengthen the body, and promote longevity.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.steps.map((step, stepIdx) => (
                            <div key={stepIdx} className="flex items-center gap-2">
                              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-primary font-medium">{stepIdx + 1}</span>
                              </div>
                              <span className="text-muted-foreground">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex-shrink-0">
                          {section.id === "baduanjin" ? (
                            <img
                              src={item.image}
                              alt={`${item.title}`}
                              className="w-full rounded-md object-cover shadow-md h-64"
                            />
                          ) : (
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
                          )}
                        </div>
                        <div className="md:w-2/3 space-y-4">
                          {(section.id === "baduanjin" ? item.text : item.text).map((paragraph, pIdx) => (
                            <p key={pIdx} className="text-muted-foreground">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
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
