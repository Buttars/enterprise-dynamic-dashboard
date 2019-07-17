import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDashboardOutlet]',
})
export class DashboardOutletDirective {
  @Input() item;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
