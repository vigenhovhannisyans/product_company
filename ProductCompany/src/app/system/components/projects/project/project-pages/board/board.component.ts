import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {fromEvent, exhaustMap, takeUntil} from 'rxjs';
import {Subject} from "rxjs";

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

  constructor() {
  }

  ngOnInit(): void {
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
    fromEvent(draggedBlock, 'mouseup').subscribe(() => {
      this.taskBlock.forEach(elem => {
        fromEvent(elem.nativeElement, 'mouseenter').pipe(
          takeUntil(this.mouseOutSubject$)
        ).subscribe((res: MouseEvent | any) => {
          console.log(res, 'aaa');
          this.mouseOutSubject$.next(true)
        })
      })
    })
  }
}
