import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldContainer } from './hello-world/hello-world.container';
import { DashboardModule } from './dashboard/dashboard.module';
import { HelloWorldTwoContainer } from './hello-world/hello-world-two.container';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, HelloWorldContainer, HelloWorldTwoContainer],
  imports: [BrowserModule, BrowserAnimationsModule, DashboardModule, DragulaModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloWorldContainer, HelloWorldTwoContainer],
})
export class AppModule {}
