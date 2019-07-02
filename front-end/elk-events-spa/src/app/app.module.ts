import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventformComponent } from './eventform/eventform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './safepipe';
import { EventService } from './eventform/event.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateMessagesComponent } from './create-messages/create-messages.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    EventformComponent,
    DashboardComponent,
    HomeComponent,
    SafePipe,
    CreateMessagesComponent,
    ViewMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
