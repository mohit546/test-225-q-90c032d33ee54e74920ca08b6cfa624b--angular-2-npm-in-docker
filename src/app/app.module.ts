import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SegmentVideoComponent } from './segment-video/segment-video.component';
import { CombineVideoComponent } from './combine-video/combine-video.component';

import { ApiService } from "./_services/api.service";
import { Utils } from "./_helpers/utils";
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
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
