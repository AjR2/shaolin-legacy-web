
import React from "react";
import WisdomCard from "./WisdomCard";
import { WisdomSection } from "@/data/wisdomData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

interface ManuscriptsTabProps {
  section: WisdomSection;
}

const ManuscriptsTab = ({ section }: ManuscriptsTabProps) => {
  return (
    <div className="space-y-8">
      {section.content.map((item, idx) => (
        <WisdomCard
          key={idx}
          item={item}
          renderMedia={() => (
            item.images && item.images.length > 0 ? (
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {item.images.map((image, imageIdx) => (
                      <CarouselItem key={imageIdx}>
                        <Card className="overflow-hidden">
                          <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
                            <img
                              src={image}
                              alt={`Ancient Shaolin Manuscript ${imageIdx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                    <CarouselPrevious className="relative pointer-events-auto" />
                    <CarouselNext className="relative pointer-events-auto" />
                  </div>
                </Carousel>
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  Swipe or use arrows to navigate through the manuscript collection
                </div>
              </div>
            ) : null
          )}
        />
      ))}
    </div>
  );
};

export default ManuscriptsTab;
