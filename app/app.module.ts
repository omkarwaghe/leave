import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from'@angular/http';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployComponent } from './employ/employ.component';
import { LeaveComponent } from './leave/leave.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';

const data : Routes = [
  {path:'login' ,component : LoginComponent},
  {path:'' ,component : EmployeeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'leave',component: LeaveComponent},
  {path:'ApproveDeny',component: ApproveDenyComponent},
  {path:'applyLeave',component: ApplyleaveComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    ManagerComponent,
    DashboardComponent,
    EmployComponent,
    LeaveComponent,
    LeavehistoryComponent,
    ApproveDenyComponent,
    DropdownComponent,
    ApplyleaveComponent,

  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(data)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
