import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Notificationn } from 'src/entities/Notification';
import { Student } from 'src/entities/Student';
import { SignalrService } from '../services/signalr.service';
import { StudentsdataService } from '../services/studentsdata.service';

@Component({
  selector: 'app-dialog-addstudent',
  templateUrl: './dialog-addstudent.component.html',
  styleUrls: ['./dialog-addstudent.component.css']
})
export class DialogAddstudentComponent implements OnInit {

  studentForm: FormGroup;


  constructor(private Shttp: StudentsdataService, private signalr: SignalrService) { }

  ngOnInit(): void {
    this.initForm()
  }

  onSubmit() { 
   const student: Student = new Student();
   student.name = this.studentForm.get('studentName').value;
   student.major = this.studentForm.get('studentMajor').value;
   this.Shttp.postStudent(student).subscribe((res: any)=>{
     var not: Notificationn = new Notificationn()
     not.studentName = res.name
     not.tranType = "added"
     this.signalr.InvokeNewAddedStudent(res)
     this.signalr.InvokeNewNotification(not)
    //  this.Shttp.getAllStudents()

   })

  }

  private initForm() {

    this.studentForm = new FormGroup({
      'studentName': new FormControl(null, Validators.required),
      'studentMajor': new FormControl(null, Validators.required)
     
    });
  }

}
