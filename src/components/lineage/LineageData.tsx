
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
    photo: "huZhengSheng.png" // Example photo added
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
  },
  {
    period: "Kung Fu Corps",
    description: [
      "Shaolin Kungfu Monk Corps’s predecessor was the Shaolin Warrior Monks. During the Tang Dynasty, Emperor Li Shiming (598-649 A.D), indebted to the thirteen monks for saving his life, granted the privilege of maintaining warrior monks at the Shaolin Temple.",
      " Late in the Song Dynasty, Emperor Taizu (founder of the Song Dynasty from 960 to 976) paid a visit to the Shaolin Temple, and following his visit he dispatched batches of military troops to the temple to train the warrior monks and master Shaolin martial arts.",
      "During the Yuan Dynasty, the Shaolin Abbot Fuyu was appointed as Grand Preceptor by the royal court where he strongly advocated for the warrior monks’ Kungfu practices.",
      "The Ming Dynasty witnessed the largest ever scale of warrior monks at the Shaolin Temple, with over a thousand standing warrior monks. More than 500 warrior monks enlisted and fought back Japanese pirates, winning honor for the Shaolin Temple.",
      "In the Qing Dynasty, the royal court suspected the temple of plotting to overturn the Qing Dynasty and reinstate the Ming Dynasty, and therefore prohibited the practice of martial arts. However, having a fondness for Kungfu, some warrior monks practiced covertly by themselves.",
      "The Republic of China revived Shaolin Kungfu. While visiting the Shaolin Temple, the then-president Chiang Kai-shek was enthralled by the demonstrations of warrior monks.",
      "During the most prosperous period for the Shaolin Temple, the number of standing warrior monks reached over one thousand. Warrior monks were enlisted in the army many times and contributed to many national victories against aggression - most notably in defending China against the Japanese invasion.",
      "After the founding of the People’s Republic of China, especially after the Third Plenary Session of the Eleventh Central Committee, the Chinese government’s religious policies were abolished and participation in traditional sports gradually rose. In 1987, in order to promote Shaolin, Master Shi Yongxin formed the Shaolin Wushu Team. In 1989, the Shaolin Wushu Team was renamed as the Shaolin Kungfu Monk Corps. The Kungfu Monk Corps follows the historical pattern of Shaolin warrior monks, performing Shaolin Kungfu with the aim of spreading traditional Kungfu as well as authentic Shaolin Chan culture.",
      "Currently, as the inheritor and ambassador of Shaolin Kungfu and Chinese culture, the Shaolin Kungfu Corps has been invited to over 60 regions and countries in Europe, Asia and the Americas to perform authentic Shaolin Kungfu."
    ],
    photo: "/kungFuCorp.png"
  }
];

// Define the theoryContent array with the original content
export const theoryContent: TheoryItem[] = [
  {
    title: "THREE SECTIONS (SAN JIE)",
    content: [
      "Human bodies have the same principles: feet to hips (Root Section), waist to chest (Middle Section), and shoulder to hands (Upper Section). Each of these main sections has three sub sections.",
      "Upper Section:",
      " ",
      "Shoulder (Root), Elbows (Middle), Hands (Upper)",
      " ",
      "Middle Section:",
      " ",
      "Chest (Upper), Heart (Middle), Dantian <low abdomen> (Root)",
      " ",
      "Root Section:",
      " ",
      "Hips (Root), Knees (Middle), Feet（Upper）",
      " ",
      "The knack of the three sections: the Uppers move, then the Middles follow, and then the Roots chase after. For example , the movement of punch, the fist is the upper of the upper section , after you lift your fist , the elbow (Middle ) follows and then the shoulder (Root) chases after . Only in this way, you can explosive power smoothly. When you progress forward, life the feet, then the knee follows, and then the hip chases after. Thus the center of gravity of the body is moved forward, the ten toes can grasp on the earth stablely like Mount Tai."
    ],
    photo: "/threeSections.png"
  },
  {
    title: "FOUR POINTS (SI SHAO)",
    content: [
      "What should I focus on when practicing Wushu?",
      " ",
      "While practicing, you should focus on your eyes, ears and heart. The eyes are “searching” and “watching” at the same time. Normally, we just look, but you must also look with your heart. We should look with our hearts when we practice Wushu. The ears are “listening”. They should always be listening to your surroundings. For example, if someone calls us, we should listen with our hearts.",
      " ",
      "I want to know how to get the most power out of my body",
      " ",
      "The body can be divided into tendons, bones, muscles, qi and blood. Our internal power is derived by unifying all of these. Teeth are like the end point of our bones (the teeth are like the external part of the bones). Your teeth should feel as though they can bite through tendons. Hair is like the end point of our blood system. Your hair should feel as though it can lift a hat off your head; thus, the blood will get to where you want. Fingernails are like the end point of our tendons. Your fingernails should feel as though they can cut through bone, which will in turn strengthen your tendons. And the tongue is like the end point of our muscles. Your tongue should feel as though it can push your teeth out of place. Combine these four end points together with strength to form internal power.",
    ],
    photo: "/fourPoints.png"
  },
  {
    title: "THE FIVE ELEMENTS (WU XING)",
    content: [
      "1 - The Five Elements?",
      "The five elements are water, wood, metal, fire and earth. The world consists of these five elements and they have a mutual promotion and restraint between each other. They have a relationship between the five major organs of the body. The mouth is linked to the heart which represents the element fire. The nose is linked to the lungs which represent metal. The eyes are linked to the liver which represents wood. The ears are linked to the kidneys which represents water. The philtrum is linked to the spleen which represents earth. The heart is fire, move the heart, generate power. The lungs are metal, move the lungs, make sounds like thunder. The liver is wood, move the liver, the fire comes out. The kidney is water, move the kidney, you move as quickly as the wind. The spleen is earth, move the spleen, you attach with great power. The five major organs are like five entrances to the body, we have to guard our own entrances and restrain your opponent from attacking them.",
      " ",
      "2 - Cycles",
      "The five elements are not isolated; rather they work closely together and have their own internal orders and patterns. The rules that govern the five elements include a mutual generation cycle, a mutual restriction cycle, over restriction, reverse restriction and balance between generation and restriction.",
      " ",
      "2.1 - Mutual generation cycle",
      "One element (serving as parent) enriches, nourishes, strengthens, promotes growth and development of the following element (serving as child). Generating: Wood feeds Fire - Fire creates Earth (ash) - Earth bears Metal - Metal (trace elements) collects, enrich Water - Water nourishes Wood. Interpretation: (supporting, helping)",
      "- Wood is the supporting element of Fire. Fire can release the power of Wood.",
      "- Fire is the supporting element of Earth. Earth can release the power of Fire.",
      "- Earth is the supporting element of Metal. Metal can release the power of Earth.",
      "- Metal is the supporting element of Water. Water can release the power of Metal.",
      "- Water is the supporting element of Wood. Wood can release the power of Water.",
      " ",
      "2.2 - Mutual restriction cycle(overcoming)",
      "Wood parts Earth (such as roots; or, Trees can prevent soil erosion);",
      "Metal chops Wood;",
      "Fire melts Metal;",
      "Water quenches Fire;",
      "Earth dams (or muddies or absorbs) Water;",
      "This cycle might also be called 'controls', 'restrains' or 'fathers'.",
      " ",
      "2.3 - Over-restriction cycle",
      "The Chinese word for restriction, 'ke' means 'inhibition' or 'winning over'. In nature, wood controls the earth. (See figure 3.) In the body, the liver (a wood element) controls the spleen (an earth element) and inhibits its functions in a balanced manner. If the liver's function becomes excessive, there will be over-restriction of spleen function causing an imbalance in the body. This happens because excessive liver function produces fire, which in turns affects the smooth flow of qi. Without good qi flow to start, the spleen cannot successfully transform food into more qi.",
      " ",
      "2.4 - Reverse restriction (weakening) cycle",
      "If the enemy is too strong, the controlling element itself becomes controlled in a reverse manner. When wood is too strong and its controlling metal axe is too blunt, the axe cannot cut the wood and may even break as a result of the rebound force if an attempt is made to chop it. This illustrates reverse restriction because the wood is able to restrict metal, which is not usually the case. In our body, if the spleen functions excessively, its controlling liver will also be restricted in a reverse manner. The excessive spleen function will produce heat and dampness, which doesn't have a sufficient release in the body. The constrained damp heat will heat up the liver and the gall bladder. When this occurs, the gall bladder can no longer properly regulate bile secretion, and disease occurs.",
      "Reverse restriction (weakening) cycle :",
      "- Wood insults Metal (axe cannot cut metal, can even break)",
      "- Metal insults Fire (can extinguish fire)",
      "- Fire insults Water (fire evaporates water)",
      "- Water insults Earth (water overcomes dam)",
      "- Earth insults Wood (earth too dense, roots cannot part it)",
      " ",
      "2.5 - Balance between generation and restriction",
      "A famous Traditional Chinese Medicine physician Zhang JingYue (1563-1640 AD) said, 'The mechanism of creation cannot do without promotion. Neither can it do without control. If there is no promotion, there will be no development and growth. If there is no control, the unbalanced excitement will be harmful. It is necessary to have control inside promotion and to have promotion inside control, so that everything can operate continuously, in both a complementary and opposite manner.'",
      "Balance between generation and restriction is important for normal transformation of the five elements. Each element is under the influence of the other four in some way. Wood generates fire and water generates wood. On the other hand, wood inhibits earth, but itself is inhibited by metal. In this way, all five elements establish an intricate homeostasis in nature. This wisdom has also been applied to TCM by incorporating the theory of the five elements into health maintenance strategies, which have been successful for thousands of years."
    ],
    photo: "/fiveElements.png"
  },
  {
    title: "SIX UNIONS (LIU HE)",
    content: [
      "The six Unions include the Internal Three Unions which are the unions of the heart and the mind, the mind and the Qi , the Qi and the strength , and the External Three Unions involving the unions of the hands and feet , the elbow and the knee , the shoulders and the hipbone .The six Unions means combining the Internal Three Unions and the External Three Unions into one. It also means combining the body and the mind into one.Training Kungfu with the Six Unions,you find your own way to move and fight."
    ],
    photo: "/sixUnions.png"
  },
  {
    title: "Kung Fu Qi Gong",
    content: [
      "About Qigong",
      "Wushu Qigong is the qi controlled by the mind and the mind controlled by the heart. When you combine breathing with the heart and mind you generate Qi to then generate power. The longer you practice, the stronger your tendons and bones will become. They will feel full of energy and when you learn to use the strength accumulated in them you will be able to break bricks or even smash stones. If you punch the opponent with the strength, he will feel like being hitting by a heavy iron fist, no normal person can bear it. Qigong has the double effectiveness of health preservation and defense.",
      " ",
      "About Power",
      "Qi is the source of energy, every movement in Wushu needs it. Energy comes from exercises; when practice Wushu qigong you have to converge with heart, mind, qi, energy and sound then mobilize the blood and energy and match it all with breathing by the direction of your mind. As a result your muscles, tendons and bones will have great strength. This power originates from Qi; it is generally called Qigongin Wushu.",
      " ",
      "About the relationship between Qi and Power",
      "Qi that is used outside the body is calledExternal Force.Qi which is saved inside the body is calledInternal Energy; which cooperates with the Si Shao (Four Sections) and strength is calledNei Gong (Internal Power)",
      " ",
      "The way to breath",
      "Before you do every movement when you train, you have to take a breath until your Qi flows directly to the Dantian (low abdomen). You have to focus your mind and attention on the way Qi flows in your body. Qi follows the heart and mind, your thoughts follow your Qi at the same time. You have to coordinate your breathing and body movements of stretching and bunching: move down your shoulders when you breathe out and stretch your chest when you breathe in .When you practice breathing, you have to breathe from shallow to deep, from slow to fast, and keep practicing. At the beginning you have to make your mind control your Qi and your movements until you master it, then you can breathe naturally and regularly following the movements.",
      "The key to breathing is a slowly, evenly, deeply, long breath. You have to breathe in with the nose but breathe out with nose as well as mouth. Understand and master the way to breath, it is good and important for practicing well shaolin Wushu.",
      "Qigong is a difficult internal exercise, if you start to study it, you have to work hard and do it patiently and constantly. The longer you practice, greater the skill you will master, and then you will understand Qigong and be able to harvest your Qi.",
    ],
    photo: "/qiGong.png"
  },
  {
    title: "THE WAYS TO PRACTICE SHAOLIN KUNG FU",
    content: [
      "Ⅰ.Conditions",
      " ",
      "1.The Native Qualities：The Corporeity and the Intelligence",
      "2.The Succession of Teachings From a Master to His Disciples: to decide the direction of training",
      "3.The Acquired Hard-working: Perseverance, Methods and Comprehension.",
      " ",
      "Ⅱ.Notices",
      " ",
      "1.Mentality: should be genial and generous ; To be sensitive and studious ; Don’t feel ashamed to ask from anyone when learning.",
      "2.Status: to study, to watch, to experience, to understand.",
      "3.Methods: the more important aspects when training Kungfu. First, every movement or forms you practice, you have to understand the purpose you train and the state you reach, and then to analyze the detail and difficulty and master the  main points ;",
      "- Second, you have to understand your own advantage and disadvantages, give full play to the advantage and make up the disadvantage at the same time. Don’t train blindly, or you would waste your energy and won’t get the point",
      "- Third, relax your body, you must not be nervous, or your movements will be stiff and robotic, also you must not be loose or you won’t be able to do the movements correctly, you could even get worse. You cannot tell right from wrong when you’re in an unclear state and the feelings when you practice will become vague.",
      "4. Comprehension: the most important aspects when training Kungfu. Do not practice blindly and not keep copying the movements from others, make references and cooperate with the coaches or the master, and then analyze and summarize. Only then the Kungfu you comprehend belongs to yourself and it has your own style. Kungfu has no specific form , only the trainers have their own performing styles .",
      "5.Wushu Theory : It should be combined with practice. You have to understand and exercise the theories of San Jie (Three Sections), Si Shao(Four Points), Wu Xing(Five Elements), and Liu He(Six Unions). Remember the ancient motto :Practice just for fight.",
      " ",
      "When it is recommended but to train Shaolin Kungfu:",
      "1.When you have great vigor and spirit;",
      "2.When you have the desire to train;",
      "3.When you are euphoric and happy;",
      " ",
      "When it is not recommended to train:",
      "1.When you are tired , for it will affect the accuracy of your movements;",
      "2.When you are depressed and sluggish , for it will hurt your viscera;",
      "3.When your stomach is too full or when you are too hungry ; you should not train one hour before meals and two hours after meals , or it will hurt the visceral function .",
      " ",
      "Also",
      "·You should train in fresh and peaceful place ;",
      "·You should train everyday.",
    ],
    photo: "/fiveElements.png"
  }
];
