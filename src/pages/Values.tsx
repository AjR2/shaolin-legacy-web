
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Values = () => {
  const rules = [
    "No Street shoes allowed in the training area.  Only Kungfu shoes are allowed.",
    "If you are late for class, WAIT in the waiting area until the master asks you to join the class.",
    "Your sash must be worn at all times.",
    "Always wear school uniforms when training and keep your shirts tucked inside your Kungfu pants.",
    "Call all Kungfu masters Shi Fu (师父)---which means  teacher.  Show respect with a proper bow.",
    "Greet all guests with proper etiquette.",
    "Present a bow when you enter the studio and before leaving the studio.",
    "Bow to Shi Fu when class begins and at the end of the class.",
    "Keep your school clean by picking up your belongings before you leave.  Put any borrowed school items back to their proper place.",
    "Do not talk in a loud voice when you are in the studio.",
    "Shi Fu(师父) is the only person who is allowed to provide instructions to students.  No one else is allowed to teach in the studio.",
    "You must let Shi Fu know when you have to leave the training area before the end of class or to take care of personal business.  You must let Shi Fu know when you return the training area.",
    "When you can not perform some exercises, please ask Shi Fu to provide you with other forms of exercises instead.",
    "Shaolin Traditional Kung Fu reserves the rights of not offering services.",
    "Should you have any questions, opinions, comments regarding training, management or any issues concerning Shaolin Traditional Kung Fu please talk to the office manager to discuss the issues.  Shi Fu is only responsible for teaching Kungfu",
    "For students to maintain the rights for making up lost classes, please contact Shaolin Traditional Kung Fu at least 24 hours in advance, when you can not attend classes. Shaolin Traditional Kung Fu will take it into account if it is an emergency."
  ];

  const goals = [
    {
      title: "Improve students’ physical strength",
      description: "Practicing various Shaolin Kungfu movements helps to improve muscle coordination, flexibility, and strength, leading to improved health."
    },
    {
      title: "Develop the mind",
      description: "Practicing Shaolin Kungfu positively stimulates the mind, helping concentration, encouraging creativity, and reducing stress."
    },
    {
      title: "Improve problem solving ability",
      description: "Practicing Shaolin Kungfu requires patience and the ability to find ways to overcome difficulties, inspiring students to reach for higher goals in their lives."
    },
    {
      title: "Respect for others",
      description: "Practicing Shaolin Kungfu emphasizes the importance of respecting teachers, parents, friends, and others."
    },
    {
      title: "Building Confidence",
      description: "It is very important for children to have confidence when handling issues in their daily lives, especially issues pertaining to school and family. Practicing Shaolin Kungfu unquestionably improves all practitioners’ stress and confidence levels."
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
