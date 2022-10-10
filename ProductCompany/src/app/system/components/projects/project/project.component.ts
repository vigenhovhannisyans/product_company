import { Component, OnInit } from '@angular/core';
import {PathService} from "../../../../core/services/path.service";
import {ActivatedRoute} from "@angular/router";
import {map, take} from "rxjs/operators";
import {ProjectService} from "../../../../core/services/project.service";
import {ProjectI} from "../../../../core/interfaces/project-i";
import {Observable} from "rxjs";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id!: number;
  projectTitle = '';
  projectPath: Observable<string> = this.pathService.pathStream$;
  project!: ProjectI;
  constructor(
    private pathService: PathService,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService
  ) { }


  ngOnInit(): void {
    this.getQueryParamId();
    this.getProjectById(this.id)
  }

  getQueryParamId(): void{
    this.activatedRoute.queryParams.pipe(
      map(params => params['id']),
      take(1),
    ).subscribe(res => this.id = +res)
  }

  getProjectById(id: number): void{
    this.project =  this.projectService.getProjectById(id);
    this.projectTitle = this.project.title;
  }

}
