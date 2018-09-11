import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatToolbarModule
} from '@angular/material';
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { BeerHeaderComponent } from './beer-header/beer-header.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListCardComponent } from './beer-list-card/beer-list-card.component';
import { BeerPopupDetailsComponent } from './beer-popup-details/beer-popup-details.component';
import { BeerListService } from './beer-list.service';


@NgModule({
  declarations: [
    AppComponent,
    BeerHeaderComponent,
    BeerListComponent,
    BeerListCardComponent,
    BeerPopupDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ROUTING,
    MatCardModule, MatListModule, MatProgressSpinnerModule, MatDialogModule, MatToolbarModule
  ],
  providers: [
    BeerListService
  ],
  bootstrap: [AppComponent],
  entryComponents: [BeerPopupDetailsComponent]
})
export class AppModule { }
