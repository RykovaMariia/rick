import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrCardComponent } from './contr-card.component';

describe('ContrCardComponent', () => {
  let component: ContrCardComponent;
  let fixture: ComponentFixture<ContrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContrCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
