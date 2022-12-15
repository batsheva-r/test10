import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  commentsList;
  @Input()
  postId;
  constructor(private _appService: AppService) { }

  ngOnInit() {
  }
  showComments(id)
  {
    this._appService.getCommentOfPost(id).subscribe((data) => { this.commentsList = data });
  }

}
