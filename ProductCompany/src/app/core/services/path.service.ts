import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PathService {
  pathStream$ = new Subject<string>();
  constructor() { }

  addPath(path: string): void{
    this.pathStream$.next(path);
  }

  getPath(): string{
    let path = '';
    this.pathStream$.subscribe(result => path += result );
    return path
  }
}
