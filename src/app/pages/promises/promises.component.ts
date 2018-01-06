import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.execPromise()
      .then( () => console.log('finished'))
      .catch(error => console.error(error));
  }

  ngOnInit() {
  }

  execPromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let counter = 0;
      let _interval = setInterval(() => {
        counter += 1;
        console.log(counter);
        if (counter === 3) {
          resolve();
          clearInterval(_interval);
        }
      }, 1000);
    });
  }

}
