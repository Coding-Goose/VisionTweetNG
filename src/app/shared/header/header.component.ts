import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  onLogoutClick() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(value => this.loggedIn = value);
  }
}
