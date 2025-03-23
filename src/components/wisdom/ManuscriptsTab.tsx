
import React from "react";
import WisdomCard from "./WisdomCard";
import { WisdomSection } from "./WisdomTabs";

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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {item.images?.map((image, imageIdx) => (
                <div key={imageIdx} className="relative aspect-square">
                  <img
                    src={image}
                    alt={`Manuscript ${imageIdx + 1}`}
                    className="w-full h-full rounded-md object-cover shadow-md"
                  />
                </div>
              ))}
            </div>
          )}
        />
      ))}
    </div>
  );
};

export default ManuscriptsTab;
