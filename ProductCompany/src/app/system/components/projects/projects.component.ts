import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../core/services/project.service";
import {ProjectI} from "../../../core/interfaces/project-i";
import {PathService} from "../../../core/services/path.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects!: ProjectI[];
  constructor(
    private projectsService: ProjectService,
    private pathService: PathService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects(): void{
    this.allProjects = this.projectsService.getAllProjects()
  }

  addProjectName(title: string, routerLink: string, id: number) {
    this.pathService.pathStream$.next('projects / ' + title)
    this.router.navigate([routerLink], {queryParams:{id: id}})
  }
}
