
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Photo } from "@/data/mediaData";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="w-full h-64 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{photo.title}</CardTitle>
        <CardDescription>{photo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Captured: {photo.date}
        </p>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
