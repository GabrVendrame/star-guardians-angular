import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorganaComponent } from './morgana.component';

describe('MorganaComponent', () => {
  let component: MorganaComponent;
  let fixture: ComponentFixture<MorganaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorganaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
