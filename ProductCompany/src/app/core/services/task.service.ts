import {Injectable} from '@angular/core';
import {TaskI} from "../interfaces/task-i";
import {TaskStatusE} from "../enums/task-status-e";
import {ComplexityE} from "../enums/complexityE";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  filteredTask!: TaskI[];
  constructor() {
  }

  tasks: TaskI[] = [
    {
      id: 1,
      title: 'Copy for Onboarding Screens',
      description: 'Engaging and welcoming tone of voice for new and existing users',
      attachedCount: 41,
      category: ['Copy Writing'],
      date: new Date(),
      employeeId: 1,
      status: TaskStatusE.TO_DO,
      taskImageURL: '../../../../../../../assets/images/icons/task-img.svg',
      complexity: ComplexityE.HARD
    },
    {
      id: 2,
      title: 'Overview created tasks',
      description: 'Lorem Ipsum Dolor',
      attachedCount: 41,
      category: ['Overview'],
      date: new Date(),
      employeeId: 1,
      status: TaskStatusE.TO_DO,
      complexity: ComplexityE.EASY
    }
  ];


  createTask(task: TaskI): void {
    this.tasks.unshift(task);
  };

  deleteDask(taskId: number): void {
    this.tasks.forEach((elem, index) => {
      if (elem.id === taskId) this.tasks.splice(index, 1)
    })
  };

  getTasksByStatus(status: TaskStatusE) {
    switch (status) {
      case TaskStatusE.TO_DO:
        this.filteredTask = this.getTaskByStatus(status);
        break;
      case TaskStatusE.IN_PROGRESS:
        console.log('in progress');
        break;
      case TaskStatusE.REVIEW:
        console.log('under review');
        break;
      case TaskStatusE.DONE:
        console.log('done');
    }
    return this.filteredTask
  }

  getTaskByStatus(status: TaskStatusE): TaskI[]{
    return this.tasks.filter(task => task.status === status)
  }
}
