import { Component, Input, Output, ViewChild, ElementRef, OnInit , EventEmitter} from '@angular/core';

// This is a child component

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: []
})
export class BoosterComponent implements OnInit {
  @ViewChild('progressInput') progressInput: ElementRef;
  @Input() percentage: number = 5;
  @Input() label: string = 'child label';
  @Output() valueChanged: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onChanges(newVal: number) {
    if (newVal >= 100) {
      this.percentage = 100;
    } else if (newVal <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newVal;
    }
    this.progressInput.nativeElement.value = this.percentage;
    this.valueChanged.emit(this.percentage);

  }

  changeVal(n) {
    if (this.percentage >= 100 && n > 0)  {
      return this.percentage = 100;
    } else if (this.percentage <= 0 && n < 0)  {
      return this.percentage = 0;
    } else {
      this.percentage =  this.percentage + n;
      this.valueChanged.emit(this.percentage);
    }
  }

}
