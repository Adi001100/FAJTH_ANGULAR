import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatGuessComponent } from './beat-guess.component';

describe('BeatGuessComponent', () => {
  let component: BeatGuessComponent;
  let fixture: ComponentFixture<BeatGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatGuessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
