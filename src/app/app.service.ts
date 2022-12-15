import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AppService {

    constructor(private _http: HttpClient) {

    }
    getUserList(): Observable {
        return this._http.get('https://jsonplaceholder.typicode.com/users');
    }
    getTasksToUser(userId): Observable {
        return this._http.get('https://jsonplaceholder.typicode.com/todos/?uesrId='+userId);
    }

    getPostList(): Observable {
        return this._http.get('https://jsonplaceholder.typicode.com/post');
    }
    getCommentOfPost(postId): Observable {
        return this._http.get('https://jsonplaceholder.typicode.com/comments/?postId='+postId);
    }
}