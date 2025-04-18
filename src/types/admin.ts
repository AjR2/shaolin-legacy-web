
export interface AttendanceData {
  user_id: string;
  user_email: string;
  class_name: string;
  day: string;
  time: string;
  attended: boolean;
  attended_date: string | null;
  status: string;
}

export interface AttendanceRecord {
  id: string;
  user_id: string;
  status: string;
  attended: boolean;
  attended_date: string | null;
  classes: {
    name: string;
    day: string;
    time: string;
  };
}

export interface AdminUser {
  id: string;
  email: string;
}
