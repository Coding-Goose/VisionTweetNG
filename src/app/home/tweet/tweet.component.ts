import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent {

  @Input() message = '';
  @Input() user = '';
  @Input() avatarUrl = '';

  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  onXClick() {
    this.onDelete.emit();
  }
}
