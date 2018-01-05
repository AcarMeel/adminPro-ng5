import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-donut',
  templateUrl: './graph-donut.component.html',
  styles: []
})
export class GraphDonutComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
