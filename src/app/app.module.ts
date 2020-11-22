import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SegmentVideoComponent } from './segment-video/segment-video.component';
import { CombineVideoComponent } from './combine-video/combine-video.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SegmentVideoComponent,
    CombineVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
