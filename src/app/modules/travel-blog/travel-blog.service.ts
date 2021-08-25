import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dummyData, TravelBlog } from '../../shared/travel-blog/travel-blog.interface';

@Injectable({
  providedIn: 'root',
})
export class TravelBlogService {
  BASE_URL = "http://localhost:10000";
  readonly API_URL = 'api/travel-blog';

  constructor(private http: HttpClient) { }

  getAllBlogs(searchForm: any): Observable<TravelBlog[]> {
    return of(dummyData);
    return this.http
      .post<any>(`${this.API_URL}/load`, searchForm);
  }
}
