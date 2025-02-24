
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AttendanceData } from "@/types/admin";

interface AttendanceTableProps {
  attendanceData: AttendanceData[];
}

export const AttendanceTable = ({ attendanceData }: AttendanceTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Email</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Day</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Attended</TableHead>
            <TableHead>Last Attendance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendanceData.map((record, index) => (
            <TableRow key={`${record.user_id}-${record.class_name}-${index}`}>
              <TableCell>{record.user_email}</TableCell>
              <TableCell>{record.class_name}</TableCell>
              <TableCell>{record.day}</TableCell>
              <TableCell>{record.time}</TableCell>
              <TableCell>{record.status}</TableCell>
              <TableCell>{record.attended ? "Yes" : "No"}</TableCell>
              <TableCell>
                {record.attended_date 
                  ? new Date(record.attended_date).toLocaleDateString() 
                  : "Never"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
