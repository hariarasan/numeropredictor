import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PredictorService {
  private apiUrl = environment.apiUrl;;

  constructor(private http: HttpClient) {}

  sendMobileNumber(mobileNumber: string): Observable<any> {
    const body = { mobileNumber };
    return this.http.post(this.apiUrl, body);
  }
}
