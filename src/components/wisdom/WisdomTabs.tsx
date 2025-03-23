import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, Brain, Library, Dumbbell, ListOrdered, Scroll } from "lucide-react";
import BaDuanJinTab from "./BaDuanJinTab";
import ManuscriptsTab from "./ManuscriptsTab";
import XinYiBaTab from "./XinYiBaTab";
import ChuiBaShiFaTab from "./ChuiBaShiFaTab";
import { type LucideIcon } from "lucide-react";

// Define the wisdom section type
export type WisdomSectionContent = {
  title: string;
  description: string;
  summaryCard?: boolean;
  steps?: string[];
  image?: string;
  images?: string[];
  text: string[];
};

export type WisdomSection = {
  id: string;
  title: string;
  icon: LucideIcon;
  content: WisdomSectionContent[];
};

// Define the wisdom sections data
export const wisdomSections: WisdomSection[] = [
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
        ],
        text: [
          "Ba Duan Jin, or Eight Pieces of Brocade, is one of the most widely practiced qigong exercise sets. These eight exercises work on different aspects of the body to promote health and well-being."
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
    id: "manuscripts",
    title: "Manuscripts",
    icon: Scroll,
    content: [
      {
        title: "Ancient Shaolin Manuscripts",
        description: "A collection of rare Shaolin texts and scrolls",
        images: [
          "/ShiDonnie.png", 
          "/qiGong.png", 
          "/threeSections.png", 
          "/ShiYanruan.png", 
          "/practice.png", 
          "/fourPoints.png", 
          "/fiveElements.png", 
          "/ShiYongxin.png", 
          "/ShaolinCommunity.png", 
          "/shiWuShanlin.png", 
          "/shiWuGulun.png", 
          "/shihaifa.png", 
          "/shiZhanmo.png", 
          "/yangGuiwu.png"
        ],
        text: [
          "These ancient manuscripts preserved through generations provide a window into the accumulated wisdom of Shaolin Temple's thousand-year history.",
          "Each manuscript contains unique insights into the philosophy, technique, and spiritual aspects of Shaolin practice that forms the foundation of our tradition.",
          "The preservation of these texts connects modern practitioners to an unbroken lineage of knowledge dating back to the temple's earliest days."
        ]
      }
    ]
  },
  {
    id: "xinyiba",
    title: "Xin Yi Ba",
    icon: GraduationCap,
    content: [
      {
        title: "Xin Yi Ba Practice",
        description: "Traditional movements of Xin Yi Ba",
        images: [
          "/ShiDonnie.png", 
          "/qiGong.png", 
          "/threeSections.png", 
          "/ShiYanruan.png", 
          "/practice.png", 
          "/fourPoints.png", 
          "/fiveElements.png", 
          "/ShiYongxin.png", 
          "/ShaolinCommunity.png"
        ],
        text: [
          "Xin Yi Ba is a traditional internal martial art that focuses on heart (Xin) and mind (Yi) cultivation through eight (Ba) fundamental movements.",
          "These movements integrate breath control, mental focus, and precise physical techniques to develop both martial ability and health cultivation.",
          "Regular practice of Xin Yi Ba helps practitioners develop core strength, balance, coordination, and mental clarity while promoting longevity and vitality."
        ]
      }
    ]
  },
  {
    id: "chuibazhifa",
    title: "Shaolin Chui Ba Shi Fa",
    icon: ListOrdered,
    content: [
      {
        title: "Shaolin Chui Ba Shi Fa",
        description: "The Eight Methods of Combat",
        image: "/ShiYanruan.png",
        text: [
          "Shaolin Chui Ba Shi Fa (八式法) represents the eight fundamental combat methods developed over centuries within Shaolin martial traditions.",
          "These methods encompass the core principles of effective fighting techniques, including precise striking points, tactical positioning, and efficient power generation.",
          "Mastering these eight methods provides practitioners with a complete system of self-defense that can be adapted to any combat situation or opponent."
        ]
      }
    ]
  }
];

const WisdomTabs = () => {
  return (
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

      <TabsContent value="baduanjin">
        <BaDuanJinTab section={wisdomSections[0]} />
      </TabsContent>
      
      <TabsContent value="manuscripts">
        <ManuscriptsTab section={wisdomSections[1]} />
      </TabsContent>
      
      <TabsContent value="xinyiba">
        <XinYiBaTab section={wisdomSections[2]} />
      </TabsContent>
      
      <TabsContent value="chuibazhifa">
        <ChuiBaShiFaTab section={wisdomSections[3]} />
      </TabsContent>
    </Tabs>
  );
};

export default WisdomTabs;
