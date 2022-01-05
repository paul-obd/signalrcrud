import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Notificationn } from 'src/entities/Notification';
import { Student } from 'src/entities/Student';
import { SignalrService } from '../services/signalr.service';
import { StudentsdataService } from '../services/studentsdata.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  allStudents: Student[] = []
  allNotifications: Notificationn[] = []
  sum = 20;
  direction = "";

  constructor(private Shttp: StudentsdataService, private signalR: SignalrService,  private cdr: ChangeDetectorRef) {
    signalR.NewNotification().subscribe((notification: Notificationn) => {
      
      //this.allNotifications.map(not => { }, this.allNotifications.push(notification))
      this.allNotifications.push(notification)
      cdr.detectChanges()
      
    })
    signalR.NewAddedStudent().subscribe((student: Student) => {
      
      //this.allStudents.map(s => {}, this.allStudents.push(student))
      this.allStudents.push(student)
      cdr.detectChanges()
      
    })
    signalR.NewUpdatedStudent().subscribe((student: Student )=> {
      var currentstudent = this.allStudents.find(s => s.id == student.id)
      var index = this.allStudents.indexOf(currentstudent)
      this.allStudents[index] = student
      cdr.detectChanges()
    })
    signalR.NewDeletedStudent().subscribe((student: Student) => {
     
      this.allStudents.forEach((element,index)=>{
        if(element.id==student.id) this.allStudents.splice(index,1);
     });
      cdr.detectChanges()
    
    })
  }

  ngOnInit(): void {
    // this.Shttp.getAllStudents().subscribe((res: any[]) => {
    //   this.allStudents = []
    //   this.allStudents = res
    //   this.Shttp.startConnection()
    // })
     this.getAllStudents()
    

  }


  clearNotifications(){
    this.allNotifications = []
    this.cdr.detectChanges()
  }

  getAllStudents(){
    this.Shttp.getAllStudents().subscribe((res: any[]) => {
      this.allStudents = []
      this.allStudents = res
      this.Shttp.startConnection()
    })
    
  }

  // onScrollDown(ev: any) {
  //   console.log("scrolled down!!", ev);

  //   this.sum += 20;
  //   this.appendItems();
    
  //   this.direction = "scroll down";
  // }

  // onScrollUp(ev: any) {
  //   console.log("scrolled up!", ev);
  //   this.sum += 20;
  //   this.prependItems();

  //   this.direction = "scroll up";
  // }

  // appendItems() {
  //   this.addItems("push");
  // }

  // prependItems() {
  //   this.addItems("unshift");
  // }

  // addItems(_method: string) {
  //   this.Shttp.getAllStudents().subscribe((res: Student[])=>{
  //     for (let i = 0; i < this.sum; ++i) {
  //       if( _method === 'push'){
  //         this.allStudents.push(res[i]);
  //       }else if( _method === 'unshift'){
  //         this.allStudents.unshift(res[i]);
  //       }
  //     }

  //   })
  
  // }


}
