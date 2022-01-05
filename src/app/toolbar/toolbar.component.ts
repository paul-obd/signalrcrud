import { Component, NgZone, OnInit } from '@angular/core';
import { StudentsdataService } from '../services/studentsdata.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddstudentComponent } from '../dialog-addstudent/dialog-addstudent.component';
import { NotificationsHistoryComponent } from '../notifications-history/notifications-history.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private route: Router,private Shttp: StudentsdataService, private dialog: MatDialog, private ngZone: NgZone,) { }

  ngOnInit(): void {
 
   
  }

  openDialog(){
    this.dialog.open(DialogAddstudentComponent)
  }

  navigateToHistory(){
    this.route.navigate(['notifications-history'])
  }

}
