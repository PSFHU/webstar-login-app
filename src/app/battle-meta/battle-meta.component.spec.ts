import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleMetaComponent } from './battle-meta.component';

describe('BattleMetaComponent', () => {
  let component: BattleMetaComponent;
  let fixture: ComponentFixture<BattleMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleMetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
