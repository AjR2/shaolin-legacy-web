
import React from "react";
import WisdomCard from "./WisdomCard";
import { WisdomSection } from "./WisdomTabs";

interface BaDuanJinTabProps {
  section: WisdomSection;
}

const BaDuanJinTab = ({ section }: BaDuanJinTabProps) => {
  return (
    <div className="space-y-8">
      {section.content.map((item, idx) => (
        <WisdomCard
          key={idx}
          item={item}
          renderMedia={() => (
            item.image && (
              <img
                src={item.image}
                alt={`${item.title}`}
                className="w-full rounded-md object-cover shadow-md h-64"
              />
            )
          )}
        />
      ))}
    </div>
  );
};

export default BaDuanJinTab;
