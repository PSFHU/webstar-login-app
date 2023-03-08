import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.sass'],
})
export class CharacterDetailsComponent {
  characters: Character[] = [];

  selectedCharacters: Character[] = [];
  activeCharacter?: Character;
  activeCharacterIndex = 0;

  constructor(
    private characterService: CharacterService,
    private simulationService: SimulationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((responseCharacters) => {
      this.characters = responseCharacters;
      this.activeCharacter = this.characters[this.activeCharacterIndex];
    });
  }

  selectCharacter(character: Character) {
    if (
      !this.isCharacterAlreadySelected(character) &&
      !this.isSelectedCharactersFull()
    ) {
      if (this.selectedCharacters.length > 0) {
        if (!this.isCharactersSameSide(this.selectedCharacters[0], character))
          this.selectedCharacters.push(character);
      } else this.selectedCharacters.push(character);
    } else this.removeCharacterFromSelected(character);
  }
  removeCharacterFromSelected(character: Character) {
    this.selectedCharacters = this.selectedCharacters.filter(
      (compare) => compare != character
    );
  }
  startBattle() {
    this.simulationService.selectedCharacters = this.selectedCharacters;
    this.router.navigateByUrl('/battle');
  }

  // Character checks
  isCharactersSameSide(character: Character, compare: Character): boolean {
    const result = character.side == compare.side;
    if (result) alert('Két ugyan olyan oldalon álló nem harcolhat!');
    return result;
  }

  isSelectedCharactersFull(): boolean {
    return this.selectedCharacters.length == 2;
  }

  isCharacterAlreadySelected(character: Character): boolean {
    return this.selectedCharacters.includes(character);
  }

  // Navigation
  goForward() {
    this.stepCharacter(+1);
  }
  goBack() {
    this.stepCharacter(-1);
  }
  refreshActiveCharacter() {
    this.activeCharacter = this.characters[this.activeCharacterIndex];
  }
  jumpTo(characterIndex: number) {
    if (this.characters[characterIndex]) {
      this.activeCharacterIndex = characterIndex;
      this.refreshActiveCharacter();
    }
  }
  stepCharacter(amount: number) {
    if (this.characters[this.activeCharacterIndex + amount]) {
      this.activeCharacterIndex += amount;
      this.refreshActiveCharacter();
    }
  }
}
