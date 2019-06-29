import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventformComponent } from './eventform/eventform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

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
