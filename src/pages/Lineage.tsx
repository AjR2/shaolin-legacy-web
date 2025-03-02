
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

const Lineage = () => {
  const lineageData = [
    { 
      name: "Ji Long", 
      years: "1620 - ?", 
      description: "Ji Long was from Longfeng county in Shanxi Province during the late Ming Dynasty and was recognized as the founder of XinYiBa as well as Liu He Fist (XinYi Fist , XingYi Fist etc.)." 
    },
    { 
      name: "Zheng Wukui", 
      years: "1660—？", 
      description: "Zheng Wukui, one of Ji Long's disciples from Dengfeng County in Henan Province, taught Martial Arts during the Qianlong Dynasty. " 
    },
    { 
      name: "Wang Zhicheng", 
      years: "1680—？", 
      description: "Wang Zhicheng, one of Zheng Wukui’s disciples from Xin’an County in Henan Province, was a famous Martial Arts master during the Qianlong Dynasty. According to the manuscripts, he summarized the theory of XinYiBa and Liu He Fist, helping to preserve Chinese Wushu history. Wang Zhicheng consummated the theory of XinYiBa and Liu He Fist, writing down the details as Martial Art manuscripts which were later spread to his successors. Some of these special skills were kept in the Shaolin Temple as secret skills, while others were widespread and later changed into several styles, for example Luoyang Hui, Ma Xue Li Style and Shanxi Province Dai Long Bang Style. However, these styles still retain the original Shaolin style and features." 
    },
    { 
      name: "Wang Yi & Wang Kai", 
      years: "1710—？", 
      description: "The martial arts skills of Wang Yi and Wang Kai, both sons of Wang Zhicheng, were handed down from their father." 
    },
    { 
      name: "Shi Haifa", 
      years: "1750—？", 
      description: "Hai Fa, also called Xiang Bo, was taught by the Shaolin Temple Grand Monk Ru Xiang. He was hardworking and mastered Qianjin Feet, Iron Fists, Xuanhua Axe, etc. all by himself. He was cranky, frank, and kind-hearted. He was given the nickname Black Whirlwind. Master Zhan Mo and Zhan De were his most noteworthy students." 
    },
    { 
      name: "Shi Zhanmo", 
      years: "1780—？", 
      description: "Practicing Martial Arts was strictly prohibited in 1828; however Zhan Mo, Hai Fa and some of other disciples hid in the Shigou Temple at the foot of the Shaolin Temple where they continued to practice martial arts secretly. Zhan Mo was an extremely dedicated practitioner. At night time, he and his disciple, Ji Qin (also called Wu Gulun), practiced XinYiBa. During the day, he used his vast knowledge of medicine to treat patients, saving many lives. Even now, old villages know about Zhan Mo and Ji Qin of the Shi Gou Temple." 
    },
    { 
      name: "Wu Gulun", 
      years: "1831—1914", 
      description: "Wu Gulun, otherwise known as Ji Qjn, became a monk at the age of five under Grand Abbot Zhan Mo. During the Qing dynasty martial arts were banned, so the Shaolin monks practiced secretly. However, in the year of DaoGuang, a Manchurian officer named Li Qing arrived at the Shaolin Temple and requested that the abbot make the monks perform for him. However, the abbot denied that the monks still practiced Kungfu. Li Qing persisted, and the abbot allowed the monks to demonstrate their skills. After the general left, the monks realized that the Manchurian officers would return due to fear that the monks could pose a threat. The monks became very worried, so the abbot instructed Wu Gulun to leave the temple and carry on the traditions of Shaolin. Before leaving the temple Wu Gulun followed Shaolin tradition and fought the 18 guardians of Shaolin in order to prove his strength and ability to cope with secular life outside the temple. He was the last monk to ever follow this tradition. After defeating the 18 guardians of Shaolin, Wu Gulun disappeared into the mountains to live in an isolated village where he continued to practice as well as preserve the secrets of Shaolin Kungfu, including XinYiBa. During his time in the temple Wu Gulun trained in the highest level of Shaolin traditional Kungfu, XinYiBa, and mastered it. He passed on all of his Kungfu knowledge, including his knowledge of XinYiBa, to his son, Wu Shanlin." 
    },
    { 
      name: "Wu Shanlin", 
      years: "1875—1970", 
      description: "Wu Shanlin was the second son of Wu Gulun. He began training Kungfu at the age of 7 while still attending school and helping his father with farming. Wu Shanlin grew up in a small village in the mountains called (hueiwh), a poor area where the majority of people were farmers. Wu Shanlin also studied traditional Chinese medicine and became a very highly skilled doctor. In his village he maintained very good relationships with his neighbors as well as the rest of the villagers. He treated all patients, even if they had no money. No matter what the weather conditions were, Wu Shanlin always visited his patients, putting the needs of others before his own. Wu Shanlin’s Father, Wu Gulun, taught him everything about Shaolin traditional Kungfu and it was his desire for Wu Shanlin to return to the Shaolin temple and teach the monks there the Kungfu that Wu Gulun had taken and preserved secretly. So when the time was right, Wu Shanlin followed his father’s wishes and returned to the temple with the intention of helping to restore Shaolin’s old traditions. However, after seeing that the monks were of poor character, Wu Shanlin decided that they were not suitable to be taught the old Shaolin traditions. He stayed at the temple for 3 years, teaching some basic movements to the monks. After leaving the temple he searched for worthy disciples to inherit the Shaolin traditions. He eventually found a handful of students to whom he taught Shaolin traditions, and of course Shaolin’s highest skill, XinYiBa. Among those disciples were Shi Degen and Yang Guiwu." 
    },
    { 
      name: "Shi Degen", 
      years: "1914—1970", 
      description: "Shi Degen was from Guan Di Miao village in Gong Xian in Henan province. He was sent to the Shaolin temple at the age of three because of his tendency towards illness. Due to the Shaolin monks’ care he became stronger and healthier, beginning Kungfu at the age of 6. The abbot of the temple took a liking to him due to his intelligence and hardworking nature." 
    },
    { 
      name: "Yang Guiwu", 
      years: "1931—2010", 
      description: "Grandmaster Yang Guiwu was from Yanshi Canjiadian in Henan province. He was a disciple of Abbot Shi De Chan who taught him Shaolin medicine in Shaolin temple. He studied Traditional Kungfu from his master Shi De Gen and also from Wu Shanlin who both taught him the most secret of all Shaolin arts XinYiBa (Heart-Mind-Control). 70 years of studying Shaolin Kungfu is what gave Grandmaster Yang Guiwu a truly deep understanding of Shaolin martial arts Shaolin medicine and Chan Buddhism. He became one of the greatest practitioners of all time when he was honored with the position of chief instructor for traditional Kungfu of the Shaolin warrior monks at the Shaolin temple. He has some of the most skillful students of the Shaolin temple under his name. His Kungfu can be seen in an old Shaolin documentary filming him in the 1000 Buddha hall where he is teaching XinYiBa the most advanced level of Shaolin traditional Kungfu. It was filmed over 30 years ago in hope to spread real Shaolin Kungfu. Not only was he a grandmaster in Shaolin martial arts he was a grandmaster in Chan Buddhism and Shaolin medicine. His teachings have the fundamentals of Shaolin manuscripts 500 years old, which were passed to him to preserve and teach the original way of Shaolin Kungfu. The manuscripts give full detailed explanations of Shaolin martial arts and theory. When he decided that the time had come to pass on the manuscripts to carry on the Shaolin way, he passed the scripts on to Hu Zhengsheng along with the responsibility to spread real traditional Shaolin Kungfu and the knowledge to future generations of Shaolin disciples." 
    },
    { 
      name: "Hu Zhengsheng", 
      years: " ", 
      description: "Master Hu Zhengsheng started his traditional Kungfu training at the age of 12. He first began studying under Zhang Guangjun at the Shaolin temple. He learned many forms and fighting skills including Xin Yi Liu He Quan, Guai Zi, (Walking Stick) Chun Qiu Da Dao (Spring & Autumn Da Dao), Cao Lian, Sheng Biao, Yue Ya Chan, Hu Tou Gou and many more. Master Hu Zhengsheng took care of Master Zhang Guangjun in his old age, helping him eat, clean, and dress himself. After training Hu Zhengsheng for 7 years at the Shaolin Temple, Grandmaster Zhang Guang Jun became quite old and as his life came to an end he told Hu Zheng Sheng to go and seek a grandmaster of traditional Shaolin Kungfu in San Bei village, Yang Guiwu. After Hu Zhengsheng was accepted as a disciple of Yang Guiwu he continued his traditional Shaolin Kungfu training for 15 more years, learning Shaolin Qin Na, Shaolin combat and self-defense techniques, and most importantly Shaolin Xin Yi Ba (Heart-Mind-Control)." 
    },
    { 
      name: "Shi Yanruan", 
      years: " ", 
      description: "Master Yanruan was admitted as a young child to Hu Zhengsheng’s Kungfu academy. After receiving the training and guidance of Hu Zhengsheng, Yanruan was selected to enter the Shaolin Temple by Abbot Shi Yongxin. During his time at the Shaolin Temple, Shi Yanruan taught students from all over the world. He also accompanied Abbot Shi YongXin on performances all around the world, winning him an excellent reputation in the world of Shaolin Kungfu." 
    }
  ];

  const historyData = [
    {
      period: "495-616 CE: Early Development",
      description: [
        "Shaolin Kungfu refers to the traditional cultural system that has formed in the particular Buddhist cultural environment in Shaolin Temple of Songshan Mountain over long history. It is based on a belief in the supernatural power of Buddhism and fully reflects the wisdom of Chan Buddhism.",
        "The martial arts practiced by monks in the Shaolin Temple are its major form of expression. During these early years, the foundation of what would become Shaolin Kung Fu was established as monks developed exercises to maintain their health during long periods of meditation."
      ]
    },
    {
      period: "Tang Dynasty (618-907)",
      description: [
        "Shaolin monks helped the Tang emperor Li Shimin defeat Wang Shichong, leading to imperial patronage. This period marked the beginning of Shaolin's military reputation.",
        "The temple received land and permission to train warrior monks. As a result of their service to the emperor, the Shaolin Temple was granted 600 acres of land and official recognition as a military force.",
        "This period is considered pivotal in Shaolin history, as it transformed the temple from a purely religious institution to one that combined spiritual practice with martial prowess."
      ]
    },
    {
      period: "Song Dynasty (960-1279)",
      description: [
        "Shaolin developed its unique combination of Chan Buddhism and martial arts. The temple became famous for its staff fighting techniques, and many generals studied at Shaolin.",
        "During this period, the monks refined and systematized their combat skills, integrating them with Buddhist philosophy. The Shaolin staff techniques became particularly renowned throughout China.",
        "Historical records indicate that the military aspects of Shaolin training became more structured and formalized during the Song Dynasty, with specific training methods being documented for the first time."
      ]
    },
    {
      period: "Ming Dynasty (1368-1644)",
      description: [
        "This was the golden age of Shaolin Kung Fu. The temple's fighting techniques were systematized, and many of the forms still practiced today were developed during this period.",
        "The Ming Dynasty saw the greatest development and expansion of Shaolin martial arts. The number of monks training in combat skills reached its peak, and comprehensive training manuals were created.",
        "During this time, Shaolin combat methods were organized into distinct styles and systems, establishing a standardized curriculum that would influence Chinese martial arts for centuries to come."
      ]
    },
    {
      period: "Qing Dynasty (1644-1911)",
      description: [
        "The temple faced persecution as the Qing government suspected it of Ming loyalist activities. Many techniques were preserved in secret during this time.",
        "The Manchu rulers were wary of Han Chinese cultural institutions, particularly those with military capabilities like the Shaolin Temple. There were periods of outright suppression and temple destruction.",
        "Despite these challenges, Shaolin masters continued to train in secret, often disguising their martial arts as dance or theater performances to avoid persecution. This period of adversity led to the spread of Shaolin techniques beyond the temple walls as masters sought refuge in other parts of China."
      ]
    },
    {
      period: "Modern Era (1912-Present)",
      description: [
        "After facing destruction during the Cultural Revolution, the temple was rebuilt and reopened in 1978. Today, it combines traditional practices with modern training methods, preserving ancient knowledge while adapting to contemporary needs.",
        "The second half of the 20th century saw a revival of interest in Shaolin Kung Fu, both within China and internationally. The Chinese government eventually recognized the cultural significance of Shaolin and supported its restoration.",
        "In recent decades, Shaolin has become a global cultural phenomenon, with demonstration teams touring the world and a surge of interest in Shaolin training from practitioners worldwide. The temple now balances its role as a Buddhist monastery, martial arts center, and tourist destination."
      ]
    }
  ];

  const theoryContent = [
    {
      title: "Chan Buddhism",
      content: "Chan Buddhism is a school of Mahayana Buddhism that originated in China during the Tang dynasty. The Chan School was strongly influenced by Taoist philosophy, particularly Neo-Taoist thought, and developed as a distinct school of Chinese Buddhism."
    },
    {
      title: "Qi Cultivation",
      content: "Qi cultivation is the practice of developing and nurturing one's vital energy through various methods including meditation, breathing exercises, and specific movement patterns. In Shaolin practice, qi cultivation is fundamental to developing both internal and external strength."
    },
    {
      title: "Five Elements Theory",
      content: "The Five Elements Theory (Wu Xing) is a fundamental concept in Chinese philosophy and medicine that explains the relationship between different phenomena in nature. In Shaolin Kung Fu, it influences both combat strategy and health practices."
    },
    {
      title: "Three Treasures",
      content: "The Three Treasures (San Bao) - Jing (essence), Qi (energy), and Shen (spirit) - are considered the fundamental energies of life in Chinese medicine and Shaolin practice. Cultivating and balancing these three aspects is essential for health and martial development."
    },
    {
      title: "Yin and Yang",
      content: "The concept of Yin and Yang represents the duality and interconnectedness of opposing forces. In Shaolin practice, this principle guides both movement and strategy, teaching practitioners to blend hard and soft techniques effectively."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Shaolin Legacy</h1>
      
      <Tabs defaultValue="lineage" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lineage">Lineage</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="theory">Theory</TabsTrigger>
        </TabsList>

        <TabsContent value="lineage">
          <Card>
            <CardHeader>
              <CardTitle>Our Shaolin Lineage</CardTitle>
              <CardDescription>A tradition passed down through generations</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {lineageData.map((master, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {master.name} ({master.years})
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {master.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Shaolin Temple History</CardTitle>
              <CardDescription>The evolution of Shaolin through the ages</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {historyData.map((period, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {period.period}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground space-y-4">
                      {period.description.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
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

export default Lineage;
