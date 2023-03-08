import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { delay, filter, Observable, of, repeat, take, tap } from 'rxjs';
import { BattleCharacter, Character } from '../character';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-character-battle',
  templateUrl: './character-battle.component.html',
  styleUrls: ['./character-battle.component.sass'],
})
export class CharacterBattleComponent {
  characters: Character[] = [];
  darksideCharacter?: BattleCharacter;
  lightsideCharacter?: BattleCharacter;

  constructor(
    private location: Location,
    private simulationService: SimulationService
  ) {
    this.characters = simulationService.selectedCharacters;
  }

  ngOnInit() {
    this.startFight();
  }

  startFight() {
    this.characters.forEach((character) => {
      if (character.side == 'DARK') {
        this.darksideCharacter = this.createBattleCharacter(character);
      } else this.lightsideCharacter = this.createBattleCharacter(character);
    });
    this.battleTick()
      .pipe(
        repeat(),
        filter((data) => this.isFightOver()),
        tap((data) => console.log(data)),
        take(1)
      )
      .subscribe((result) => console.log(result));
  }

  createBattleCharacter(character: Character): BattleCharacter {
    return { character: character, healt: 100 };
  }

  battleTick(): Observable<string> {
    if (this.darksideCharacter && this.lightsideCharacter) {
      this.isDarkSideAttacking()
        ? this.applyDamage(this.darksideCharacter)
        : this.applyDamage(this.lightsideCharacter);
    }
    return of('figthing').pipe(delay(this.genrateRandomNumber(1000, 2000)));
  }

  isDarkSideAttacking(): boolean {
    return this.genrateRandomNumber(1, 10) <= 5;
  }
  isFightOver(): boolean {
    return (
      this.darksideCharacter?.healt == 0 || this.darksideCharacter?.healt == 0
    );
  }

  applyDamage(character: BattleCharacter, amount: number = 0) {
    if (amount > 0) character.healt - amount;
    else character.healt - this.genrateRandomNumber(1, 20);

    if (character.healt < 0) character.healt = 0;
  }

  /**
   * Genrate random int
   * @param min
   * @param max
   * @returns random int - min & max inclusive
   */
  genrateRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}
