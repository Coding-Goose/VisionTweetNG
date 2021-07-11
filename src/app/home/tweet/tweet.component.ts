import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {

  @Input() message = '';
  @Input() user = '';
  @Input() avatarUrl = '';

  constructor() { }
}
