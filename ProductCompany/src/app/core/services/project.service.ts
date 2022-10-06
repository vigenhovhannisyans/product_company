import { Injectable } from '@angular/core';
import {ProjectI} from "../interfaces/project-i";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: ProjectI[] =[
    {
      id: 1,
      iconUrl: '../../../../assets/images/icons/box.svg',
      title: 'Way Finder'
    },
    {
      id: 2,
      iconUrl: '../../../../assets/images/icons/3d-cube-scan.svg',
      title: 'Internal Project'
    },
    {
      id: 3,
      iconUrl: '../../../../assets/images/icons/3d-square.svg',
      title: 'Bitly Landing'
    },
  ];
  constructor() { }

  getAllProjects(): ProjectI[]{

    return this.projects;
  }
}
