import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  userForm: FormGroup;
  constructor(private mainService : MainServiceService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      phone : new FormControl(),
      password: new FormControl()
    });
  }


  formSubmitHandler(){
    console.log("userForm : ", this.userForm.value);
    this.mainService.signUpUser(this.userForm.value).subscribe(res => {
      console.log("res : ", res );
    })
  }

}
