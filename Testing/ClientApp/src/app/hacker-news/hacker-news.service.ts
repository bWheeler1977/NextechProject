import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class HackerNewsService {
  constructor(private http: HttpClient) {}

  getTopStories(): Observable<any> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/newstories.json?orderBy="$key"&limitToFirst=50')
      .pipe(flatMap((articleIds: number[]) => {
        return Observable.forkJoin(
          articleIds.map((articleId: any) => {
            return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + articleId + '.json')
          }))
      }))
  }
}
