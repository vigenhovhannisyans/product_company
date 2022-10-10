import {TaskStatusE} from "../enums/task-status-e";
import {ComplexityE} from "../enums/complexityE";

export interface TaskI {
  id: number;
  title: string;
  description: string;
  date: Date;
  attachedCount: number;
  category: string[];
  employeeId: number;
  status: TaskStatusE;
  taskImageURL?: string;
  complexity: ComplexityE;
}
