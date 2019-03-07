import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OnLoginAnswer } from './../interfaces/OnLoginAnswer';
import { User } from './../interfaces/User';
import { OnSignupAnswer } from './../interfaces/OnSignupAnswer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
    httpBackend: HttpBackend
  ) {
    this.http = new HttpClient(httpBackend);
  }

  login(email: string, password: string): Observable<OnLoginAnswer> {
    const expiresIn = '2592000000';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post<OnLoginAnswer>(`${this.apiUrl}/public/auth/login`, { email, expiresIn, password }, httpOptions).pipe(
      map((res: OnLoginAnswer): OnLoginAnswer => {
        if (!res.error) {
          localStorage.setItem('mlp_client_token', res.token);
        }
        return res;
      })
    );
  }

  signup(newUserData: User): Observable<OnSignupAnswer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post<OnSignupAnswer>(`${this.apiUrl}/public/auth/signup`, newUserData, httpOptions);
  }
}
