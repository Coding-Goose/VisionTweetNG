import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TweetContainerComponent } from './home/tweet-container/tweet-container.component';
import { TweetListComponent } from './home/tweet-list/tweet-list.component';
import { TweetComponent } from './home/tweet/tweet.component';
import { ButtonComponent } from './shared/button/button.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LeftContainerComponent } from './login/left-container/left-container.component';
import { RightContainerComponent } from './login/right-container/right-container.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LikeDirective } from './shared/directives/like.directive';
import { RalfPipe } from './shared/directives/ralf.pipe';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetContainerComponent,
    TweetListComponent,
    TweetComponent,
    ButtonComponent,
    LoginPageComponent,
    LeftContainerComponent,
    RightContainerComponent,
    LoginFormComponent,
    LikeDirective,
    RalfPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'home',
        component: TweetContainerComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
