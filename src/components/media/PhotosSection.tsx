
import React, { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import PhotoCard from "./PhotoCard";
import { photoCategories, photos } from "@/data/mediaData";

const PhotosSection = () => {
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>("all");

  const filteredPhotos = activePhotoCategory === "all"
    ? photos
    : photos.filter(photo => photo.category === activePhotoCategory);

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <CategorySidebar
          categories={photoCategories}
          activeCategory={activePhotoCategory}
          setActiveCategory={setActivePhotoCategory}
          title="Photo Categories"
        />
        
        <div className="flex-1">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
