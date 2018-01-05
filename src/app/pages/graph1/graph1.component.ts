import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: []
})
export class Graph1Component implements OnInit {
  graphs: any = {
    'graph1': {
      'labels': ['Death Note', 'Sakura', 'Digimon'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'label': 'Most seen anime'
    },
    'graph2': {
      'labels': ['Male', 'Female'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'label': 'Which characters are more popular in anime?'
    },
    'graph3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'label': 'Is anime popular around the world?'
    },
    'graph4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'label': 'Do you like anime?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
