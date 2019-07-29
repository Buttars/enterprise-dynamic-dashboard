import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';
import { HelloService } from '../hello.service';

@Component({
  template: `
    <app-hello-world [name]="name"></app-hello-world>
  `,
})
export class HelloWorldTwoContainer extends DashboardCardContainer {
  name;

  constructor(private helloWorldService: HelloService) {
    super();
    this.name = helloWorldService.names[1];
  }
}
