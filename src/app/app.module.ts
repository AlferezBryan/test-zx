import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DefaultModule } from './layouts/default/default.module';
import { HomeComponent } from './modules/home/home.component';
import { FlowModule } from './modules/home/flow/flow.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    DefaultModule,
    BrowserAnimationsModule,
    FlowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
