import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MainServiceService } from "src/app/Services/main-service.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.css"]
})
export class ProjectsPageComponent implements OnInit {
  projects: any[] = [];
  categories: any[] = [];
  @ViewChild("searchInput", { static: true }) searchInput: ElementRef;
  @ViewChild("minInput", { static: true }) minInput: ElementRef;
  @ViewChild("maxInput", { static: true }) maxInput: ElementRef;

  constructor(private mainService: MainServiceService, private spinnerService : NgxSpinnerService) {}

  ngOnInit() {
    this.spinnerService.show();
    this.mainService.getCategories().subscribe(catRes => {
      this.mainService.getProjects().subscribe(res => {
        this.categories = catRes;
        this.projects = res;
        this.spinnerService.hide();
      });
    })
  }

  searchHandler() {
    this.mainService
      .getSearchedProjects(this.searchInput.nativeElement.value)
      .subscribe(res => {
        this.projects = res;
        this.searchInput.nativeElement.value = '';
      });
  }

  viewAllHandler() {
    this.mainService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }

  goHandler(){
    this.mainService.getFilteredProjects(this.minInput.nativeElement.value, this.maxInput.nativeElement.value).subscribe(res => {
      this.projects = res;
      this.minInput.nativeElement.value = '';
      this.maxInput.nativeElement.value = '';
    })
  }
}
