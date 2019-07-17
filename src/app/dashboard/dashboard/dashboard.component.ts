import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  AfterViewInit,
} from '@angular/core';
import { Track } from '../models/track';
import { DashboardOutletDirective } from 'src/app/dashboard-outlet.directive';
import { Item } from '../models/item';
import { dashboardCards } from '../dashboard-cards';
import { DashboardCardContainer } from '../dashboard-card/dashboard-card.container';
import { DashboardCards } from '../dashboard-cards.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;

  tracks: Array<Track> = [
    {
      items: [
        {
          component: DashboardCards.HELLO_WORLD,
          id: 'hello-world',
        },
      ],
    },
    {
      items: [
        {
          component: DashboardCards.HELLO_WORLD,
          id: 'hello-world-2',
        },
      ],
    },
  ];

  constructor(private cd: ChangeDetectorRef, private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadContents();
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  };

  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(dashboardCards[item.component]);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as DashboardCardContainer;
    instance.item = item;
  };
}
