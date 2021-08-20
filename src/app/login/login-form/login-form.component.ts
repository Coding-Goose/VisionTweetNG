import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm: FormGroup;


  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      dsgvo: new FormControl(false, [Validators.requiredTrue])
    });
  }


  onLogin() {
    alert("You just logged in!");
  }

  onTest() {
    console.log(this.loginForm);
  }
}
