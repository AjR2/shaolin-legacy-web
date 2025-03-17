
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TheoryItem } from "@/types/schedule";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ShaolinTheoryProps {
  theoryContent: TheoryItem[];
}

export const ShaolinTheory = ({ theoryContent }: ShaolinTheoryProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-2">
      {theoryContent.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-lg font-semibold">
            <div className="flex items-center gap-4">
              {item.photo && (
                <Avatar className="h-10 w-10 border border-muted">
                  <AvatarImage src={item.photo} alt={item.title} />
                  <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <span>{item.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <div className="flex flex-col md:flex-row gap-4">
              {item.photo && (
                <div className="md:w-1/4 flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="rounded-md max-w-full h-auto shadow-sm"
                  />
                </div>
              )}
              <div className={item.photo ? "md:w-3/4" : "w-full"}>
                {Array.isArray(item.content) ? (
                  item.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
