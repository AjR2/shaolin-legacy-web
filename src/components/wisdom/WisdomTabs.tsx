
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BaDuanJinTab from "./BaDuanJinTab";
import ManuscriptsTab from "./ManuscriptsTab";
import XinYiBaTab from "./XinYiBaTab";
import ChuiBaShiFaTab from "./ChuiBaShiFaTab";
import { wisdomSections } from "@/data/wisdomData";

const WisdomTabs = () => {
  return (
    <Tabs defaultValue="baduanjin" className="space-y-6">
      <TabsList className="flex w-full flex-nowrap overflow-x-auto md:grid md:grid-cols-4">
        {wisdomSections.map((section) => (
          <TabsTrigger key={section.id} value={section.id}>
            <div className="flex items-center gap-2">
              <section.icon className="h-4 w-4" />
              <span>{section.title}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="baduanjin">
        <BaDuanJinTab section={wisdomSections[0]} />
      </TabsContent>
      
      <TabsContent value="manuscripts">
        <ManuscriptsTab section={wisdomSections[1]} />
      </TabsContent>
      
      <TabsContent value="xinyiba">
        <XinYiBaTab section={wisdomSections[2]} />
      </TabsContent>
      
      <TabsContent value="chuibazhifa">
        <ChuiBaShiFaTab section={wisdomSections[3]} />
      </TabsContent>
    </Tabs>
  );
};

export default WisdomTabs;
