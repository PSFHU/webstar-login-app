import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battle-meta',
  templateUrl: './battle-meta.component.html',
  styleUrls: ['./battle-meta.component.sass'],
})
export class BattleMetaComponent {
  @Input() characterName?: string;
  @Input() healt?: number;
}
