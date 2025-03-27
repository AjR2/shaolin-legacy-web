
import React, { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import VideoCard from "./VideoCard";
import { videoCategories, tutorialVideos, getEmbedUrl } from "@/data/mediaData";

const VideosSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredVideos = activeCategory === "all"
    ? tutorialVideos
    : tutorialVideos.filter(video => video.category === activeCategory);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <CategorySidebar
          categories={videoCategories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          title="Video Categories"
        />
        
        <div className="flex-1">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <VideoCard 
                key={index} 
                video={video} 
                getEmbedUrl={getEmbedUrl} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
