
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
      description: "Ji Long was from Longfeng county in Shanxi Province during the late Ming Dynasty and was recognized as the founder of XinYiBa as well as Liu He Fist (XinYi Fist, XingYi Fist etc.). He was noted for his exceptional skill in martial arts and deep understanding of internal energy cultivation. His teachings emphasized the harmony between mind and body, and his innovative approach to martial arts training influenced generations to come. Ji Long developed unique training methods that integrated combat techniques with philosophical principles, creating a comprehensive system that addressed both physical prowess and spiritual development." 
    },
    { 
      name: "Zheng Wukui", 
      years: "1660—？", 
      description: "Zheng Wukui, one of Ji Long's disciples from Dengfeng County in Henan Province, taught Martial Arts during the Qianlong Dynasty. As a devoted student of Ji Long, he preserved and expanded upon his master's teachings, emphasizing practical applications in real combat situations. Zheng was known for his precise technical execution and exceptional teaching abilities. He trained numerous students who later became prominent martial artists in their own right. His contributions to the systematization of the art helped ensure its survival during a transitional period in Chinese history. Zheng's teaching methods were characterized by strict discipline combined with compassionate guidance." 
    },
    { 
      name: "Wang Zhicheng", 
      years: "1680—？", 
      description: "Wang Zhicheng, one of Zheng Wukui's disciples from Xin'an County in Henan Province, was a famous Martial Arts master during the Qianlong Dynasty. According to the manuscripts, he summarized the theory of XinYiBa and Liu He Fist, helping to preserve Chinese Wushu history. Wang was renowned for his scholarly approach to martial arts, documenting techniques and philosophical principles that might otherwise have been lost. His written works became foundational texts for future generations. Beyond his scholarly contributions, Wang was a formidable martial artist who demonstrated exceptional skill in both empty-hand techniques and weapons training. His synthesis of practical experience and theoretical knowledge created a comprehensive understanding of the art." 
    },
    { 
      name: "Wang Yi & Wang Kai", 
      years: "1710—？", 
      description: "The martial arts skills of Wang Yi and Wang Kai, both sons of Wang Zhicheng, were handed down from their father. The brothers trained together from childhood and developed complementary skills that enhanced the family style. Wang Yi was known for his powerful striking techniques and direct approach to combat, while Wang Kai was celebrated for his fluid movements and strategic applications. Together, they represented the dual aspects of their father's teachings - power and subtlety. The brothers established training halls in different regions, spreading their family's martial arts tradition throughout central China. Their collaborative approach to teaching ensured the comprehensive transmission of the complete system." 
    },
    { 
      name: "Shi Haifa", 
      years: "1750—？", 
      description: "Hai Fa, also called Xiang Bo, was taught by the Shaolin Temple Grand Monk Ru Xiang. He was hardworking and mastered Qianjin Feet, Iron Fists, Xuanhua Axe, etc. all by himself. His dedication to training was legendary, often practicing through the night and in adverse weather conditions. Hai Fa integrated techniques from multiple martial systems, synthesizing them into a cohesive approach that emphasized adaptability in combat. As a teacher, he was known for his demanding standards and personalized instruction methods. His innovations in weapons training, particularly with the axe, became signature elements of his martial expression. Despite his formidable reputation as a fighter, he was also deeply committed to Buddhist principles and meditation practices." 
    },
    { 
      name: "Shi Zhanmo", 
      years: "1780—？", 
      description: "Practicing Martial Arts was strictly prohibited in 1828; however Zhan Mo, Hai Fa and some of other disciples hid in the Shigou Temple at the foot of the Shaolin Temple where they continued to practice martial arts secretly. During this period of prohibition, Zhan Mo developed innovative training methods that could be disguised as common physical labor or daily activities. His courage and determination ensured the survival of authentic Shaolin techniques during a period of severe oppression. Zhan Mo was particularly skilled in Qinna (joint locking) techniques and close-range combat applications. His teaching focused on practical self-defense and the preservation of traditional knowledge during challenging times. He developed a network of trusted students who helped maintain the lineage in various locations." 
    },
    { 
      name: "Wu Gulun", 
      years: "1831—1914", 
      description: "Wu Gulun became a monk at the age of five under Grand Abbot Zhan Mo. During the Qing dynasty martial arts were banned, so the Shaolin monks practiced secretly. He showed exceptional aptitude from an early age, quickly mastering the fundamental techniques and progressively learning the more advanced aspects of the system. Wu Gulun was known for his exceptional balance and coordination, allowing him to execute complex techniques with deceptive ease. He developed a deep understanding of Buddhist philosophy and integrated these principles into his martial practice. His teaching emphasized the development of internal power through specific breathing techniques and mental focus. Wu Gulun's contributions to preserving the authentic Shaolin methods during a period of political turmoil were invaluable to the tradition." 
    },
    { 
      name: "Wu Shanlin", 
      years: "1875—1970", 
      description: "Wu Shanlin was the second son of Wu Gulun. He began training Kungfu at the age of 7 while still attending school and helping his father with farming. He showed remarkable dedication, often practicing before dawn and after completing his daily chores. Wu Shanlin was particularly noted for his expertise in staff techniques and his profound understanding of combat strategy. He organized the training curriculum into a systematic program that remained faithful to tradition while addressing the needs of modern students. His longevity allowed him to influence several generations of practitioners, creating a strong continuation of the lineage. Wu Shanlin was also known for his medical knowledge and healing skills, often treating injuries and illness within his community." 
    },
    { 
      name: "Shi Degen", 
      years: "1914—1970", 
      description: "Shi Degen was from Guan Di Miao village in Gong Xian in Henan province. He was sent to the Shaolin temple at the age of three because of his tendency towards illness. Through martial arts training, he overcame his physical weaknesses and developed exceptional strength and resilience. Shi Degen became renowned for his iron palm techniques and dynamic power generation methods. His teaching emphasized building a strong physical foundation before progressing to more advanced techniques. He was particularly skilled at adapting traditional training methods for students with different physical capabilities. Shi Degen was also a respected figure in traditional Chinese medicine, using his knowledge to support the health and recovery of his students. His commitment to preserving authentic Shaolin methods while making them accessible to sincere students ensured the lineage's continued vitality." 
    },
    { 
      name: "Yang Guiwu", 
      years: "1931—2010", 
      description: "Grandmaster Yang Guiwu was from Yanshi Canjiadian in Henan province. He was a disciple of Abbot Shi De Chan who taught him Shaolin medicine in Shaolin temple. His knowledge of traditional healing methods complemented his martial skills, making him a comprehensive teacher of the Shaolin arts. Yang Guiwu was known for his precise execution of forms and his ability to explain complex concepts in accessible terms. He trained numerous international students, helping to spread authentic Shaolin knowledge beyond China for the first time. His teaching emphasized the unity of martial technique, health cultivation, and spiritual development. Yang Guiwu documented many traditional training methods and philosophical concepts, creating an important resource for future generations. His calm demeanor and profound insights made him a respected figure both within and outside traditional martial arts circles." 
    },
    { 
      name: "Hu Zhengsheng", 
      years: "12—1970", 
      description: "Master Hu Zhengsheng started his traditional Kungfu training at the age of 12. He first began studying under Zhang Guangjun at the Shaolin temple. His early training was characterized by extreme dedication and willingness to endure hardship to develop his skills. Hu Zhengsheng was known for his exceptional speed and precision in execution, making his techniques both effective and beautiful to observe. He specialized in the intricate southern styles that emphasize close-range techniques and stable stances. As a teacher, he was demanding but fair, pushing students to discover their own potential while providing careful guidance. Hu Zhengsheng's understanding of the principles underlying the techniques allowed him to adapt training methods for different body types and temperaments. His contributions to standardizing teaching methods helped preserve the authentic transmission of the art." 
    },
    { 
      name: "Shi Yanruan", 
      years: "1970—", 
      description: "Master Yanruan was admitted as a young child to Hu Zhengsheng's Kungfu academy. After receiving the training and guidance of Hu Zhengsheng, Yanruan was selected to enter the Shaolin Temple by Abbot Shi Yongxin. His dedication to traditional methods combined with openness to contemporary training science has created a comprehensive approach to teaching. Shi Yanruan is known for his dynamic demonstrations that showcase both traditional forms and practical applications. His teaching emphasizes building character alongside physical skill, honoring the complete tradition of Shaolin training. He has developed innovative methods for introducing beginners to complex techniques while maintaining traditional standards. Shi Yanruan has trained students from many countries, adapting his teaching methods to diverse cultural backgrounds while preserving the essence of the art. His ongoing research into historical documents continues to uncover insights about the evolution of Shaolin practices." 
    }
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
