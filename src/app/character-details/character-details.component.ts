import { Component } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.sass'],
})
export class CharacterDetailsComponent {
  characters: Character[] = [];
  activeCharacter?: Character;
  activeCharacterIndex = 0;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacters().subscribe((responseCharacters) => {
      this.characters = responseCharacters;
      this.activeCharacter = this.characters[this.activeCharacterIndex];
    });
  }

  goForward() {
    this.stepCharacter(+1);
  }
  goBack() {
    this.stepCharacter(-1);
  }


  refreshActiveCharacter(){
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
