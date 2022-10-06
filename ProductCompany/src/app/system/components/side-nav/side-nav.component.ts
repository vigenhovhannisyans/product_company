import {Component, Input, OnInit} from '@angular/core';
import {SidenavRoutes} from './sidenav-routes'
import {RouteI} from "../../../core/interfaces/route-i";
import {ProjectI} from "../../../core/interfaces/project-i";
import {ProjectService} from "../../../core/services/project.service";
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() myTasks = 7;
  @Input() activity = 5;
  @Input() messages = 5;
  @Input() recentProjects!: ProjectI[];
  routes: RouteI[] = SidenavRoutes;
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void{
    this.recentProjects = this.projectService.getAllProjects()
  }

}
