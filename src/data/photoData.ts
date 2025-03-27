
import { Photo } from "./mediaTypes";
import { studentPhotos } from "./photos/students";
import { masterPhotos } from "./photos/masters";
import { classPhotos } from "./photos/classes";
import { performancePhotos } from "./photos/performance";
import { meditationPhotos } from "./photos/meditation";
import { buddhasBirthdayPhotos } from "./photos/buddhasBirthday";
import { kungfuPhotos } from "./photos/kungfu";

// Combine all photo categories into a single array
export const photos: Photo[] = [
  ...studentPhotos,
  ...masterPhotos,
  ...classPhotos,
  ...performancePhotos,
  ...meditationPhotos,
  ...buddhasBirthdayPhotos,
  ...kungfuPhotos,
];
