import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  userForm: FormGroup;
  constructor(private mainService : MainServiceService, private router : Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  formSubmitHandler(){
    console.log('submitted form : ', this.userForm.value);
    this.router.navigate(['buisness-you-own', '4']);
    // this.mainService.signInUser(this.userForm.value).subscribe(res => {
    //   console.log("res : ", res);
    // })
  }

}
