
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Lineage = () => {
  const instructors = [
    {
      name: "Master Chen Wei",
      title: "Head Instructor",
      experience: "35 years of practice",
      specialties: "Traditional Shaolin Forms, Meditation",
      image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400&q=80",
    },
    {
      name: "Sifu Li Ming",
      title: "Senior Instructor",
      experience: "20 years of practice",
      specialties: "Combat Applications, Qigong",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    },
    {
      name: "Sifu Sarah Wong",
      title: "Junior Instructor",
      experience: "15 years of practice",
      specialties: "Modern Wushu, Youth Training",
      image: "https://images.unsplash.com/photo-1595290293434-555d42427e84?w=400&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <h1 className="text-3xl font-bold text-temple-900">Lineage & Instructors</h1>
      
      {/* Lineage Card */}
      <Card className="bg-temple-50">
        <CardHeader>
          <CardTitle>Our Shaolin Lineage</CardTitle>
          <CardDescription>A tradition passed down through generations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Ji Long 1620 - ?</h3>
              <p className="text-temple-600">Ji Long was from Longfeng county in Shanxi Province during the late Ming Dynasty and was recognized as the founder of XinYiBa as well as Liu He Fist (XinYi Fist , XingYi Fist etc.).</p>
            </div>
            <div className="h-8 w-0.5 bg-temple-200" />
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Zheng Wukui 1660—？</h3>
              <p className="text-temple-600">Zheng Wukui, one of Ji Long’s disciples from Dengfeng County in Henan Province, taught Martial Arts during the Qianlong Dynasty.</p>
            </div>
            <div className="h-8 w-0.5 bg-temple-200" />
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Wang Zhicheng  1680—？</h3>
              <p className="text-temple-600">Wang Zhicheng, one of Zheng Wukui’s disciples from Xin’an County in Henan Province, was a famous Martial Arts master during the Qianlong Dynasty. According to the manuscripts, he summarized the theory of XinYiBa and Liu He Fist, helping to preserve Chinese Wushu history. Wang Zhicheng consummated the theory of XinYiBa and Liu He Fist, writing down the details as Martial Art manuscripts which were later spread to his successors. Some of these special skills were kept in the Shaolin Temple as secret skills, while others were widespread and later changed into several styles, for example Luoyang Hui, Ma Xue Li Style and Shanxi Province Dai Long Bang Style. However, these styles still retain the original Shaolin style and features.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Wang Yi & Wang Kai 1710—？</h3>
              <p className="text-temple-600">The martial arts skills of Wang Yi and Wang Kai, both sons of Wang Zhicheng, were handed down from their father.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Shi Haifa 1750—？</h3>
              <p className="text-temple-600">Hai Fa, also called Xiang Bo, was taught by the Shaolin Temple Grand Monk Ru Xiang. He was hardworking and mastered Qianjin Feet, Iron Fists, Xuanhua Axe, etc. all by himself. He was cranky, frank, and kind-hearted. He was given the nickname Black Whirlwind. Master Zhan Mo and Zhan De were his most noteworthy students.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Shi Zhanmo 1780—？</h3>
              <p className="text-temple-600">Practicing Martial Arts was strictly prohibited in 1828; however Zhan Mo, Hai Fa and some of other disciples hid in the Shigou Temple at the foot of the Shaolin Temple where they continued to practice martial arts secretly. Zhan Mo was an extremely dedicated practitioner. At night time, he and his disciple, Ji Qin (also called Wu Gulun), practiced XinYiBa. During the day, he used his vast knowledge of medicine to treat patients, saving many lives. Even now, old villages know about Zhan Mo and Ji Qin of the Shi Gou Temple.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Wu Gulun 1831—1914 </h3>
              <p className="text-temple-600">Wu Gulun, otherwise known as Ji Qjn, became a monk at the age of five under Grand Abbot Zhan Mo. During the Qing dynasty martial arts were banned, so the Shaolin monks practiced secretly. However, in the year of DaoGuang, a Manchurian officer named Li Qing arrived at the Shaolin Temple and requested that the abbot make the monks perform for him. However, the abbot denied that the monks still practiced Kungfu. Li Qing persisted, and the abbot allowed the monks to demonstrate their skills. After the general left, the monks realized that the Manchurian officers would return due to fear that the monks could pose a threat. The monks became very worried, so the abbot instructed Wu Gulun to leave the temple and carry on the traditions of Shaolin. Before leaving the temple Wu Gulun followed Shaolin tradition and fought the 18 guardians of Shaolin in order to prove his strength and ability to cope with secular life outside the temple. He was the last monk to ever follow this tradition. After defeating the 18 guardians of Shaolin, Wu Gulun disappeared into the mountains to live in an isolated village where he continued to practice as well as preserve the secrets of Shaolin Kungfu, including XinYiBa. During his time in the temple Wu Gulun trained in the highest level of Shaolin traditional Kungfu, XinYiBa, and mastered it. He passed on all of his Kungfu knowledge, including his knowledge of XinYiBa, to his son, Wu Shanlin.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Wu Shanlin 1875—1970</h3>
              <p className="text-temple-600">Wu Shanlin was the second son of Wu Gulun. He began training Kungfu at the age of 7 while still attending school and helping his father with farming. Wu Shanlin grew up in a small village in the mountains called (hueiwh), a poor area where the majority of people were farmers. Wu Shanlin also studied traditional Chinese medicine and became a very highly skilled doctor. In his village he maintained very good relationships with his neighbors as well as the rest of the villagers. He treated all patients, even if they had no money. No matter what the weather conditions were, Wu Shanlin always visited his patients, putting the needs of others before his own. Wu Shanlin’s Father, Wu Gulun, taught him everything about Shaolin traditional Kungfu and it was his desire for Wu Shanlin to return to the Shaolin temple and teach the monks there the Kungfu that Wu Gulun had taken and preserved secretly. So when the time was right, Wu Shanlin followed his father’s wishes and returned to the temple with the intention of helping to restore Shaolin’s old traditions. However, after seeing that the monks were of poor character, Wu Shanlin decided that they were not suitable to be taught the old Shaolin traditions. He stayed at the temple for 3 years, teaching some basic movements to the monks. After leaving the temple he searched for worthy disciples to inherit the Shaolin traditions. He eventually found a handful of students to whom he taught Shaolin traditions, and of course Shaolin’s highest skill, XinYiBa. Among those disciples were Shi Degen and Yang Guiwu.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Shi Degen 1914—1970 </h3>
              <p className="text-temple-600">Shi Degen was from Guan Di Miao village in Gong Xian in Henan province. He was sent to the Shaolin temple at the age of three because of his tendency towards illness. Due to the Shaolin monks’ care he became stronger and healthier, beginning Kungfu at the age of 6. The abbot of the temple took a liking to him due to his intelligence and hardworking nature.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Yang Guiwu 1931—2010</h3>
              <p className="text-temple-600">Grandmaster Yang Guiwu was from Yanshi Canjiadian in Henan province. He was a disciple of Abbot Shi De Chan who taught him Shaolin medicine in Shaolin temple. He studied Traditional Kungfu from his master Shi De Gen and also from Wu Shanlin who both taught him the most secret of all Shaolin arts XinYiBa (Heart-Mind-Control). 70 years of studying Shaolin Kungfu is what gave Grandmaster Yang Guiwu a truly deep understanding of Shaolin martial arts Shaolin medicine and Chan Buddhism. He became one of the greatest practitioners of all time when he was honored with the position of chief instructor for traditional Kungfu of the Shaolin warrior monks at the Shaolin temple. He has some of the most skillful students of the Shaolin temple under his name. His Kungfu can be seen in an old Shaolin documentary filming him in the 1000 Buddha hall where he is teaching XinYiBa the most advanced level of Shaolin traditional Kungfu. It was filmed over 30 years ago in hope to spread real Shaolin Kungfu. Not only was he a grandmaster in Shaolin martial arts he was a grandmaster in Chan Buddhism and Shaolin medicine. His teachings have the fundamentals of Shaolin manuscripts 500 years old, which were passed to him to preserve and teach the original way of Shaolin Kungfu. The manuscripts give full detailed explanations of Shaolin martial arts and theory. When he decided that the time had come to pass on the manuscripts to carry on the Shaolin way, he passed the scripts on to Hu Zhengsheng along with the responsibility to spread real traditional Shaolin Kungfu and the knowledge to future generations of Shaolin disciples.</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Hu Zhengsheng</h3>
              <p className="text-temple-600">Master Hu Zhengsheng started his traditional Kungfu training at the age of 12. He first began studying under Zhang Guangjun at the Shaolin temple. He learned many forms and fighting skills including Xin Yi Liu He Quan, Guai Zi, (Walking Stick) Chun Qiu Da Dao (Spring & Autumn Da Dao), Cao Lian, Sheng Biao, Yue Ya Chan, Hu Tou Gou and many more. Master Hu Zhengsheng took care of Master Zhang Guangjun in his old age, helping him eat, clean, and dress himself. After training Hu Zhengsheng for 7 years at the Shaolin Temple, Grandmaster Zhang Guang Jun became quite old and as his life came to an end he told Hu Zheng Sheng to go and seek a grandmaster of traditional Shaolin Kungfu in San Bei village, Yang Guiwu. After Hu Zhengsheng was accepted as a disciple of Yang Guiwu he continued his traditional Shaolin Kungfu training for 15 more years, learning Shaolin Qin Na, Shaolin combat and self-defense techniques, and most importantly Shaolin Xin Yi Ba (Heart-Mind-Control).</p>
            </div>
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Shi Yanruan</h3>
              <p className="text-temple-600">Master Yanruan was admitted as a young child to Hu Zhengsheng’s Kungfu academy. After receiving the training and guidance of Hu Zhengsheng, Yanruan was selected to enter the Shaolin Temple by Abbot Shi Yongxin. During his time at the Shaolin Temple, Shi Yanruan taught students from all over the world. He also accompanied Abbot Shi YongXin on performances all around the world, winning him an excellent reputation in the world of Shaolin Kungfu.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructors Section */}
      <section>
        <h2 className="text-2xl font-semibold text-temple-900 mb-6">Our Instructors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{instructor.name}</CardTitle>
                <CardDescription>{instructor.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-temple-600">
                    <span className="font-medium">Experience:</span> {instructor.experience}
                  </p>
                  <p className="text-sm text-temple-600">
                    <span className="font-medium">Specialties:</span> {instructor.specialties}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Lineage;
