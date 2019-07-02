import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventformComponent } from './eventform/eventform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateMessagesComponent } from './create-messages/create-messages.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventformComponent
  },
  {
    path: 'dashboards',
    component: DashboardComponent
  },
  {
    path: 'messages/create',
    component: CreateMessagesComponent
  },
  {
    path: 'messages/view',
    component: ViewMessagesComponent
  },
  {
    path: '',
    component: HomeComponent
  },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
