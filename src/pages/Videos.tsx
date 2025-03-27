
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideosSection from "@/components/media/VideosSection";
import PhotosSection from "@/components/media/PhotosSection";

const Videos = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Media Gallery</h1>
      
      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>

        <TabsContent value="videos">
          <VideosSection />
        </TabsContent>

        <TabsContent value="photos">
          <PhotosSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Videos;
