import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {tweet, TweetService} from "../../shared/services/tweet.service";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

  username: string = "";
  tweets: tweet[] = [];
  newTweetArea: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(40)
  ]);

  constructor(private tweetService: TweetService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.tweetService.getTweets().then(tweets => this.tweets = tweets);
    this.authService.username$.subscribe(value => {
      this.username = value;
    });
  }

  onPost() {
    this.tweetService.addTweet({
      message: this.newTweetArea.value,
      user: this.username,
      avatarUrl: "https://picsum.photos/100?random=" + this.tweets.length + 1,
      liked: false,
      id: Math.random() * 10
    }).then(el => {
      this.tweets.push(el);
      this.newTweetArea.setValue('');
    });
  }
}
