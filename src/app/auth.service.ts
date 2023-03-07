import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthProfile } from './user-auth-profile';
import { Observable, tap } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { HttpService } from './http.service';

const APPLICANT_ID = 'RANDOM';
const AUTH_API =
  'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Applicant-Id': APPLICANT_ID,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private tokenStorage: TokenStorageService
  ) {}

  isUserLoggedIn(): boolean {
    return this.tokenStorage.getToken() != null;
  }

  getToken(): string | null {
    return this.tokenStorage.getToken();
  }

  login(username: string, password: string): Observable<UserAuthProfile> {
    return this.http
      .post<UserAuthProfile>(
        this.httpService.apiUrl + 'authentication/',
        { username, password },
        this.httpService.httpOptions
      )
      .pipe(
        tap((responseUser) => {
          this.tokenStorage.saveToken(responseUser.token);
          this.tokenStorage.saveUser(responseUser);
          console.log('Signed in!');
        })
      );
  }

  logout() {
    this.tokenStorage.signOut();
  }
}
