import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  pageTitle: string = '';
  authorName: MetaDefinition = {
    name: 'author',
    content: 'AcarMeel'
  };
  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta) {

      this.getRouteData().subscribe(data => {
        this.pageTitle = data.pageName;
        this.title.setTitle(this.pageTitle);
        this.meta.updateTag(this.authorName);
        console.log(data);
      });
  }

  getRouteData() {
    return this.router.events
          .filter(event => event instanceof ActivationEnd )
          .filter((event: ActivationEnd) => event.snapshot.firstChild === null)
          .map((event: ActivationEnd) => event.snapshot.data);
  }

  ngOnInit() {
  }

}
