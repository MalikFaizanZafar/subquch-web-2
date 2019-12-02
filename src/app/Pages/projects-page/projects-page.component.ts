import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  projects: any[]= [];
  constructor(private mainService : MainServiceService) { }

  ngOnInit() {
    this.mainService.getProjects().subscribe(res => {
      this.projects = res;
      console.log('projects are : ', this.projects)
    })
  }

}
