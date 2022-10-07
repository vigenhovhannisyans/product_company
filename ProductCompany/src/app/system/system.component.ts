import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  isShowNavBar = false;
  constructor() { }

  ngOnInit(): void {
  }

  showAndHideNavBar(event: boolean) {
    this.isShowNavBar = event;
  }
}
