import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';

const appRoutes: Routes = [
  { path: 'view1', component: FirstViewComponent },
  {path: 'view2', component: SecondViewComponent},
  {path: '', redirectTo: 'view1', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SecondViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
