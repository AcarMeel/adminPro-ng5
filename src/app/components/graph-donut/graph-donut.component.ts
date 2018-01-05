import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-donut',
  templateUrl: './graph-donut.component.html',
  styles: []
})
export class GraphDonutComponent implements OnInit {
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
