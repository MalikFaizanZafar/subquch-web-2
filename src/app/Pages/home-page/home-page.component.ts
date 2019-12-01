import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  projects: any[]= [];
  constructor(private mainService : MainServiceService) { }

  ngOnInit() {
    this.mainService.getProjects().subscribe(res => {
      this.projects = res.splice(4,3);
      console.log('projects are : ', this.projects)
    })
  }

}
