import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy {
      
  order = 1;
  @Input() footerText;
  @Input() numberOfItems: number;

  constructor() {
    console.log('I am from LifecycleComponent constructor()!!');
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.order++;
  }

  ngOnInit() {
    this.order++;
  }

  ngDoCheck() {
    this.order++;
  }

  ngAfterContentInit() {
    this.order++;
  }

  ngAfterContentChecked() {
    this.order++;
  }

  ngAfterViewInit() {
    this.order++;
  }

  ngAfterViewChecked() {
    this.order++;
  }

  ngOnDestroy() {
    this.order++;
  }
}
