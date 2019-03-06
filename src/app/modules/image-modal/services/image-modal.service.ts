import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { AuthGlobalService } from 'src/app/services/auth-global.service';
import { Observable } from 'rxjs';
import { ImageDetails } from '../interfaces/imageDetails';

@Injectable({
  providedIn: 'root'
})
export class ImageModalService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authGlobalService: AuthGlobalService
  ) { }

  // This function calls API to get data for clicked image
  public getImageInfo(id: string): Observable<ImageDetails> {
    return this.http.get<ImageDetails>(`${this.apiUrl}/public/users/image-info/${id}`);
  }
}
