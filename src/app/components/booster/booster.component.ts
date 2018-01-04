import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: []
})
export class BoosterComponent implements OnInit {
  @Input() percentage: number = 5;
  @Input() label: string = 'child label';
  constructor() { }

  ngOnInit() {
  }

  changeVal(n) {
    if (this.percentage >= 100 && n > 0)  {
      return this.percentage = 100;
    } else if (this.percentage <= 0 && n < 0)  {
      return this.percentage = 0;
    } else {
      this.percentage =  this.percentage + n;
    }
  }

}
