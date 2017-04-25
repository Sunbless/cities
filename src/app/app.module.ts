import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AgmCoreModule } from "angular2-google-maps/core";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AgmCoreModule.forRoot({
      apiKey: "YOUR KEY GOES HERE",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
    
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
