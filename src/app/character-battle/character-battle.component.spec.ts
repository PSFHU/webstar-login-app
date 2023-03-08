import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBattleComponent } from './character-battle.component';

describe('CharacterBattleComponent', () => {
  let component: CharacterBattleComponent;
  let fixture: ComponentFixture<CharacterBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBattleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
