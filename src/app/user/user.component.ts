import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isMoreview: boolean;
  @Input()
user;
  constructor() { }

  ngOnInit() {
    this.isMoreview = false;
  }
  openMoreDetails() {
    this.isMoreview?this.isMoreview=false:true;
  }
 
}


