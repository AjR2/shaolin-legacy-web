
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HistoryPeriod } from "@/types/schedule";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TempleHistoryProps {
  historyData: HistoryPeriod[];
}

export const TempleHistory = ({ historyData }: TempleHistoryProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      {historyData.map((period, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-semibold">
            <div className="flex items-center gap-4">
              {period.photo && (
                <Avatar className="h-10 w-10 border border-muted">
                  <AvatarImage src={period.photo} alt={period.period} />
                  <AvatarFallback>{period.period.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <span>{period.period}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {period.photo && (
                <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={period.photo}
                    alt={period.period}
                    className="rounded-md max-w-full h-auto shadow-sm"
                  />
                </div>
              )}
              <div className={period.photo ? "md:w-3/4" : "w-full"}>
                {period.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
