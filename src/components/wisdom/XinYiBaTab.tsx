
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

interface XinYiBaTabProps {
  section: WisdomSection;
}

const XinYiBaTab = ({ section }: XinYiBaTabProps) => {
  return (
    <div className="space-y-8">
      {section.content.map((item, idx) => (
        <WisdomCard
          key={idx}
          item={item}
          renderMedia={() => (
            item.images && item.images.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {item.images.map((image, imageIdx) => (
                    <CarouselItem key={imageIdx}>
                      <div className="relative aspect-square p-1">
                        <img
                          src={image}
                          alt={`Xin Yi Ba ${imageIdx + 1}`}
                          className="w-full h-full rounded-md object-cover shadow-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            ) : null
          )}
        />
      ))}
    </div>
  );
};

export default XinYiBaTab;
