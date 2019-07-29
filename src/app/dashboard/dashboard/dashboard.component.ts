import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  AfterViewInit,
} from '@angular/core';

import { tap } from 'rxjs/operators';

import { Track } from '../models/track';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';
import { Item } from '../models/item';
import { dashboardCards } from '../dashboard-cards';
import { DashboardCardContainer } from '../dashboard-card/dashboard-card.container';
import { DashboardCards } from '../dashboard-cards.enum';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;

  tracks: Array<Track> = [];

  constructor(
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardService.tracks$
      .pipe(
        tap(tracks => (this.tracks = tracks))
        /* Make sure to unsubscribe! */
      )
      .subscribe(() => {
        this.cd.detectChanges();
        this.loadContents();
      });
  }

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

  changed = (items: Array<Item>, trackIndex: number) => {
    const state = this.tracks;
    state[trackIndex].items = items as Array<Item>;
    this.dashboardService.setState(state);
  };
}
