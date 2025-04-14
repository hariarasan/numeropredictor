import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictorService {
  private apiUrl = 'http://localhost:8080/predictions';

  constructor(private http: HttpClient) {}

  sendMobileNumber(mobileNumber: string): Observable<any> {
    const body = { mobileNumber };
    return this.http.post(this.apiUrl, body);
  }
}
