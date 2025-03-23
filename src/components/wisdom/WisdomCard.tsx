
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { WisdomSectionContent } from "@/data/wisdomData";

interface WisdomCardProps {
  item: WisdomSectionContent;
  renderMedia: () => React.ReactNode;
}

const WisdomCard = ({ item, renderMedia }: WisdomCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {item.summaryCard ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              The Ba Duan Jin (Eight Pieces of Brocade) is a set of eight exercises that dates back to the 12th century. These gentle movements improve health, strengthen the body, and promote longevity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.steps?.map((step, stepIdx) => (
                <div key={stepIdx} className="flex items-center gap-2">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">{stepIdx + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <div className={`${item.images && item.images.length > 0 ? 'md:w-1/2' : 'md:w-1/3'} flex-shrink-0`}>
              {renderMedia()}
            </div>
            <div className={`${item.images && item.images.length > 0 ? 'md:w-1/2' : 'md:w-2/3'} space-y-4`}>
              {item.text.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WisdomCard;
