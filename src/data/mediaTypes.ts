
import { LucideIcon } from "lucide-react";

export interface VideoCategory {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface Video {
  title: string;
  description: string;
  videoUrl: string;
  instructor: string;
  level: string;
  duration: string;
  category: string;
}

export interface PhotoCategory {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface Photo {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

export const getEmbedUrl = (url: string) => {
  if (!url) return "";
  
  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1]?.split("&")[0].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  
  if (url.includes("youtube.com/watch")) {
    const id = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  
  return url;
};
