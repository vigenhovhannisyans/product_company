import { Injectable } from '@angular/core';
import {ProjectI} from "../interfaces/project-i";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: ProjectI[] =[
    {
      id: 1,
      iconUrl: '../../../../assets/images/icons/project-logo.png',
      title: 'Way Finder',
      routerPath: 'system/projects/project'
    },
    {
      id: 2,
      iconUrl: '../../../../assets/images/icons/project-logo.png',
      title: 'Internal Project',
      routerPath: '/system/projects/project'
    },
    {
      id: 3,
      iconUrl: '../../../../assets/images/icons/project-logo.png',
      title: 'Bitly Landing',
      routerPath: '/system/projects/project'
    },
  ];
  constructor() { }

  getAllProjects(): ProjectI[]{

    return this.projects;
  }

  getProjectById(id: number): ProjectI{
    console.log(typeof id);
    return this.projects.filter(project => project.id === id)[0];
  }
}
