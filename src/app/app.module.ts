import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldContainer } from './hello-world/hello-world.container';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HelloWorldContainer],
  imports: [BrowserModule, DashboardModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloWorldContainer],
})
export class AppModule {}
