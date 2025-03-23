
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
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full object-contain h-64 rounded-lg"
          />
        </div>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default InstructorProfile;
