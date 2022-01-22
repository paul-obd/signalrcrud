import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Notificationn } from 'src/entities/Notification';
import { Student } from 'src/entities/Student';
import { SignalrService } from '../services/signalr.service';
import { StudentsdataService } from '../services/studentsdata.service';
import { UpdatedialogComponent } from '../updatedialog/updatedialog.component';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() id = ""
  @Input() name = ""
  @Input() major = ""



  constructor(private spinner: NgxSpinnerService,private dialog: MatDialog, private shttp: StudentsdataService, private signalr: SignalrService) { }

  ngOnInit(): void {
  }
  
  openDialog(){
   var student: Student = new Student()
   student.name = this.name
   student.major = this.major
   student.id = this.id
    this.dialog.open(UpdatedialogComponent, {data: {id: this.id, name: this.name, major: this.major}})
    
  }


  deleteStudent(){
    
    if (confirm(`Are you sure you want to delete ${this.name}?`)) {
      // this.spinnerStatus = "Deleting..."
      this.spinner.show("delete")
      this.shttp.deleteStudent(this.id).subscribe((res: Student)=>{
        var not: Notificationn = new Notificationn()
        not.studentName = this.name +" " + this.id
        not.tranType = "deleted"
        this.signalr.InvokeNewDeletedStudent(res)
        this.signalr.InvokeNewNotification(not)
        this.spinner.hide("delete")
  
      })
    }
 
  }
}
