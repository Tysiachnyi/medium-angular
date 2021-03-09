import {ErrorHandler, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpJsonPlaceholderService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandler) {}

  getAllPosts(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get(url);
  }
}
