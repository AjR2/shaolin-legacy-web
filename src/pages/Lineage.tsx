
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
              <h3 className="font-semibold text-temple-900">Grand Master Shi Yan Ming</h3>
              <p className="text-temple-600">34th Generation Shaolin Warrior Monk</p>
            </div>
            <div className="h-8 w-0.5 bg-temple-200" />
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Master Chen Wei</h3>
              <p className="text-temple-600">35th Generation Disciple</p>
            </div>
            <div className="h-8 w-0.5 bg-temple-200" />
            <div className="w-full p-4 bg-white rounded-lg shadow-sm text-center">
              <h3 className="font-semibold text-temple-900">Current Disciples</h3>
              <p className="text-temple-600">36th Generation</p>
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
