import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {tweet, TweetService} from "../../shared/services/tweet.service";


@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

  tweets: tweet[] = [];
  newTweetArea: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(40)
  ]);

  constructor(private tweetService: TweetService) {
  }

  ngOnInit(): void {
    this.tweets = this.tweetService.getTweets();
  }

  onPost() {
    this.tweets.push({
      message: this.newTweetArea.value,
      user: 'Ich',
      avatarUrl: "https://picsum.photos/100?random=" + this.tweets.length + 1,
      liked: false
    });
    this.newTweetArea.setValue('');
  }
}
