
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LineageMaster } from "@/types/schedule";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LineageMastersProps {
  lineageData: LineageMaster[];
}

export const LineageMasters = ({ lineageData }: LineageMastersProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      {lineageData.map((master, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-semibold">
            <div className="flex items-center gap-4">
              {master.photo && (
                <Avatar className="h-10 w-10 border border-muted">
                  <AvatarImage src={master.photo} alt={master.name} />
                  <AvatarFallback>{master.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <span>
                {master.name} ({master.years})
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <div className="flex flex-col md:flex-row gap-4">
              {master.photo && (
                <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={master.photo}
                    alt={master.name}
                    className="rounded-md max-w-full h-auto shadow-sm"
                  />
                </div>
              )}
              <div className={master.photo ? "md:w-3/4" : "w-full"}>
                {master.description}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
