import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { User } from '../interfaces/user';
import { ImagesList, Image } from '../interfaces/image';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getUserInfo(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`);
  }

  public getUserImages1(id: string): Observable<ImagesList> {
    return this.http.get<ImagesList>(`${this.apiUrl}/public/users/my-images/${id}`);
  }

  public getUserImages(id: string): Observable<Image[]> {
    return this.http.get<ImagesList>(`${this.apiUrl}/public/users/my-images/${id}`).pipe(
      map ((data: ImagesList) => {
        return data.images;
      }
    ));
  }
}
