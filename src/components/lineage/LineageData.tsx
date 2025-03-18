
import { LineageMaster, HistoryPeriod, TheoryItem } from "@/types/schedule";

// Export the data so it's not duplicated in the Lineage.tsx component
export const lineageData: LineageMaster[] = [
  { 
    name: "Ji Long", 
    years: "1620 - ?", 
    description: "Ji Long was from Longfeng county in Shanxi Province during the late Ming Dynasty and was recognized as the founder of XinYiBa as well as Liu He Fist (XinYi Fist , XingYi Fist etc.).",
    photo: "jilong.png" // Example photo added
  },
  { 
    name: "Zheng Wukui", 
    years: "1660—？", 
    description: "Zheng Wukui, one of Ji Long's disciples from Dengfeng County in Henan Province, taught Martial Arts during the Qianlong Dynasty.",
    photo: "ZhengWukui.png" // Example photo added
  },
  { 
    name: "Wang Zhicheng", 
    years: "1680—？", 
    description: "Wang Zhicheng, one of Zheng Wukui's disciples from Xin'an County in Henan Province, was a famous Martial Arts master during the Qianlong Dynasty. According to the manuscripts, he summarized the theory of XinYiBa and Liu He Fist, helping to preserve Chinese Wushu history. Wang Zhicheng consummated the theory of XinYiBa and Liu He Fist, writing down the details as Martial Art manuscripts which were later spread to his successors. Some of these special skills were kept in the Shaolin Temple as secret skills, while others were widespread and later changed into several styles, for example Luoyang Hui, Ma Xue Li Style and Shanxi Province Dai Long Bang Style. However, these styles still retain the original Shaolin style and features.",
    photo: "WangZhicheng.png" // Example photo added
  },
  { 
    name: "Wang Yi & Wang Kai", 
    years: "1710—？", 
    description: "The martial arts skills of Wang Yi and Wang Kai, both sons of Wang Zhicheng, were handed down from their father.",
    photo: "WangYi.png" // Example photo added
  },
  { 
    name: "Shi Haifa", 
    years: "1750—？", 
    description: "Hai Fa, also called Xiang Bo, was taught by the Shaolin Temple Grand Monk Ru Xiang. He was hardworking and mastered Qianjin Feet, Iron Fists, Xuanhua Axe, etc. all by himself. He was cranky, frank, and kind-hearted. He was given the nickname Black Whirlwind. Master Zhan Mo and Zhan De were his most noteworthy students.",
    photo: "shihaifa.png" // Example photo added
  },
  { 
    name: "Shi Zhanmo", 
    years: "1780—？", 
    description: "Practicing Martial Arts was strictly prohibited in 1828; however Zhan Mo, Hai Fa and some of other disciples hid in the Shigou Temple at the foot of the Shaolin Temple where they continued to practice martial arts secretly. Zhan Mo was an extremely dedicated practitioner. At night time, he and his disciple, Ji Qin (also called Wu Gulun), practiced XinYiBa. During the day, he used his vast knowledge of medicine to treat patients, saving many lives. Even now, old villages know about Zhan Mo and Ji Qin of the Shi Gou Temple.",
    photo: "shiZhanmo.png" // Example photo added
  },
  { 
    name: "Wu Gulun", 
    years: "1831—1914", 
    description: "Wu Gulun, otherwise known as Ji Qjn, became a monk at the age of five under Grand Abbot Zhan Mo. During the Qing dynasty martial arts were banned, so the Shaolin monks practiced secretly. However, in the year of DaoGuang, a Manchurian officer named Li Qing arrived at the Shaolin Temple and requested that the abbot make the monks perform for him. However, the abbot denied that the monks still practiced Kungfu. Li Qing persisted, and the abbot allowed the monks to demonstrate their skills. After the general left, the monks realized that the Manchurian officers would return due to fear that the monks could pose a threat. The monks became very worried, so the abbot instructed Wu Gulun to leave the temple and carry on the traditions of Shaolin. Before leaving the temple Wu Gulun followed Shaolin tradition and fought the 18 guardians of Shaolin in order to prove his strength and ability to cope with secular life outside the temple. He was the last monk to ever follow this tradition. After defeating the 18 guardians of Shaolin, Wu Gulun disappeared into the mountains to live in an isolated village where he continued to practice as well as preserve the secrets of Shaolin Kungfu, including XinYiBa. During his time in the temple Wu Gulun trained in the highest level of Shaolin traditional Kungfu, XinYiBa, and mastered it. He passed on all of his Kungfu knowledge, including his knowledge of XinYiBa, to his son, Wu Shanlin.",
    photo: "shiWuGulun.png" // Example photo added
  },
  { 
    name: "Wu Shanlin", 
    years: "1875—1970", 
    description: "Wu Shanlin was the second son of Wu Gulun. He began training Kungfu at the age of 7 while still attending school and helping his father with farming. Wu Shanlin grew up in a small village in the mountains called (hueiwh), a poor area where the majority of people were farmers. Wu Shanlin also studied traditional Chinese medicine and became a very highly skilled doctor. In his village he maintained very good relationships with his neighbors as well as the rest of the villagers. He treated all patients, even if they had no money. No matter what the weather conditions were, Wu Shanlin always visited his patients, putting the needs of others before his own. Wu Shanlin's Father, Wu Gulun, taught him everything about Shaolin traditional Kungfu and it was his desire for Wu Shanlin to return to the Shaolin temple and teach the monks there the Kungfu that Wu Gulun had taken and preserved secretly. So when the time was right, Wu Shanlin followed his father's wishes and returned to the temple with the intention of helping to restore Shaolin's old traditions. However, after seeing that the monks were of poor character, Wu Shanlin decided that they were not suitable to be taught the old Shaolin traditions. He stayed at the temple for 3 years, teaching some basic movements to the monks. After leaving the temple he searched for worthy disciples to inherit the Shaolin traditions. He eventually found a handful of students to whom he taught Shaolin traditions, and of course Shaolin's highest skill, XinYiBa. Among those disciples were Shi Degen and Yang Guiwu.",
    photo: "shiWuShanlin.png" // Example photo added
  },
  { 
    name: "Shi Degen", 
    years: "1914—1970", 
    description: "Shi Degen was from Guan Di Miao village in Gong Xian in Henan province. He was sent to the Shaolin temple at the age of three because of his tendency towards illness. Due to the Shaolin monks' care he became stronger and healthier, beginning Kungfu at the age of 6. The abbot of the temple took a liking to him due to his intelligence and hardworking nature.",
    photo: "shiDegen.png" // Example photo added
  },
  { 
    name: "Yang Guiwu", 
    years: "1931—2010", 
    description: "Grandmaster Yang Guiwu was from Yanshi Canjiadian in Henan province. He was a disciple of Abbot Shi De Chan who taught him Shaolin medicine in Shaolin temple. He studied Traditional Kungfu from his master Shi De Gen and also from Wu Shanlin who both taught him the most secret of all Shaolin arts XinYiBa (Heart-Mind-Control). 70 years of studying Shaolin Kungfu is what gave Grandmaster Yang Guiwu a truly deep understanding of Shaolin martial arts Shaolin medicine and Chan Buddhism. He became one of the greatest practitioners of all time when he was honored with the position of chief instructor for traditional Kungfu of the Shaolin warrior monks at the Shaolin temple. He has some of the most skillful students of the Shaolin temple under his name. His Kungfu can be seen in an old Shaolin documentary filming him in the 1000 Buddha hall where he is teaching XinYiBa the most advanced level of Shaolin traditional Kungfu. It was filmed over 30 years ago in hope to spread real Shaolin Kungfu. Not only was he a grandmaster in Shaolin martial arts he was a grandmaster in Chan Buddhism and Shaolin medicine. His teachings have the fundamentals of Shaolin manuscripts 500 years old, which were passed to him to preserve and teach the original way of Shaolin Kungfu. The manuscripts give full detailed explanations of Shaolin martial arts and theory. When he decided that the time had come to pass on the manuscripts to carry on the Shaolin way, he passed the scripts on to Hu Zhengsheng along with the responsibility to spread real traditional Shaolin Kungfu and the knowledge to future generations of Shaolin disciples.",
    photo: "yangGuiwu.png" // Example photo added
  },
  { 
    name: "Hu Zhengsheng", 
    years: " ", 
    description: "Master Hu Zhengsheng started his traditional Kungfu training at the age of 12. He first began studying under Zhang Guangjun at the Shaolin temple. He learned many forms and fighting skills including Xin Yi Liu He Quan, Guai Zi, (Walking Stick) Chun Qiu Da Dao (Spring & Autumn Da Dao), Cao Lian, Sheng Biao, Yue Ya Chan, Hu Tou Gou and many more. Master Hu Zhengsheng took care of Master Zhang Guangjun in his old age, helping him eat, clean, and dress himself. After training Hu Zhengsheng for 7 years at the Shaolin Temple, Grandmaster Zhang Guang Jun became quite old and as his life came to an end he told Hu Zheng Sheng to go and seek a grandmaster of traditional Shaolin Kungfu in San Bei village, Yang Guiwu. After Hu Zhengsheng was accepted as a disciple of Yang Guiwu he continued his traditional Shaolin Kungfu training for 15 more years, learning Shaolin Qin Na, Shaolin combat and self-defense techniques, and most importantly Shaolin Xin Yi Ba (Heart-Mind-Control).",
    photo: "huZhengsheng.png" // Example photo added
  },
  { 
    name: "Shi Yanruan", 
    years: " ", 
    description: "Master Yanruan was admitted as a young child to Hu Zhengsheng's Kungfu academy. After receiving the training and guidance of Hu Zhengsheng, Yanruan was selected to enter the Shaolin Temple by Abbot Shi Yongxin. During his time at the Shaolin Temple, Shi Yanruan taught students from all over the world. He also accompanied Abbot Shi YongXin on performances all around the world, winning him an excellent reputation in the world of Shaolin Kungfu.",
    photo: "shiYanruan.png"
  }
];

export const historyData: HistoryPeriod[] = [
  {
    period: "Shaolin Kung Fu",
    description: [
      "Shaolin Kungfu refers to the traditional cultural system that has formed in the particular Buddhist cultural environment in Shaolin Temple of Songshan Mountain over long history. It is based on a belief in the supernatural power of Buddhism and fully reflects the wisdom of Chan Buddhism. The martial arts practiced by monks in the Shaolin Temple are its major form of expression. ",
      "Shaolin Kungfu encompasses complete technical and theoretical system, with martial arts and techniques as its major form of expression, and Buddhism belief and Chan wisdom as the cultural connotation.",
      "Shaolin Kungfu is a huge and well-developed technical system as opposed to the many 'schools' or 'Quan styles' of other martial arts. Chinese martial arts are complicated in structure and abundant in school. According to historical records, Shaolin Kungfu is the one school among a myriad of Chinese martial arts schools, which boasts a long history, a complete system and the highest level of skills. Those Quan guidebooks handed down over many generations in Shaolin Temple show that there are as many as several hundred series of Shaolin Kungfu skills of which several dozen are widely known and practiced. There are 72 unique sets of skills and all kinds of special bodies of Kungfu techniques such as Qi Gong, grappling, wrestling, disjointing, attacking a vital point of the body etc. This wide body of skills and knowledge constitutes a huge and orderly technical system organized according to special categories and levels of difficulty.",
      "Shaolin Kungfu is presented with the movement of the human body such as attack, defense and wrestling as its core and the series as its basic units. Series are made up of a group of movements. The design and arrangements of these movements are based on the medical knowledge of ancient China and conforms to the rule of movement of the human body. Movements and series put special emphasis on the combination of movement and stillness, the balance between Yin and Yang, the complement of toughness and softness, and the inclusion of the spirit and the form. The most well-known principle is 'Six Harmonies', composed of the three external harmonies (shoulders and hip, elbows and knees, hands and feet) and the three external harmonies (mind and intention, intention and Qi, Qi and force). The ancient Chinese belief in 'the unity of human and nature' suggests that only those movements that fit the natural structure of the human body can be called proper. Shaolin Kungfu has long been tested by history, during which it has kept its Chan Buddhist essence while weeding out from itself what was undesirable while continually undergoing change and self-reformation. As a result, Shaolin Kungfu gives full play to the potential of the human body and has achieved an optimal form of movement for the human body which allows room for its practitioners to develop and thrive. ",
      "The wisdom of Chan Buddhism has imparted profound cultural connotations to Shaolin Kungfu. The practice of Shaolin Kungfu should first be based on the belief of Buddhism including wisdom belief and strength belief. The First Patriarch Bodhidharma is revered as its deity of wisdom and Kinnara as deity of strength. The aspiration for supernatural power and pursuit of supreme wisdom has always been the goals pursued by Buddhists. This is also the main reason for Kungfu's mystical effects and distinguishes Shaolin Kungfu from other Kungfu.",
      "Buddhists attach great importance to the supporting role of faith for the power of the vow. The belief in 'the power of vow' is an important manifestation of the belief system of Shaolin Kungfu. It was formed during Tang Dynasty when the Lotus Scripture enjoyed an exceedingly high degree of popularity. Since then, it has passed through three Buddhist historical periods, which are noted by the development of belief in the Kwan-yin, belief in the Deity of Narayan, and belief in Kinnara. The major deity in the belief system of Shaolin Kungfu is Kinnara. There is a hall dedicated to Kinnara in the Permanent Residence Complex of Shaolin Temple.",
      "The soul of Shaolin Kungfu is rooted in the wisdom of Chan Buddhism. The underlying basis of the belief system of Shaolin Kungfu is 'Chan ding (Dhyana)'. The prestigious Indian monk Bodhidharma introduced Chan tradition to Shaolin Temple in the 6th century and from that time the temple has been regarded as the origin of Chan Buddhism in China. Chan Buddhism is the result and synthesis of a wide range of exchange in philosophical and religious understanding between what was known as Chinese 'dark learning' of that time and Indian Buddhist culture after the latter's introduction into China. Therefore it represents a significant development in cultural exchange, synthesis, and even metamorphosis between the two major civilizations of the ancient Orient. Chan Buddhism is replete with a thorough understanding of life as interpreted by the two great founts of Oriental wisdom, China and India. Previous to the birth of Chan Buddhism, Buddhism was mostly preoccupied with the problem of facing grief and death, but Chan Buddhism introduced a much more optimistic climate with an affirmation of the deep joy to be found in life. Chan Buddhism clearly reflects the depth of experience and penetration into the mysteries of the universe and the true meaning of life as exemplified by members of the Chinese religious and philosophical elite amongst who were many eminent monks and scholar-officials widely known in Chinese history. Throughout the Tang and Song dynasties, Chan Buddhism enjoyed a high degree of acceptance and popularity, and Shaolin Temple is rightfully regarded as its birthplace. Of course, it is also quite natural that during this long historical period the contents of the Shaolin Kungfu belief system and many of its features have also undergone refinement and change. The combination of Chan Buddhism with a unique system of martial arts has become the chief characteristic of Shaolin Kungfu and as such the adoption and practice of this strict belief system is what especially marks the monks of the temple as 'Shaolin' monks who regard their personal perfection in this system as their ideal and lifelong goal.",
      "Chan Buddhism pays special attention to achieving the goal of Buddhism via the daily cultivation according to the strict precepts and religious doctrines. Shaolin Kungfu, as a component of Shaolin monks' daily life, has also been included into the forms of Buddhism and Chan Studies. The main body for practicing Shaolin Kungfu is the Chan Buddhists who practice martial arts out of the understanding of the Chan Buddhism. They fully understand life and have no fear in their hearts, demonstrating great wisdom and courage. Chan Buddhism has enriched Shaolin Kungfu and Shaolin Kungfu brings to them the unique state of relaxation, freedom and divinity. The comprehension of Shaolin Kungfu could only be achieved by long time practice and such spirit impressed Kungfu practitioners' souls through accumulation. ",
      "The life of monks is subject to the precepts of Buddhism, which indicate the tenet of Buddhism 'harboring compassion and helping sentient beings sail to the world of joy'. They are rules of conduct for Buddhists. There are five basic precepts in Buddhism, refraining from killing, refraining from robbery, refraining from sex, refraining from liquor and refraining from lies. The precepts have been developed into precepts in practicing martial arts in the particular environment of Shaolin Temple and when shown in the practitioners, these precepts can also be called their ethics in practicing martial arts. These precepts have also directly affected the technical style of Shaolin Kungfu. Monks in Shaolin temple practice martial arts only for self defense rather than offense. Therefore Shaolin Kungfu shows features of self-restraint and modesty from time to time. Its movements do not require large space and are restrained, stressing on internal strength; the movements are brief but strong and capable of winning by striking only after the opponents have struck.",
      "Shaolin Kungfu is taught mainly by oral formulas handed down from generation to generation. In history, the recognition of inheritors of Shaolin Kungfu was based on the patriarchal clan system of Shaolin temple. In the process of teaching and learning Shaolin Kungfu, it is necessary for masters to teach disciples by personal example as well as oral instruction and for disciples to study diligently. The inheritance of high level Shaolin Kungfu always depends on the teaching and oral instruction of masters as well as disciples' spiritual comprehension of Chan Buddhism. To reach such level of Kungfu, monks have to improve themselves on both daily Chan studies and Kungfu practices. The idea behind Shaolin Kungfu is the belief in the combination of Chan and martial arts."
    ],
    photo: "/ShaolinCommunity.png"
  }
];

// Define the theoryContent array with the original content
export const theoryContent: TheoryItem[] = [
  {
    title: "The Five Elements Theory",
    content: [
      "The Five Elements theory is central to Shaolin martial arts philosophy. It represents the five phases of energy: Water, Wood, Fire, Earth, and Metal. Each element has specific characteristics that relate to fighting techniques, strategies, and personal development.",
      "In practice, students learn to embody these elements, flowing like water when evasion is needed, standing firm like earth when stability is required, and attacking with the explosive force of fire when the moment is right."
    ],
    photo: "/SifuWoodStance.png"
  },
  {
    title: "The Six Harmonies",
    content: [
      "Shaolin training emphasizes the Six Harmonies principle, which includes three external harmonies (shoulders and hips, elbows and knees, hands and feet) and three internal harmonies (heart and mind, mind and energy, energy and force).",
      "Only when these harmonies are achieved can a practitioner reach their full potential. True mastery comes when the body moves as one unified whole, with every action supported by proper alignment, breathing, and mental focus."
    ],
    photo: "/ShiYongxin.png"
  }
];
