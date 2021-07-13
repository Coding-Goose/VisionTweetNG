import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() color: 'red' | 'blue' = 'blue';

  constructor() { }

  ngAfterViewInit(): void {
    console.log("After View init")
  }

  ngOnDestroy(): void {
    console.log("Destroy")
  }

  ngOnInit(): void {
    console.log("INIT")
  }
}
