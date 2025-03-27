
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "@/data/mediaData";

interface VideoCardProps {
  video: Video;
  getEmbedUrl: (url: string) => string;
}

const VideoCard = ({ video, getEmbedUrl }: VideoCardProps) => {
  return (
    <Card className="flex flex-col">
      <div className="aspect-video w-full bg-temple-100">
        <iframe
          src={getEmbedUrl(video.videoUrl)}
          title={video.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{video.title}</CardTitle>
        <CardDescription>{video.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 mt-auto">
        <div className="flex justify-between text-sm text-temple-600">
          <span>Instructor: {video.instructor}</span>
          <span>Duration: {video.duration}</span>
        </div>
        <div className="inline-block px-2 py-1 bg-temple-100 text-temple-800 text-sm rounded">
          {video.level}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
