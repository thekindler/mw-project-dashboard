import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from 'src/app/reports/reports.component';
//import { AboutComponent } from 'src/app/about/about.component';
//import { ContactsComponent } from 'src/app/contacts/contacts.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  }
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'contacts',
  //   component: ContactsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
