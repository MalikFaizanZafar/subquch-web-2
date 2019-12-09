import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css']
})
export class ProjectDetailsPageComponent implements OnInit {
  project;
  constructor(private route : ActivatedRoute, private mainService : MainServiceService, private spinnerService : NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.route.params.subscribe(params => {
      this.mainService.getProject(params['id']).subscribe(res => {
        this.project = res;
        this.spinnerService.hide();
        console.log("this.project : ", this.project)
      })
    })
  }

}
