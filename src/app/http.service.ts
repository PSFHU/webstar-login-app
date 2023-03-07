import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  applicantId: string;
  apiUrl: string;
  httpOptions: { headers: HttpHeaders };

  constructor() {
    this.applicantId = 'RANDOM';
    this.apiUrl = 'https://developer.webstar.hu/rest/frontend-felveteli/v2/';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Applicant-Id': this.applicantId,
      }),
    };
  }
}
