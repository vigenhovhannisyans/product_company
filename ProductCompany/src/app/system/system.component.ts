import { Component, OnInit } from '@angular/core';
import {PathService} from "../core/services/path.service";

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  isShowNavBar = false;
  constructor(
    private pathService: PathService,
  ) { }

  ngOnInit(): void {
    this.pathService.addPath('system')
  }

  showAndHideNavBar(event: boolean) {
    this.isShowNavBar = event;
  }
}
