import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { Challenge, ChallengesResponse } from './../interfaces/challenge';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengesServiceService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  // This function calls API to get array of Challenges according to parameters
  public getChallenges(isActive: number, isClosed: number): Observable<Challenge[]> {
    let params = new HttpParams();
    params = params.append('isActive', isActive.toString());
    params = params.append('isClosed', isClosed.toString());
    return this.http.get<ChallengesResponse>(`${this.apiUrl}/public/challenges/list`, { params }).pipe(
      map( (data: ChallengesResponse) => {
        return data.challenges;
      })
    );
  }
}
