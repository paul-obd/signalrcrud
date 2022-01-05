import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsHistoryComponent } from './notifications-history/notifications-history.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'all-students', component: StudentsComponent },
  {path: 'notifications-history', component: NotificationsHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
