import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { ListOfClientsComponent } from './list-of-clients/list-of-clients.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectReportComponent } from './project-report/project-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListOfClientsComponent,
    SidebarComponent,
    HeaderComponent,
    ContactsComponent,
    CalendarComponent,
    ProjectReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
