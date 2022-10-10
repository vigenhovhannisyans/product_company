import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {exhaustMap, fromEvent, Subject, takeUntil} from 'rxjs';
import {TaskService} from "../../../../../../core/services/task.service";
import {TaskStatusE} from "../../../../../../core/enums/task-status-e";
import {TaskI} from "../../../../../../core/interfaces/task-i";
import {ComplexityE} from "../../../../../../core/enums/complexityE";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChildren('task') task!: QueryList<ElementRef>;
  @ViewChild('board') board!: ElementRef;
  @ViewChildren('taskBlock') taskBlock!: QueryList<ElementRef>;
  mouseOutSubject$ = new Subject<boolean>();
  toDoTasks!: TaskI[];
  complexity!: ComplexityE;
  selectedOption!: number;

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.fetchTasks()
  }

  ngAfterViewInit(): void {
    this.dragTask();
  }

  dragTask(): void {
    this.task.forEach(blocks =>
      fromEvent(blocks.nativeElement, 'mousedown')
        .pipe(
          exhaustMap(() =>
            fromEvent(this.board.nativeElement, 'mousemove').pipe(
              takeUntil(fromEvent(this.board.nativeElement, 'mouseup')),
            )
          )
        ).subscribe((event: MouseEvent | any) => {
        this.detectMouseUp(blocks);
        this.board.nativeElement.append(blocks.nativeElement);
        blocks.nativeElement.style = `
          position: absolute;
          top: 0;
          left: 0;
          transform:translate3d(${event.pageX - 250}px, ${event.pageY - 100}px,0);
      `;
      }),
    );
  }

  detectMouseUp(block: ElementRef): void {
    const draggedBlock = block.nativeElement;
    fromEvent(draggedBlock, 'mouseup').pipe(
      takeUntil(this.mouseOutSubject$)
    ).subscribe((res: MouseEvent | any) => {
      this.mouseOutSubject$.next(true);
      this.taskBlock.forEach(taskBlock => {
        if(res.screenX >= 280 && res.screenX<=620){
            console.log('inside of to do')
        }else if(res.screenX >= 685 && res.screenX<=1070) {
          console.log('inside of in progress')
        }else if(res.screenX >= 1100 && res.screenX<=1474){
          console.log('inside of under review')
        }else if(res.screenX>=1496 && res.screenX <=1880) {
          console.log('inside of done')
        }

      })
    })
  }

  fetchTasks(): void {
    this.toDoTasks = this.taskService.getTasksByStatus(TaskStatusE.TO_DO);
  }

  public get getComplexityStatus(): typeof ComplexityE {
    return ComplexityE
  }

  showAndHideEditBlock(event: MouseEvent, id: number) {
    event.stopPropagation();
    this.selectedOption = id;
  }

  editTask(task: TaskI) {
    console.log('edit', task)
  }

  removeTask(task: TaskI) {
    console.log('remove', task)
  }

  onClickedOutside() {
    this.selectedOption = -1
  }
}
