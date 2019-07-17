import { Component } from '@angular/core';
import { DashboardCardContainer } from '../dashboard/dashboard-card/dashboard-card.container';

@Component({
  template: `
    <app-hello-world></app-hello-world>
  `,
})
export class HelloWorldContainer extends DashboardCardContainer {}
