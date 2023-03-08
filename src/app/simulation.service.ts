import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Character } from './character';
import { HttpService } from './http.service';
import { SimulationId } from './simulation-id';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  selectedCharacters: Character[] = [];

  constructor(private http: HttpClient, private httpService: HttpService) {}

  /** GET characters from the server */
  getSimulationValidation(characters: Character[]): Observable<SimulationId> {
    let simulationJson = {
      dark: '',
      light: '',
    };
    characters.forEach((character) => {
      if (character.side == 'DARK') simulationJson.dark = character.id;
      else simulationJson.light = character.id;
    });
    return this.http
      .post<SimulationId>(
        this.httpService.apiUrl + 'simulate/',
        simulationJson,
        this.httpService.httpOptions
      )
      .pipe(tap((_) => console.log('Simulation Approved')));
  }
}
