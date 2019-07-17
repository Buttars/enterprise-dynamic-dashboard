import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';

@NgModule({
  declarations: [DashboardComponent, DashboardOutletDirective],
  imports: [CommonModule],
})
export class DashboardModule {}
