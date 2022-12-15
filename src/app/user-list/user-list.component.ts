import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userId;
  userList;
  taskList;
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getUserList().subscribe((data) => { this.userList = data });

  }
  showTaskToUser(currentUserId) {
    this._appService.getTasksToUser(currentUserId).subscribe((data) => { this.taskList = data })
  }
}
