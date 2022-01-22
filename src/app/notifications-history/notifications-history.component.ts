import { ChangeDetectorRef, Component,  OnInit } from '@angular/core';
import { Notificationn } from 'src/entities/Notification';
import { NotificationsServiceService } from '../services/notifications-service.service';
import { SignalrService } from '../services/signalr.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-notifications-history',
  templateUrl: './notifications-history.component.html',
  styleUrls: ['./notifications-history.component.css']
})
export class NotificationsHistoryComponent implements OnInit {



  allNotifications: Notificationn[] = []

  constructor(private spinner: NgxSpinnerService,private nhttp: NotificationsServiceService, private signalr: SignalrService,private cdr: ChangeDetectorRef) {
    signalr.NewNotification().subscribe((not: Notificationn)=>{
      this.allNotifications.push(not)
      cdr.detectChanges()
    
    })

    

   }

  ngOnInit(): void {
    this.spinner.show()
    this.nhttp.getAllNotifications().subscribe((res: Notificationn[])=>{
      this.allNotifications = []
      this.allNotifications =res
      this.spinner.hide()
    })
    
  }


  clearNotsHistory(){
    if(this.allNotifications.length == 0){
      alert("Notification history is empty")
    }
    else{
    if (confirm("This will clear notification history of all connected clients")) {
      this.nhttp.deleteAllnotifications().subscribe(()=>{
        this.allNotifications = []
        this.cdr.detectChanges()
        var not: Notificationn = new Notificationn()
        not.studentName = "Notifications History"
        not.tranType = "deleted"
        this.signalr.InvokeNewNotification(not)
      })
    }
    }
  }





}
