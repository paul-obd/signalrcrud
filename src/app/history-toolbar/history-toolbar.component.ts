import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-toolbar',
  templateUrl: './history-toolbar.component.html',
  styleUrls: ['./history-toolbar.component.css']
})
export class HistoryToolbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  navigateToStudents(){
    this.route.navigate(['all-students'])
  }
}
