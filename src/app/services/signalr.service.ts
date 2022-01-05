import { Injectable } from '@angular/core';

import * as signalR from "@microsoft/signalr"
import { Subject } from 'rxjs';
import { Notificationn } from 'src/entities/Notification';
import { Student } from 'src/entities/Student';



@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private newNotification = new Subject<any>()
  private newAddedStudent = new Subject<any>()
  private newUpdatedStudent = new Subject<any>()
  private newDeletedStudent = new Subject<any>()

  //we define a client
  private client: signalR.HubConnection

 

  constructor() {
    //Inside the constructor
    //we define a hubconnection to connect to it
    this.client = new signalR.HubConnectionBuilder()
    .withUrl("https://signalrcrud.herokuapp.com/myhub")
    .withAutomaticReconnect()
    .build()

    //we listn on the connections we want tolisten to
    this.client.on("NewStudent", (data: Student)=>{

      //we use the subject variable to add in it the new data 
      this.newAddedStudent.next(data)
    })

    this.client.on("UpdateStudent", (data: Student)=>{
          this.newUpdatedStudent.next(data)
    })

    this.client.on("DeleteStudent", (data: Student)=>{
      this.newDeletedStudent.next(data)
    })

    this.client.on("NewNotification", (data: Notificationn)=>{
      this.newNotification.next(data)
    })
    
   }

   

   NewNotification()
   {
     //define a function that returns the subject variable asObservable()
     //so we can subscrbe to it from anothe components 
     return this.newNotification.asObservable()
   }

   NewAddedStudent(){
     return this.newAddedStudent.asObservable()
   }
   NewUpdatedStudent(){
    return this.newUpdatedStudent.asObservable()
  }
  NewDeletedStudent(){
    return this.newDeletedStudent.asObservable()
  }


//we define a method that start the connection to our hub 
//so we can call it whenever we want to start the connection
  start(){
    this.client.start()
  }
  stop(){
    this.client.stop()
  }

  state(): Boolean{
    if (this.client.state === signalR.HubConnectionState.Connected) {
      return true
    }else{
      return false
    }
  }

  //we define method to invoke new signals to our hub 
  //Example:
  InvokeNewNotification(notification: Notificationn){
    this.client.invoke("NewNotification", notification)
  }

  InvokeNewAddedStudent(student: Student){
    this.client.invoke("NewStudent", student)
  }
  InvokeNewUpdatedStudent(student: Student){
    this.client.invoke("UpdateStudent", student)
  }
  InvokeNewDeletedStudent(student: Student){
    this.client.invoke("DeleteStudent", student)
  }

}


