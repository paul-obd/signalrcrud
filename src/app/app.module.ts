import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';  
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { DialogAddstudentComponent } from './dialog-addstudent/dialog-addstudent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { UpdatedialogComponent } from './updatedialog/updatedialog.component';
import { NotificationsHistoryComponent } from './notifications-history/notifications-history.component';
import { NotificationsServiceService } from './services/notifications-service.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HistoryToolbarComponent } from './history-toolbar/history-toolbar.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsComponent,
    StudentComponent,
    DialogAddstudentComponent,
    NotificationComponent,
    UpdatedialogComponent,
    NotificationsHistoryComponent,
    HistoryToolbarComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [NotificationsServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
