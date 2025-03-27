
import { Dumbbell, Scroll, GraduationCap, ListOrdered, type LucideIcon } from "lucide-react";

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
        image: "/lovable-uploads/cc9a0876-b016-4efc-b48e-a5a5c18b331c.png",
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
        image: "/lovable-uploads/09a22b93-309b-4263-9c0e-dc01257f6d66.png",
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
        image: "/lovable-uploads/70ce6112-c501-4aba-b06a-2449a74464ab.png",
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
        image: "/lovable-uploads/4558fc38-62fb-4a9b-a9fa-f48f2c7314e0.png",
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
        image: "/lovable-uploads/5b791241-cc99-4be0-9c3d-4559c485d036.png",
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
        image: "/lovable-uploads/5b791241-cc99-4be0-9c3d-4559c485d036.png",
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
        image: "/lovable-uploads/82b1992b-f46a-4afb-9f6d-19680ac25eed.png",
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
        image: "/lovable-uploads/1348773a-2f2e-42c1-8ff9-e378b3278e3a.png",
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
          "/lovable-uploads/241cbc1f-6d1b-4f1c-b41a-4ff6c23fc0a2.png",
          "/lovable-uploads/aebbd8e1-6159-4b1b-9d90-cc05341fe3ae.png",
          "/lovable-uploads/fbe649b7-12de-41c8-9321-1b555d186ac9.png",
          "/lovable-uploads/bd2de542-39cc-459b-8e54-305c4d81622f.png",
          "/lovable-uploads/0824a04f-513e-47d1-8346-12b4470a3e25.png",
          "/lovable-uploads/616c8920-a83d-4286-b83c-eec8ccc8b0cc.png",
          "/lovable-uploads/e296bd84-eff6-49f9-8a0a-4f146c729550.png",
          "/lovable-uploads/aa5942f2-f15c-445b-952d-28047da78407.png",
          "/lovable-uploads/cf4d83f6-80ed-4c28-8bed-05fdf984dbeb.png",
          "/lovable-uploads/5351d190-f526-4adf-bc0b-dde5f1b1e208.png",
          "/lovable-uploads/a82e0ba2-0fee-4bd4-b3ce-534b330dfa3c.png",
          "/lovable-uploads/ed192f97-daae-42a1-b8f3-2b29f10ca995.png",
          "/lovable-uploads/b6198384-67e4-4660-875e-6005128e67ca.png",
          "/lovable-uploads/7b040dbb-5070-4a8d-b43a-d826b1361e67.png",
          "/lovable-uploads/d016d8ff-38a8-4498-999a-72f5fcdcb982.png",
          "/lovable-uploads/b6a55430-a5f9-4c7e-917f-bc7d60d03da3.png",
          "/lovable-uploads/58164000-cb2a-46c6-b052-ee29c709014c.png",
          "/lovable-uploads/8afc7d0c-fe60-40de-b6a1-8a927ffbdc74.png",
          "/lovable-uploads/2216950d-da8c-4cce-b6ec-ae19e9c2fae7.png",
          "/lovable-uploads/356d6015-b6ad-4441-b11d-de443198d4f8.png",
          "/lovable-uploads/24501f4b-19ce-4ca3-b089-39e280e6f226.png",
          "/lovable-uploads/65cdb515-7945-40e7-af1e-01ed628baeb3.png",
          "/lovable-uploads/b727064d-b6cd-4ec0-8263-e7abe1981e92.png",
          "/lovable-uploads/f8fc9ce1-6dbc-4bc6-8b3c-460850640007.png",
          "/lovable-uploads/3a1d0127-e17b-4721-8ac5-2c540ff27033.png",
          "/lovable-uploads/24297050-a5eb-4827-b9c0-69a6d4d1d983.png",
          "/lovable-uploads/b1fc912b-ed40-4a76-93dc-ecca292f108d.png",
          "/lovable-uploads/eb71e1f1-3b50-43ae-8e69-9b01aa5e69cb.png"
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
          "/lovable-uploads/162145fd-dc67-4550-9121-ba19d3390180.png",
          "/lovable-uploads/613cb4a7-3d13-4915-a6b4-6fedaf9e5ef3.png",
          "/lovable-uploads/b2fdde3a-9d57-412c-a5c0-a49ce1c60d0e.png",
          "/lovable-uploads/a5e51744-9131-4f4a-b55a-8aaad6301424.png",
          "/lovable-uploads/8bdc160d-af50-4c78-a551-7c155b8c0471.png",
          "/lovable-uploads/9bba06fe-39c9-4b0b-aec4-b8f1bb702538.png",
          "/lovable-uploads/e3f3d799-5fa0-472b-be64-859f55ad0afd.png",
          "/lovable-uploads/01bafb8f-18e1-4cea-93c4-89704e63bd92.png",
          "/lovable-uploads/4e738003-15ef-4b20-9fba-5460d02eaf32.png"
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
