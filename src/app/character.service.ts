import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';
import { Character, Characters } from './character';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  /** GET characters from the server */
  getCharacters(): Observable<Character[]> {
    return this.http
      .get<Characters>(
        this.httpService.apiUrl + 'characters/',
        this.httpService.httpOptions
      )
      .pipe(
        map((response) => response.characters),
        tap((_) => console.log('Characters fetched'))
      );
  }
}
