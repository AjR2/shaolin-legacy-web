
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineageMasters } from "@/components/lineage/LineageMasters";
import { TempleHistory } from "@/components/lineage/TempleHistory";
import { ShaolinTheory } from "@/components/lineage/ShaolinTheory";
import { 
  lineageData, 
  historyData, 
  theoryContent 
} from "@/components/lineage/LineageData";

const Lineage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Shaolin Legacy</h1>
      
      <Tabs defaultValue="lineage" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lineage">Lineage</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="theory">Theory</TabsTrigger>
        </TabsList>

        <TabsContent value="lineage">
          <Card>
            <CardHeader>
              <CardTitle>Our Shaolin Lineage</CardTitle>
              <CardDescription>A tradition passed down through generations</CardDescription>
            </CardHeader>
            <CardContent>
              <LineageMasters lineageData={lineageData} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Shaolin Temple History</CardTitle>
              <CardDescription>The evolution of Shaolin through the ages</CardDescription>
            </CardHeader>
            <CardContent>
              <TempleHistory historyData={historyData} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="theory">
          <Card>
            <CardHeader>
              <CardTitle>Shaolin Theory</CardTitle>
              <CardDescription>Understanding the philosophical foundations of Shaolin practice</CardDescription>
            </CardHeader>
            <CardContent>
              <ShaolinTheory theoryContent={theoryContent} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Lineage;
