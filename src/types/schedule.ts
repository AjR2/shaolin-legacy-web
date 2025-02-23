
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
  attendance_dates?: string[];
}

export interface ClassAttendance {
  id: string;
  attendance_id: string;
  attended_at: string;
}
