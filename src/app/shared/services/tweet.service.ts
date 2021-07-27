import { Injectable } from '@angular/core';

export type tweet = {
  message: string;
  user: string;
  avatarUrl: string;
  liked: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  tweets: tweet[];

  constructor() {
    this.tweets =  this.tweets = [
      {
        message: "Message Nummer1",
        user: "User Nummer1",
        avatarUrl: "https://picsum.photos/100?random=1",
        liked: true
      },
      {
        message: "Message Nummer2",
        user: "User Nummer2",
        avatarUrl: "https://picsum.photos/100?random=2",
        liked: false
      },
      {
        message: "Message Nummer3",
        user: "User Nummer3",
        avatarUrl: "https://picsum.photos/100?random=3",
        liked: false
      },
      {
        message: "Message Nummer4",
        user: "User Nummer4",
        avatarUrl: "https://picsum.photos/100?random=4",
        liked: false
      }
    ];
  }

  getTweets(): tweet[] {
    return this.tweets;
  }
}
