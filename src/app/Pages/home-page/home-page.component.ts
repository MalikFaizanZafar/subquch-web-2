import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  projects: any[]= [];
  constructor(private mainService : MainServiceService, private spinnerService : NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.mainService.getProjects().subscribe(res => {
      this.projects = res.splice(4,3);
      this.spinnerService.hide();
    })
  }

}
