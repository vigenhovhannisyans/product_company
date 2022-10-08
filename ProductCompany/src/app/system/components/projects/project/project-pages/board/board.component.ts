import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {fromEvent, exhaustMap, takeUntil} from 'rxjs';
import {tap} from "rxjs/operators";
import {merge} from "chart.js/types/helpers";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, AfterViewInit {
  @ViewChildren('task') taskBlock!: QueryList<ElementRef>;
  @ViewChildren('blockBody') blockBody!: QueryList<ElementRef>;
  @ViewChild('board') board!: ElementRef;
  @ViewChild('blocker') blocks!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dragTasks()
  }

  dragTasks(): void{
    this.taskBlock.map(blocks =>
      fromEvent(blocks.nativeElement,'mousedown')
        .pipe(
          exhaustMap(() =>
            fromEvent(this.board.nativeElement, 'mousemove').pipe(
              takeUntil(fromEvent(this.board.nativeElement,'mouseup')),
            )
          )
        ).subscribe((event: MouseEvent | any) =>{
        this.board.nativeElement.append(blocks.nativeElement);
        blocks.nativeElement.style =`
          position: absolute;
          top: 0;
          left: 0;
          transform:translate3d(${event.pageX-250}px, ${event.pageY-100}px,0);
      `;
      })
    );
  }


}
