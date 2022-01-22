import { Injectable } from '@angular/core';
import { SignalrService } from './signalr.service';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/entities/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentsdataService {
  private PORT = "https://signalrcrud.herokuapp.com"
  desable: Boolean = true
  // allNotifications : any[] = []
  // allStudents: any[] = []
  constructor(private signalR: SignalrService, private http: HttpClient ) { 

      // signalR.NewNotification().subscribe((notification)=>{
      //       this.allNotifications.push(notification)
      // })
      // signalR.NewAddedStudent().subscribe(student=>{
      //     this.allStudents.push(student)
      // })
      // signalR.NewUpdatedStudent().subscribe(student =>{
      //  var currentstudent =  this.allStudents.find(s => s.Id == student.Id)
      //  var index = this.allStudents.indexOf(currentstudent)
      //  this.allStudents[index] = student
      // })
      // signalR.NewDeletedStudent().subscribe(student =>{
      //   var currentstudent =  this.allStudents.find(s => s.Id == student.Id)
      //   var index = this.allStudents.indexOf(currentstudent)
      //   delete this.allStudents[index]
      // })


  }


  getAllNotififcations(){

  }

   getAllStudents(){
     return this.http.get(`${this.PORT}/api/Students/all-Students`)
  }

  postStudent(student: Student){
    return this.http.post(`${this.PORT}/api/Students/add-student`, student)
  }

  updateStudent(id: string, student: Student){
     return this.http.put(`${this.PORT}/api/Students/update-student/${id}`, student)
  }
  deleteStudent(id: string){
    return this.http.delete(`${this.PORT}/api/Students/delete-student/${id}`)
  }
 
   startConnection(){
      if (!this.signalR.state()){
        this.signalR.start()
      }
   }

}
