import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buisness-you-own-page',
  templateUrl: './buisness-you-own-page.component.html',
  styleUrls: ['./buisness-you-own-page.component.css']
})
export class BuisnessYouOwnPageComponent implements OnInit {

  userProjects = []
  constructor(private mainService : MainServiceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mainService.getBuisnessYouOwn(params['id']).subscribe(res => {
        this.userProjects = res;
        console.log("userProjects : ", this.userProjects);
      })
    })
  }

}
