import {AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appLike]'
})
export class LikeDirective implements OnChanges {

  @Input('appLike') appLike = false;

  constructor(private el: ElementRef) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.appLike) {
      const div = this.el.nativeElement.children[0];
      if (div) {
        const image = document.createElement('img');
        image.setAttribute('src', 'assets/heart.png');
        image.style.width = "22px";
        image.style.height = "22px";
        image.style.position = "absolute";
        image.style.right = "5px";
        image.style.top = "5px";
        div.append(image);
      }
    }
  }

}
