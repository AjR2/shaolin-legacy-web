
export interface Class {
  id: string;
  name: string;
  time: string;
  day: string;
  level: string;
  instructor: string;
}

export interface Attendance {
  id: string;
  class_id: string;
  attended: boolean;
  attended_date?: string;
}
