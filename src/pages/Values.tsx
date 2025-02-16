
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Values = () => {
  const rules = [
    "Arrive 10 minutes early to prepare for class",
    "Bow when entering and leaving the training hall",
    "Wear clean, appropriate training attire",
    "Remove shoes before stepping on training mats",
    "Show respect to instructors and fellow students",
    "No food or gum during training",
    "Maintain personal hygiene and keep nails trimmed",
    "Inform instructor if you need to leave class early",
    "Practice moves only as instructed by teachers",
    "Keep training area clean and organized"
  ];

  const goals = [
    {
      title: "Physical Development",
      description: "Build strength, flexibility, and coordination through consistent practice"
    },
    {
      title: "Mental Discipline",
      description: "Develop focus, patience, and perseverance in training and daily life"
    },
    {
      title: "Self-Defense",
      description: "Learn practical techniques for personal protection and awareness"
    },
    {
      title: "Character Building",
      description: "Cultivate humility, respect, and integrity through martial arts principles"
    },
    {
      title: "Cultural Understanding",
      description: "Gain appreciation for Chinese martial arts history and philosophy"
    },
    {
      title: "Community",
      description: "Build meaningful relationships with fellow practitioners"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Our Values</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-temple-50">
          <CardHeader>
            <CardTitle>Rules of the Training Hall</CardTitle>
            <CardDescription>Guidelines for respectful and safe practice</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-temple-100 text-temple-800 rounded-full text-sm">
                    {index + 1}
                  </span>
                  <span className="text-temple-800">{rule}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-temple-50">
          <CardHeader>
            <CardTitle>Goals of Kung Fu Training</CardTitle>
            <CardDescription>What we strive to achieve through practice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-temple-100"
                >
                  <h3 className="font-semibold text-temple-900 mb-1">
                    {goal.title}
                  </h3>
                  <p className="text-temple-600 text-sm">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Values;
