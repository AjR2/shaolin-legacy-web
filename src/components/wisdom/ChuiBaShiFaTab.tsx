
import React from "react";
import WisdomCard from "./WisdomCard";
import { WisdomSection } from "@/data/wisdomData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ChuiBaShiFaTabProps {
  section: WisdomSection;
}

const ChuiBaShiFaTab = ({ section }: ChuiBaShiFaTabProps) => {
  const [isImageOpen, setIsImageOpen] = React.useState(false);

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
                  className="w-full rounded-md object-cover shadow-md cursor-pointer transition-all hover:opacity-90"
                  style={{ height: "auto", maxHeight: "500px" }}
                  onClick={() => setIsImageOpen(true)}
                />
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  Ancient manuscript detailing the Shaolin Chui Ba Shi Fa (Eight Methods of Combat)
                </div>
                
                <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )
          )}
        />
      ))}
    </div>
  );
};

export default ChuiBaShiFaTab;
