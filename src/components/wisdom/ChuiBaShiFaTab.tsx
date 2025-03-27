
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
              <div className="relative">
                <img
                  src={item.image}
                  alt="Shaolin Chui Ba Shi Fa"
                  className="w-full rounded-md object-cover shadow-md"
                  style={{ height: "auto", maxHeight: "500px" }}
                />
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  Ancient manuscript detailing the Shaolin Chui Ba Shi Fa (Eight Methods of Combat)
                </div>
              </div>
            )
          )}
        />
      ))}
    </div>
  );
};

export default ChuiBaShiFaTab;
