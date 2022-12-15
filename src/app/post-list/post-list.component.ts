import { Component, OnInit, ViewChild } from '@angular/core';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @ViewChild(CommentListComponent, { static: false }) commentListRef: CommentListComponent;
  postList;
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getPostList().subscribe((data) => { this.postList = data });

  }
  selectedPost(id) {
    this.commentListRef.showComments(id);
  }

}
