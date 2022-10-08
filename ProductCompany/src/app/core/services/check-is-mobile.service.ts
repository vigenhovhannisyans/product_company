import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckIsMobileService {
  isMobileStream$ = new Subject<boolean>();
  constructor() {}

  isMobile(): boolean{
    let isMobile = false;
    this.isMobileStream$.subscribe(res => isMobile = res);
    if(window.innerWidth <= 991){
      this.isMobileStream$.next(true);
    }else{
      this.isMobileStream$.next(false);
    }
    return isMobile
  }
}
