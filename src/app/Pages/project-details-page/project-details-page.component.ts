import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css']
})
export class ProjectDetailsPageComponent implements OnInit {
  project;
  constructor(private route : ActivatedRoute, private mainService : MainServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainService.getProject(params['id']).subscribe(res => {
        this.project = res;
        console.log("this.project : ", this.project)
      })
    })
  }

}
