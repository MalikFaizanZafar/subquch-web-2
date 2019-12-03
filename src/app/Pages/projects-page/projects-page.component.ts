import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MainServiceService } from "src/app/Services/main-service.service";

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.css"]
})
export class ProjectsPageComponent implements OnInit {
  projects: any[] = [];

  @ViewChild("searchInput", { static: true }) searchInput: ElementRef;

  constructor(private mainService: MainServiceService) {}

  ngOnInit() {
    this.mainService.getProjects().subscribe(res => {
      this.projects = res;
    });
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
}
