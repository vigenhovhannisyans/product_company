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
    fromEvent(draggedBlock, 'mouseup').subscribe((mouseUp) => {
      this.taskBlock.forEach(elem => {
        fromEvent(elem.nativeElement, 'mouseover').pipe(
          takeUntil(this.mouseOutSubject$)
        ).subscribe((res: MouseEvent | any) => {
          console.log('jocooo')
          const toElement = res.toElement.getBoundingClientRect();
          res.fromElement.style.transform = `translate(${toElement.x  - 243}px,${toElement.y -89}px)`;
          this.mouseOutSubject$.next(true)
        })
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
