
import React from "react";
import WisdomCard from "./WisdomCard";
import { WisdomSection } from "@/data/wisdomData";

interface ChuiBaShiFaTabProps {
  section: WisdomSection;
}

const ChuiBaShiFaTab = ({ section }: ChuiBaShiFaTabProps) => {
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
                alt="Shaolin Chui Ba Shi Fa"
                className="w-full rounded-md object-cover shadow-md h-64"
              />
            )
          )}
        />
      ))}
    </div>
  );
};

export default ChuiBaShiFaTab;
