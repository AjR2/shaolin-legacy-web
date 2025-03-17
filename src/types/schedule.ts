
export interface Class {
  id: string;
  name: string;
  time: string;
  day: string;
  level?: string; // Make level optional since it's not in the database
  instructor: string;
}

export interface Attendance {
  id: string;
  class_id: string;
  attended: boolean;
  attended_date?: string;
  status: string;
}

export interface LineageMaster {
  name: string;
  years: string;
  description: string;
  photo?: string; // Optional photo URL
}

export interface HistoryPeriod {
  period: string;
  description: string[];
  photo?: string; // Optional photo URL
}

export interface TheoryItem {
  title: string;
  content: string | string[];
  photo?: string; // Optional photo URL
}
