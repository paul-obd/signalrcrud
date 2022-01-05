import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
   

  @Input() name =""
  @Input() tranType =""

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
