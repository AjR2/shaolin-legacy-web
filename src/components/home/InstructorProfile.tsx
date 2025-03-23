
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InstructorProfileProps {
  name: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  bio: string;
}

const InstructorProfile = ({
  name,
  title,
  imageUrl,
  imageAlt,
  bio,
}: InstructorProfileProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-64 object-cover object-top rounded-lg"
          />
        </div>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default InstructorProfile;
