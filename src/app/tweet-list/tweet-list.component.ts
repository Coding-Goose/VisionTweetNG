import { Component, OnInit } from '@angular/core';

type tweet = {
  message: string;
  user: string;
  avatarUrl: string;
};


@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent {

  tweets: tweet[];


  constructor() {
    this.tweets = [
      {
        message: "Message Nummer1",
        user: "User Nummer1",
        avatarUrl: "https://picsum.photos/100?random=1"
      },
      {
        message: "Message Nummer2",
        user: "User Nummer2",
        avatarUrl: "https://picsum.photos/100?random=2"
      },
      {
        message: "Message Nummer3",
        user: "User Nummer3",
        avatarUrl: "https://picsum.photos/100?random=3"
      }
    ];
  }


}
