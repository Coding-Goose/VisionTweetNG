import {Component, Input} from '@angular/core';
import {tweet, TweetService} from "../../shared/services/tweet.service";

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent {

  @Input() tweets: tweet[] = [];

  einDate = new Date();

  constructor(private tweetService: TweetService) {
  }


  deleteTweet(tweet: tweet): void {
    this.tweetService.deleteTweet(tweet.id).then(_ => {
      this.tweets.splice(this.tweets.indexOf(tweet), 1);
    });
  }
}
