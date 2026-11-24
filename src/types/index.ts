export type Role="Admin"|"Principal"|"Teacher"|"Accountant"|"Parent"|"Student";
export type Student={id:number;name:string;roll:string;grade:string;section:string;fee:"Paid"|"Due"};
export type Teacher={id:number;name:string;subject:string};
export type AttendanceStatus="Present"|"Absent"|"Late"|"Leave"|"Half Day";
export type StaffRecord={teacher:string;mode:string;time:string;photo?:string};