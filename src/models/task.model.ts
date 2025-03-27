export interface Task {
  id: number;
  name: string;
  description: string;
  avatar: string;
  userId: number;
  workerId: number;
  format: "todo" | "progress" | "done";
  type: string;
}
