import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardCardContainer } from './dashboard-card/dashboard-card.container';
import { MatCardModule } from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [DashboardComponent, DashboardOutletDirective, DashboardCardComponent, DashboardCardContainer],
  imports: [CommonModule, MatCardModule, DragulaModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
