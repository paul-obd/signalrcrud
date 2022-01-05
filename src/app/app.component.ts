import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SignalR-ClientSide';
  constructor(private route: Router){}

  ngOnInit(): void {
    this.openrouteallstudents()
  }
  
  openrouteallstudents(){
    this.route.navigate(['all-students'])
}
}
