import { Component, OnInit } from '@angular/core';

export type tweet = {
  message: string;
  user: string;
  avatarUrl: string;
};

@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

  newTweetText: string = '';
  tweets: tweet[];

  constructor() {
    this.tweets =  this.tweets = [
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
      },
      {
        message: "Message Nummer4",
        user: "User Nummer4",
        avatarUrl: "https://picsum.photos/100?random=4"
      }
    ];
  }

  ngOnInit(): void {
  }

  onPost() {
    this.tweets.push({
      message: this.newTweetText,
      user: 'Ich',
      avatarUrl: "https://picsum.photos/100?random=" + this.tweets.length + 1
    });
    this.newTweetText = '';
  }
}
