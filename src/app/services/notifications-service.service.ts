import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Notificationn } from 'src/entities/Notification';
import { SignalrService } from './signalr.service';


@Injectable({
  providedIn: 'root'
})
export class NotificationsServiceService {

  private PORT = "https://signalrcrud.herokuapp.com"



  constructor(private http: HttpClient ) {
       


     
   }

   getAllNotifications(){
     return this.http.get(`${this.PORT}/api/Notifications/all-notifications`)

   }


   deleteAllnotifications(){
     return this.http.delete(`${this.PORT}/api/Notifications/delete-all-notifications`)
   }



}
