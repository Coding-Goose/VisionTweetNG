import {Component, Input} from '@angular/core';
import {tweet} from "../tweet-container/tweet-container.component";

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent {

  @Input() tweets: tweet[] = [];


  constructor() {
  }


  deleteTweet(index: number): void {
    this.tweets.splice(index, 1);
  }
}
