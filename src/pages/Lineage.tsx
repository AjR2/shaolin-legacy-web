
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
    { name: "Ji Long", years: "1620 - ?", description: "Ji Long was from Longfeng county in Shanxi Province during the late Ming Dynasty and was recognized as the founder of XinYiBa as well as Liu He Fist (XinYi Fist , XingYi Fist etc.)." },
    { name: "Zheng Wukui", years: "1660—？", description: "Zheng Wukui, one of Ji Long's disciples from Dengfeng County in Henan Province, taught Martial Arts during the Qianlong Dynasty." },
    { name: "Wang Zhicheng", years: "1680—？", description: "Wang Zhicheng, one of Zheng Wukui's disciples from Xin'an County in Henan Province, was a famous Martial Arts master during the Qianlong Dynasty. According to the manuscripts, he summarized the theory of XinYiBa and Liu He Fist, helping to preserve Chinese Wushu history." },
    { name: "Wang Yi & Wang Kai", years: "1710—？", description: "The martial arts skills of Wang Yi and Wang Kai, both sons of Wang Zhicheng, were handed down from their father." },
    { name: "Shi Haifa", years: "1750—？", description: "Hai Fa, also called Xiang Bo, was taught by the Shaolin Temple Grand Monk Ru Xiang. He was hardworking and mastered Qianjin Feet, Iron Fists, Xuanhua Axe, etc. all by himself." },
    { name: "Shi Zhanmo", years: "1780—？", description: "Practicing Martial Arts was strictly prohibited in 1828; however Zhan Mo, Hai Fa and some of other disciples hid in the Shigou Temple at the foot of the Shaolin Temple where they continued to practice martial arts secretly." },
    { name: "Wu Gulun", years: "1831—1914", description: "Wu Gulun became a monk at the age of five under Grand Abbot Zhan Mo. During the Qing dynasty martial arts were banned, so the Shaolin monks practiced secretly." },
    { name: "Wu Shanlin", years: "1875—1970", description: "Wu Shanlin was the second son of Wu Gulun. He began training Kungfu at the age of 7 while still attending school and helping his father with farming." },
    { name: "Shi Degen", years: "1914—1970", description: "Shi Degen was from Guan Di Miao village in Gong Xian in Henan province. He was sent to the Shaolin temple at the age of three because of his tendency towards illness." },
    { name: "Yang Guiwu", years: "1931—2010", description: "Grandmaster Yang Guiwu was from Yanshi Canjiadian in Henan province. He was a disciple of Abbot Shi De Chan who taught him Shaolin medicine in Shaolin temple." },
    { name: "Hu Zhengsheng", years: "12—1970", description: "Master Hu Zhengsheng started his traditional Kungfu training at the age of 12. He first began studying under Zhang Guangjun at the Shaolin temple." },
    { name: "Shi Yanruan", years: "1970—", description: "Master Yanruan was admitted as a young child to Hu Zhengsheng's Kungfu academy. After receiving the training and guidance of Hu Zhengsheng, Yanruan was selected to enter the Shaolin Temple by Abbot Shi Yongxin." }
  ];

  const historyData = [
    {
      period: "495-616 CE: Early Development",
      description: "The Shaolin Temple was first built in 495 CE during the Northern Wei Dynasty. The Indian monk Batuo (跋陀) was the first abbot of Shaolin. Later, another Indian monk, Bodhidharma (达摩), came to Shaolin and introduced Chan Buddhism, which became the foundation of Shaolin culture."
    },
    {

      period: "Tang Dynasty (618-907)",
      description: "Shaolin monks helped the Tang emperor Li Shimin defeat Wang Shichong, leading to imperial patronage. This period marked the beginning of Shaolin's military reputation. The temple received land and permission to train warrior monks."

    },

    {
      period: "Song Dynasty (960-1279)",
      description: "Shaolin developed its unique combination of Chan Buddhism and martial arts. The temple became famous for its staff fighting techniques, and many generals studied at Shaolin."
    },
    {
      period: "Ming Dynasty (1368-1644)",
      description: "This was the golden age of Shaolin Kung Fu. The temple's fighting techniques were systematized, and many of the forms still practiced today were developed during this period."
    },
    {
      period: "Qing Dynasty (1644-1911)",
      description: "The temple faced persecution as the Qing government suspected it of Ming loyalist activities. Many techniques were preserved in secret during this time."
    },
    {
      period: "Modern Era (1912-Present)",
      description: "After facing destruction during the Cultural Revolution, the temple was rebuilt and reopened in 1978. Today, it combines traditional practices with modern training methods, preserving ancient knowledge while adapting to contemporary needs."
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
                    <AccordionContent className="text-muted-foreground">
                      {period.description}
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
