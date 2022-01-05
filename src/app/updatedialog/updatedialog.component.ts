import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Notificationn } from 'src/entities/Notification';
import { Student } from 'src/entities/Student';
import { SignalrService } from '../services/signalr.service';
import { StudentsdataService } from '../services/studentsdata.service';

@Component({
  selector: 'app-updatedialog',
  templateUrl: './updatedialog.component.html',
  styleUrls: ['./updatedialog.component.css']
})
export class UpdatedialogComponent implements OnInit {


  studentForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Student, private Shttp: StudentsdataService, private signalr: SignalrService) { }

  ngOnInit(): void {
    this.initForm()
   
  }

  onSubmit(){
    var student: Student = new Student()
    student.id = this.data.id
    student.name = this.studentForm.get('studentName').value;
    student.major = this.studentForm.get('studentMajor').value;
    this.Shttp.updateStudent(student.id, student).subscribe((res: Student)=>{
      var not: Notificationn = new Notificationn()
      not.studentName = this.data.name +" " + this.data.id
      not.tranType = "updated"
      this.signalr.InvokeNewUpdatedStudent(res)
      this.signalr.InvokeNewNotification(not)
    })

  }


  private initForm() {

    this.studentForm = new FormGroup({
      'studentName': new FormControl(this.data.name, Validators.required),
      'studentMajor': new FormControl(this.data.major, Validators.required)
     
    });
  }

}
