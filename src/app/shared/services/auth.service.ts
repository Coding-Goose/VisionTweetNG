import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  username$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private router: Router) { }

  login(email: string) {
    this.router.navigateByUrl("home");
    const username = email.substr(0, email.indexOf("@"));
    console.log("username", username);
    this.username$.next(username);
    this.loggedIn$.next(true);
  }

  logout() {
    this.loggedIn$.next(false);
    this.username$.next("");
    this.router.navigateByUrl("login");
  }
}
