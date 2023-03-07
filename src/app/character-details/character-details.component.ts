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

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService
      .getCharacters()
      .subscribe(
        (responseCharacters) => (this.characters = responseCharacters)
      );
  }
}
