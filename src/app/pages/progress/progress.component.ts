import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  parentLabel: string = 'Parent';
  progress1: number = 12;
  progress2:  number = 93;
  constructor() { }

  ngOnInit() {
  }

 


}
